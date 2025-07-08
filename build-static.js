import { build } from 'vite'
import { resolve } from 'path'

async function buildStatic() {
  try {
    await build({
      root: './client',
      build: {
        outDir: '../dist',
        emptyOutDir: true,
      },
      base: './',
      resolve: {
        alias: {
          '@': resolve(process.cwd(), './client/src'),
        },
      },
    })
    console.log('Static build completed successfully!')
  } catch (error) {
    console.error('Build failed:', error)
    process.exit(1)
  }
}

buildStatic()