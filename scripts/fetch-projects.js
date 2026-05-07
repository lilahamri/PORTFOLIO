
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'lilahamri';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';

const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

async function fetchGitHubProjects() {
  try {
    console.log(`📦 Récupération des projets GitHub pour "${GITHUB_USERNAME}"...`);

    const headers = {
      'Accept': 'application/vnd.github.v3+json',
    };

    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }

    const response = await fetch(GITHUB_API_URL + '?sort=updated&per_page=100', {
      headers,
    });

    if (!response.ok) {
      throw new Error(`Erreur GitHub API: ${response.status} ${response.statusText}`);
    }

    const repos = await response.json();

    // Filtrer les repos private et forks si désiré
    const publicRepos = repos
      .filter(repo => !repo.private)
      .filter(repo => !repo.fork || repo.stargazers_count > 5); // Inclure les forks populaires

    console.log(`✅ ${publicRepos.length} projets trouvés\n`);

    // Transformer en format de projects.json
    const projects = publicRepos.slice(0, 6).map((repo, index) => ({
      id: index + 1,
      title: repo.name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      description: repo.description || 'Un projet intéressant.',
      technologies: repo.topics.length > 0 ? repo.topics : ['GitHub'],
      github: repo.html_url,
      demo: repo.homepage || '#',
    }));

    // Générer fichier projects.json
    const projectsPath = path.join(__dirname, '../client/public/data/projects.json');
    const projectsDir = path.dirname(projectsPath);

    if (!fs.existsSync(projectsDir)) {
      fs.mkdirSync(projectsDir, { recursive: true });
      console.log(`📁 Dossier créé: ${projectsDir}`);
    }

    fs.writeFileSync(
      projectsPath,
      JSON.stringify({ projects }, null, 2)
    );

    console.log(`✨ Fichier généré: ${projectsPath}`);
    console.log(`\n📋 Projets trouvés:`);
    projects.forEach(p => {
      console.log(`  - ${p.title}`);
      console.log(`    Technologies: ${p.technologies.join(', ')}`);
    });

  } catch (error) {
    console.error('❌ Erreur:', error.message);
    process.exit(1);
  }
}

fetchGitHubProjects();
