# <p align="center"><b>TypeScript Sandbox</b></p>

<p align="center">TypeScript Sandbox is a convenient and interactive environment for creating and managing TypeScript projects.</p>

<p align="center">This repository is configured for quick creation, launching, and management of TypeScript projects using modern tools such as <b>Inquirer</b> and <b>Plop</b>.</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-%E2%9C%94-blue?style=flat&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Node.js-%3E%3D16-green?style=flat&logo=node.js&logoColor=white" alt="Node.js Version"/>
  <img src="https://img.shields.io/badge/pnpm-Workspaces-ffa500?style=flat&logo=pnpm&logoColor=white" alt="pnpm Workspaces"/>
  <img src="https://img.shields.io/badge/License-MIT-brightgreen?style=flat&logo=open-source-initiative&logoColor=white" alt="License"/>
  <img src="https://img.shields.io/github/stars/gusarovv/typescript-sandbox?style=flat&logo=github&logoColor=white&color=purple" alt="GitHub Stars"/>
</p>

## ✨ **Features**

- Interactive CLI for creating and managing projects.
- Simple creation of new TypeScript projects using templates.
- Launch projects with script selection (`start`, `dev`, `build`).
- Convenient structure using `pnpm workspaces` for managing multiple projects.
- Modern development tools including Inquirer, Plop, BiomeJS and TSX.

---

## ✅ **Requirements**

Before starting, make sure you have installed:

1. **Node.js** version 16+ (recommended 20+).
2. **pnpm** version 8+ (you can install it with `npm install -g pnpm`).

---

## 💻 **Installation**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/gusarovv/typescript-sandbox.git
   cd typescript-sandbox
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Ensure everything is set up correctly:**

   ```bash
   pnpm run cli
   ```

## 📖 **Usage**

1. **Launching the CLI**

    To start the interactive interface, use:
    ```bash
    pnpm run cli
    ```

2. **CLI Features**
After launching, you will see a list of available actions:

    **Create Project**
      * Allows you to create a new TypeScript project.

      * Creation process:
        1. Enter the project name.
        2. The project will be automatically created in the `projects/` folder.

    **Run Project**
      * Allows you to select an existing project and run one of the available scripts:
        * `start`: single run.
        * `dev`: run in watch mode.
        * `build`: compile TypeScript to JavaScript.

    **Exit**
      * Exits the CLI.

## 🗂️ **Project Structure**
```plaintext
sandbox/
├── projects/              # Directory with projects
│   ├── example-project/   # Example project
│   │   ├── src/           # Project source code
│   │   │   └── index.ts
│   │   ├── package.json   # npm configuration
│   │   └── tsconfig.json  # TypeScript configuration
├── templates/             # Templates for creating new projects
│   ├── package.hbs        # package.json template
│   ├── tsconfig.hbs       # tsconfig.json template
│   ├── README.hbs         # README.md template
│   └── index.hbs          # index.ts template
├── cli.js                 # Main CLI script
├── plopfile.js            # Plop configuration for project creation
├── tsconfig.json          # Common TypeScript configuration
├── biome.jsonc            # BiomeJS configuration
├── pnpm-workspace.yaml    # pnpm workspaces configuration
└── README.md              # Project documentation
```

## 🛠️ **Creating New Projects**
1. **Templates**
Project templates are located in the `templates/` folder.\
You can edit or add new files to change the structure of the created projects.

2. **Creating a Project via CLI**
    1. Run the CLI:
        ```bash
        pnpm run cli
        ``` 

    2. Choose "Create Project".

    3. Enter the project name.

    4. The new project will appear in the `projects/` folder.

## 🚀 **Running Existing Projects**
1. Run the CLI:
    ```bash
    pnpm run cli
    ```

2. Choose "Run Project".

3. Select the project you want to run.

4. Choose a script (`start`, `dev`, `build`).

## ⚙️ **Configuration**

1. **TypeScript**

    TypeScript configuration is located in the root tsconfig.json. Each project extends it using its own tsconfig.json.

2. Linting and Formatting

    * BiomeJS is configured to maintain a consistent code style and perform code linting and formatting.

    * Scripts for checking and formatting code:
        ```bash
        pnpm biome check    # Code linting
        pnpm biome format   # Code formatting
        ```

## 📦 **Tools and Technologies**
* **Node.js**: Server environment for executing JavaScript.
* **pnpm**: Package manager for efficient dependency management.
* **TypeScript**: A programming language with strong typing.
* **Inquirer**: Interactive CLI tool.
* **Plop**: Code generator based on templates.
* **BiomeJS**: All-in-one tool for code formatting, linting, and more.
* **TSX**: Fast tool for running TypeScript.

## 💡 **Commands**

### Main Commands
```bash
pnpm run cli           # Launch the interactive interface
pnpm run plop          # Manually run Plop to create a project
pnpm biome check       # Code linting
pnpm biome format      # Code formatting
```
### Project Scripts
After creating a project, you can use the following commands from the CLI or directly from the project folder:
```bash
pnpm start             # Single run
pnpm dev               # Run in development mode
pnpm build             # Project compilation
```

## 🔮 **Extending Functionality**

1. Open the `templates/` folder.

2. Create or modify template files.

3. Update `plopfile.js` to work with new templates.

## 💎 **Contributing**
If you have a request for a new feature you can open an issue on Github.

## 👨‍💻 **Author**
Made by [gusarovv](https://github.com/gusarovv) with ❤️

Please give a ⭐️ if this project helped you!