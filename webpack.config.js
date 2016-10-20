module.exports = {
  entry: './src/choroplethTopoJSON.js',
  output: {
    path: __dirname + '/dist',
    filename: 'choroplethTopoJSON.min.js'
  },
  externals: {
    'leaflet': 'L'
  }
}