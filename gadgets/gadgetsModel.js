const db = require('../data/dbConfig');

module.exports = {
    insert,
    remove
}

function insert(gadget){
    return db('gadgets').insert(gadget)
}

function remove(name){
    return db('gadgets').where({name: name}).del()
}