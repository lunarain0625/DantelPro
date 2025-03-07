import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    // base:"/DantelPro/",
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        vue(),
        Components({
            resolvers: [
                PrimeVueResolver()
            ]
        }),
        AutoImport({
            // targets to transform
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/,
                /\.vue\?vue/, // .vue
                /\.md$/, // .md
            ],

            // global imports to register
            imports: [
                // presets
                'vue',
                'vue-router',
                // custom
                {
                    '@vueuse/core': [
                        // named imports
                        'useMouse', // import { useMouse } from '@vueuse/core',
                        // alias
                        ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
                    ],
                    'axios': [
                        // default imports
                        ['default', 'axios'], // import { default as axios } from 'axios',
                    ],
                },
                // example type import
                {
                    from: 'vue-router',
                    imports: ['RouteLocationRaw'],
                    type: true,
                },
            ],

            // Enable auto import by filename for default module exports under directories
            defaultExportByFilename: false,

            // Auto import for module exports under directories
            // by default it only scan one level of modules under the directory
            dirs: [
                // './hooks',
                // './composables' // only root modules
                // './composables/**', // all nested modules
                // ...
            ],

            // Filepath to generate corresponding .d.ts file.
            // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
            // Set `false` to disable.
            dts: './auto-imports.d.ts',

            // Array of strings of regexes that contains imports meant to be ignored during
            // the declaration file generation. You may find this useful when you need to provide
            // a custom signature for a function.
            ignoreDts: [
                'ignoredFunction',
                /^ignore_/
            ],

            // Auto import inside Vue template
            // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
            vueTemplate: false,

            // Custom resolvers, compatible with `unplugin-vue-components`
            // see https://github.com/antfu/unplugin-auto-import/pull/23/
            resolvers: [
                /* ... */
            ],

            // Inject the imports at the end of other imports
            injectAtEnd: true,

            // Generate corresponding .eslintrc-auto-import.json file.
            // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
            eslintrc: {
                enabled: false, // Default `false`
                // provide path ending with `.mjs` or `.cjs` to generate the file with the respective format
                filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
                globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
            },
        })
    ],
})
