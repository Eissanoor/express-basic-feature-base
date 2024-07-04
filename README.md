# Express Basic feature-base

[![npm version](https://badge.fury.io/js/express-basic-feature-base.svg)](https://badge.fury.io/js/express-basic-feature-base)

Express Basic feature-base is a command-line interface (CLI) tool that simplifies the process of setting up a basic Express.js project with a structured folder layout, essential packages, documentation.

## Feature-base

- **Quick Setup**: Initialize a new Express project with one command.
- **feature-base Folder Structure**: Organized folders for controllers, models, and routes.
- **Basic Packages**: Includes essential npm packages pre-configured.
- **Customizable**: Easily extend or modify the generated project structure.

## Installation

Install the CLI tool globally to use it from anywhere:

```bash
npm install -g express-basic-feature-base

express-basic-feature-base <project-name>
```

Alternatively, you can use npx to run the tool without installing it globally:

```bash
npx express-basic-feature-base <project-name>
```

## Project Folder Structure

```bash
my-mvc-app/
├── features/
│   ├── users/
│   │   ├── userController.js
│   │   ├── userModel.js
│   │   ├── userRoutes.js
├── views/
│   ├── users/
│   │   ├── userView.ejs
├── public/
│   ├── css/
│   │   ├── styles.css
│   ├── js/
│   │   ├── script.js
├── app.js
├── package.json
├── README.md

```