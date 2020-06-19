const express = require('express')

const server = express()

const People = require('../people/people-model.js')

server.get('/api/people', (req, res)=>{
  People.find()
    .then(people => res.status(200).json(people))
    .catch(err =>{
      console.log(err)
      res.status(500).json({message: `An Error occurred when retrieving a list of people`})
    })
})

server.get('/api/people/:id', (req, res)=>{
  People.findByID(req.params)
    .then(person => res.status(200).json(person))
    .catch(err =>{
      console.log(err)
      res.status(500).json({message: `An Error occurred when retrieving the person with ID ${req.params.id}`})
    })
})

server.post('/api/people', (req, res)=>{
  People.add(req.body)
    .then(added => res.status(201).json(added))
    .catch(err => {
      console.log(err)
      res.status(500).json({message: `An Error occurred when adding person to the database`})
    })
})

server.put('/api/people/:id', (req, res)=>{
  People.update(req.params.id, req.body)
    .then(person => res.status(200).json(person))
    .catch(err =>{
      console.log(err)
      res.status(500).json({message: `An Error occurred when Updating the person with ID ${req.params.id}`})
    })
})

server.delete('/api/people/:id', (req, res)=>{
  People.remove(req.params.id)
    .then(deleted => res.status(200).json({message: `Person with ID ${req.params.id} has been deleted`}))
    .catch(err => {
      console.log(err)
      res.status(500).json({message: `An Error occurred when Deleting the person with ID ${req.params.id}`})
    })
})