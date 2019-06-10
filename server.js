const express = require('express');
const helmet = require('helmet');
const server = express();
const Accounts = require ('./data/accounts-model.js') //references actions db file

server.use(express.json()) 
server.use(helmet()) 
server.use(logger) 
// your code here

server.get('/', (req, res) => {
    Accounts.find()
  .then(results => {
      res.status(200).json({results})
  }) 
  .catch(err => {
      res.status(500).json({message: err})
  })
})

server.get('/:id', (req, res) => {
    Accounts.find(req.params.id)
  .then(results => {
      res.status(200).json({results})
  }) 
  .catch(err => {
      res.status(500).json({message: err})
  })
})

server.post('/', (req, res) => {
    Accounts.add(req.body)
  .then(results => {
      res.status(200).json({results})
  }) 
  .catch(err => {
      res.status(500).json({message: err})
  })
})

server.put('/:id', (req, res) => {
    Accounts.update(req.params.id, req.body)
  .then(results => {
      res.status(200).json({results})
  }) 
  .catch(err => {
      res.status(500).json({message: err})
  })
})

server.delete('/:id', (req, res) => {
    Accounts.remove(req.params.id)
  .then(results => {
      res.status(200).json({results})
  }) 
  .catch(err => {
      res.status(500).json({message: err})
  })
})
function logger(req, res, next) {
    console.log(`${req.method} request was made at ${req.url} on ${new Date().toISOString()}]`)// new Date ISOString makes converts date into a readable string
    next();
}
module.exports = server;