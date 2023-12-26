import { resolve } from 'pathe';
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts({
    insertTypesEntry: true
  })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      // the proper extensions will be added
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      output: {
          inlineDynamicImports: false,
          preserveModules: true,
          dir: "./dist",
          entryFileNames: ({ name: fileName }) => {
            return `${fileName}.[format].js`
          },
      }
    },
  }
})

// import { resolve } from 'pathe';
// import { defineConfig } from 'vite'
// import dts from 'vite-plugin-dts'

// export default defineConfig({
//   plugins: [dts({
//     insertTypesEntry: true
//   })],
//   build: {
//     lib: {
//       entry: resolve(__dirname, 'src/index.ts'),
//       name: 'NajizHttp',
//       // the proper extensions will be added
//       fileName: 'najiz-http',
//       formats: ['es', 'cjs']
//     },
//     rollupOptions: {
//       output: {
//           inlineDynamicImports: false,
//           preserveModules: true,
//           dir: "./dist",
//           entryFileNames: ({ name: fileName }) => {
//               return `${fileName}.[format].js`
//           },
//       }
//     }
//   },
// })