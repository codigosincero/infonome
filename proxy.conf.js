const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://servicodados.ibge.gov.br/api',
    secure: false,
    logLevel: 'debug',
    pathRewrite: { '^/api': '' }


  }
];

module.exports = PROXY_CONFIG;
