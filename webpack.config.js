const path = require('path');

const PATHS = {
    app: path.join(__dirname, 'client', 'src'),
    main: path.join(__dirname,'src'),
    server:path.join(__dirname, 'server')
};
console.log(PATHS);


var config = {
   entry: PATHS.main + '/main.js',
	
   output: {
      path:PATHS.server,
      filename: '/index.js',
   },
	
   devServer: {
      inline: true,
      port: 7777
   },
	
   module: {
      loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',
			
         query: {
            presets: ['es2015', 'react']
         }
      }]
   }
	
}

module.exports = config;
