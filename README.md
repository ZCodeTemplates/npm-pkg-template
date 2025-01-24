to add version tag use the commands:


git tag v{TAG_VERSION}

git push origin v{TAG_VERSION}



we should add releases instead of tags, this way the changelog will appear in the release

## Tools Overview

### 1. `api-reports`
Generates a report listing all the exported functions, classes, and types from your project. Useful for tracking the available APIs and documenting them for developers.

### 2. `api-docs`
Automatically generates detailed API documentation for your project, including function descriptions, parameters, return types, and examples. Ideal for providing users with a clear guide to using your library.

### 3. `Tsup`
A fast and minimal bundler for TypeScript. Tsup compiles TypeScript code into JavaScript, supports multiple output formats (CommonJS, ESM), and can generate type declaration files (`.d.ts`). It offers a zero-config setup and is optimized for speed, making it ideal for bundling TypeScript libraries.

### 4. `Changelog with conventional-changelog-cli`
Automatically generates a changelog based on your commit history using Conventional Commit messages. The changelog should be updated **before merging into `develop`, `staging`, or `master` branches**, or **within Pull Requests (PRs)**.