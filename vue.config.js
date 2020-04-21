module.exports = {
  // pwa: {
  //   workboxPluginMode: 'GenerateSW',
  //   workboxOptions: {
  //     navigateFallback: '/index.html',
  //     runtimeCaching: [
  //       {
  //         urlPattern: new RegExp('^https://api.zippopotam.us/us/'),
  //         handler: 'networkFirst',
  //         options: {
  //           networkTimeoutSeconds: 20,
  //           cacheName: 'api cache',
  //           cacheableResponse: {
  //             statuses: [0, 200]
  //           }
  //         }
  //       }
  //     ]
  //   }
  // },
  pwa: {
    name: 'My App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js',
      // ...other Workbox options...
      navigateFallback: '/index.html',
    }
  },
  "transpileDependencies": [
    "vuetify"
  ],
  lintOnSave: false
} 