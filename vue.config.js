module.exports = {
  pwa: {
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
      // runtimeCaching: [
      //   {
      //     urlPattern: new RegExp('^https://api.zippopotam.us/us/'),
      //     handler: 'networkFirst',
      //     options: {
      //       networkTimeoutSeconds: 20,
      //       cacheName: 'api cache',
      //       cacheableResponse: {
      //         statuses: [0, 200]
      //       }
      //     }
      //   }
      // ]
    }
  },
  "transpileDependencies": [
    "vuetify"
  ],
  lintOnSave: false
} 