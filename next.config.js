require('dotenv').config();

const withCSS = require('@zeit/next-css');
const webpack = require('webpack');

const api_key =JSON.stringify("28a3e9f3f8993671fb4c74093f7bce2d");

module.exports = withCSS({
  webpack: config => {
    const env = { api_key: api_key };
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },
});

