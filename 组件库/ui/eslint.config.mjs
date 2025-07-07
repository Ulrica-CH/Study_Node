

import tseslint from 'typescript-eslint'
export default tseslint.config({
    files: ['**/*.{ts,tsx,js}'],
    ignores: ['apps/**/*/{tmp,.dumi}/**/*', '*.js', '**/*/build/**/*', '**/*/es/**/*', '**/*/dist/**/*'],
    rules: {
    "no-console": 'error',
    "no-debugger": 'error',
    },
    languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
            project: ['./tsconfig.eslint.json', '**/*/tsconfig.json'],
            // tsconfigRootDir: import.meta.dirname
        }
    }
    
})
