// next.config.js
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

// module.exports = withCSS({
//     withImages(){}
//   })

  // module.exports = withPlugins([
  //   [withImages],
  //   [withCSS]])


    const nextConfig = {
      distDir: 'build',
      webpack: (config) => {
        config.module.rules.push(
          {
            test: /\.md$/,
            use: 'raw-loader'
          }
        )
    
        return config
      }
    };
    
    module.exports = withPlugins([
      [withImages],
    [withCSS]
    ], nextConfig);




// module.exports = {
//   webpack: (config) => {
//     config.module.rules.push(
//       {
//         test: /\.md$/,
//         use: 'raw-loader'
//       }
//     )

//     return config
//   },
// }


 // module.exports = withTypescript(withSass());



// module.exports = {
//     ...require('@zeit/next-css')
//   // ...require('next-images')
// }


// exports.withCSS = function() {};
// exports.withImages = function() {};
