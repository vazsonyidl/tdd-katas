import { defineConfig } from 'vitest/config'

export default defineConfig({
    plugins: [],
    test: {
        include: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
        globals: true
    },
})