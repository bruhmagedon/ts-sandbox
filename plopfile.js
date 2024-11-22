import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default function (plop) {
  plop.setGenerator('project', {
    description: 'Creating a new TypeScript project',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the project:',
        validate: (value) => {
          if (/.+/.test(value)) {
            return true;
          }
          return 'The project name cannot be empty';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: `${__dirname}/projects/{{kebabCase name}}/package.json`,
        templateFile: 'templates/package.hbs',
      },
      {
        type: 'add',
        path: `${__dirname}/projects/{{kebabCase name}}/tsconfig.json`,
        templateFile: 'templates/tsconfig.hbs',
      },
      {
        type: 'add',
        path: `${__dirname}/projects/{{kebabCase name}}/src/index.ts`,
        templateFile: 'templates/index.hbs',
      },
      {
        type: 'add',
        path: `${__dirname}/projects/{{kebabCase name}}/README.md`,
        templateFile: 'templates/README.hbs',
      },
    ],
  });
}
