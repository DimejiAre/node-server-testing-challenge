const db = require('../data/dbConfig');

module.exports = {
    find,
    findByName,
    insert,
    remove
}

function find(){
    return db('gadgets')
}

function findByName(name){
    return db('gadgets').where({name: name}).first()
}

function insert(gadget){
    return db('gadgets').insert(gadget)
}

function remove(name){
    return db('gadgets').where({name: name}).del()
}