import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],  // CommonJS and ES Modules output
  dts: true,  // Generate declaration files
  minify: true,  // Minify the output
  clean: true,  // Clean output directory before build
})
