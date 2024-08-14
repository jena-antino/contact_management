# Project Setup

This document provides instructions to set up a TypeScript project with Express and nodemon.

## Initial Setup

1. **Initialize a new Node.js project:**

   ```bash
   npm init -y
   ```

2. **Install necessary dependencies:**

   ```bash
   npm install express nodemon
   ```

3. **Install TypeScript and type definitions as development dependencies:**

   ```bash
   npm install -D @types/express typescript ts-node
   ```

4. **Create `tsconfig.json` for TypeScript configuration:**

   Create a `tsconfig.json` file in the project root with the following content:

   ```json
   {
     "include": ["./src/**/*"],
     "exclude": ["node_modules", "**/*.test.ts"],
     "compilerOptions": {
       "target": "es6",
       "module": "commonjs",
       "skipLibCheck": true,
       "moduleResolution": "node",
       "lib": ["es6", "dom"],
       "allowJs": true,
       "outDir": "build",
       "rootDir": "src",
       "strict": false,
       "noImplicitAny": false,
       "esModuleInterop": true,
       "resolveJsonModule": true,
       "strictPropertyInitialization": false,
       "typeRoots": ["./node_modules/@types", "./types"]
     },
     "paths": {
       "exceljs": ["node_modules/exceljs/dist/exceljs.min"]
     }
   }
   ```

5. **Update `package.json` to include a start script:**

   Modify the `scripts` section in your `package.json` to include:

   ```json
   "scripts": {
     "start": "ts-node src/index.ts"
   }
   ```

6. **Create a `nodemon` configuration file:**

   Create a `nodemon.json` file with the following content:

   ```json
   {
     "watch": ["src", "**/*.ts"],
     "events": {
       "start": "cls"
     },
     "ext": ".ts,.js",
     "ignore": [],
     "exec": "ts-node ./src/app.ts"
   }
   ```

## Running the Project

- **Start the project using ts-node:**

  ```bash
  npm start
  ```

- **Start the project with nodemon for automatic reloading:**
  ```bash
  npx nodemon
  ```

## Project Structure

- `src/`: Contains TypeScript source files.
- `build/`: Compiled JavaScript files (output directory).

## Additional Notes

- Ensure `ts-node` and `nodemon` are installed locally or globally for smooth operation.
- Customize `nodemon.json` and `tsconfig.json` as needed based on project requirements.
