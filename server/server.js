require('babel-core/register');
require('babel-polyfill');


const path = require('path')
const express = require('express')
const ejs = require('ejs')
const config = require('./config')
const axios = require('axios')
const md5= require('md5')

const {
  PORT, 
  MARVEL_PUBLIC_KEY, MARVEL_PRIVATE_KEY, MARVEL_GATEWAY,
  NEWSAPI_KEY, NEWSAPI_SOURCES_URL, NEWSAPI_ARTICLES_URL,
  universalTimeout
} = config; 

const server = express();
const distPath = path.resolve(__dirname, '/dist');

const characterUrl = `${MARVEL_GATEWAY}v1/public/characters`;

server.set('port', PORT)

server.engine('html', ejs.renderFile)
server.set('view engine', 'html')
server.set('views', path.resolve(__dirname, './views'))


server.use('/dist', express.static('dist'))

server.get('/', (req, res) => {
  res.render('index');
})

server.get('/search', (req, res) => {
  const ts = Date.now();

  const options = { 
    params: { 
      nameStartsWith: req.query.query,
      apikey: MARVEL_PUBLIC_KEY,
      limit: 25,
      ts,
      hash: md5(`${Date.now()}${MARVEL_PRIVATE_KEY}${MARVEL_PUBLIC_KEY}`),
    },
    responseType: 'json',
    timeout: universalTimeout
  };
  
  axios.get(characterUrl, options)
  .then((response) => {
    res.status(200).json(response.data);
  })
  .catch((error) => {
    console.log('ERROR', error)
    res.status(409).json(error).end();
  });
})

server.get('/news/:source', (req, res) => {
  const options = {
    params: {
      source: 'the-verge', //'usa-today',
      apiKey: NEWSAPI_KEY,
    },
    timeout: universalTimeout
  }
    
  axios.get(NEWSAPI_ARTICLES_URL, options)
    .then((response) => {
      res.status(200).json(response.data)
    })
    .catch((error) => {
      console.log('ERROR', error)
      res.status(400).json(error)
    })
})

server.get('/sources', (req, res) => {
  const options = {
    params: {
      language: 'en',
    },
    timeout: universalTimeout
  }
    
  axios.get(NEWSAPI_SOURCES_URL, options)
    .then((response) => {
      console.log('SOURCES', response.data)
      res.status(200).json(response.data)
    })
    .catch((error) => {
      console.log('ERROR', error)
      res.status(400).json(error)
    })
})

// server.get('/search', (req, res) => {
//   console.log('REQ', req.query.query);
  
//   axios.get(config.TEST_API)
//   .catch((error) => {
//     console.log('ERROR', error.response)
//     res.json(error.response);
//   })
//   .then((result) => {
//     console.log('RESULT', result);
//     res.json(result.data);
//   });
// })

server.listen(server.get('port'), () => {
  console.log(`SomeApp started on ${server.get('port')}`);
})