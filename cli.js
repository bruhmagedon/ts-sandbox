#!/usr/bin/env node

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import inquirer from 'inquirer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsDir = path.join(__dirname, 'projects');

if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir);
}

const projects = fs
  .readdirSync(projectsDir)
  .filter((file) => fs.statSync(path.join(projectsDir, file)).isDirectory());

const main = async () => {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Выберите действие:',
      choices: ['Create Project', 'Run Project', 'Exit'],
    },
  ]);

  if (action === 'Create Project') {
    execSync('pnpm run plop', { stdio: 'inherit' });
  } else if (action === 'Run Project') {
    if (projects.length === 0) {
      console.log('There are no projects available. First, create a project.');
      return;
    }

    const { project } = await inquirer.prompt([
      {
        type: 'list',
        name: 'project',
        message: 'Select the project to run:',
        choices: projects,
      },
    ]);

    const { script } = await inquirer.prompt([
      {
        type: 'list',
        name: 'script',
        message: 'Select the script to execute:',
        choices: ['start', 'dev', 'build'],
      },
    ]);

    execSync(`pnpm --filter ${project} ${script}`, { stdio: 'inherit' });
  } else {
    console.log('Exit the program.');
  }
};

main();
