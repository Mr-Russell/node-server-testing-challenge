const db = require('../data/dbConnection.js')

module.exports = {
  find,
  findByID,
  add,
  update,
  remove
}

function find() {
  return db('people')
    .select('*')
}

function findByID(id) {
  return db('people')
    .select('*')
    .where({'id': id})
    .first()
}

function add(person) {
  return db('people')
    .insert(person)
    .then(id => {
      return findByID(id[0])
    })
}

function update(id, changes) {
  return db('people')
    .where({'id': id})
    .update(changes)
    .then(updated => {
      return findByID(id)
    })
}

function remove(id) {
  return db('people')
    .where({'id': id})
    .delete()
}