# Table of Contents

1. [Install Vitest and Set up](#install-vitest-and-set-up)
2. [Install React Testing Library](#install-react-testing-library)

## Install Vitest and Set up

```shell
npm install -D vitest jsdom @types/jest vite-tsconfig-paths @vitejs/plugin-react
```

Next step, we should add the scipt into package,json following the section

```json
// package.json
{
  "scripts": {
    "test": "vitest", // run test with watch mode
    "test:silent": "vitest --silent", // silent to filter out console.log
    "coverage": "vitest run --coverage" // coverage run to check for Statements, Branches, Functions and Lines.
  }
}
```

Next we add to dependencies types to let editor know our project using types from vitest and jest by the following section

```json
// tsconfig.json or tsconfig.app.json
{
  "compilerOptions": {
    ...,
    /* Testing */
    "types": ["vitest/jsdom",  "jest"]
  },
  "include": ["src"]
}
```

Next we are adding and jest and vitest by setup

```ts
// setupTests.ts
/// <reference types="vitest" />

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/vitest";
```

Next create a file for vitest config as below

```ts
// vitest.config.ts
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    ...configDefaults,
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
});
```

## Install React Testing Library

```bash
npm install --save-dev @testing-library/react @testing-library/dom @types/react @types/react-dom @testing-library/jest-dom
```

Next we will change this config for auto complete to know vitest matcher

```ts
// tsconfig.json or tsconfig.app.json
"include": ["src","./setupTests.ts"]
```

Happy Coding 😊
