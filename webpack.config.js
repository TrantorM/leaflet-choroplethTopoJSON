module.exports = {
  entry: './src/choropleth.js',
  output: {
    path: __dirname + '/dist',
    filename: 'choropleth.min.js'
  },
  externals: {
    'leaflet': 'L'
  }
}