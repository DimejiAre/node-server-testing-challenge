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

async function insert(gadget){
    let [id] = await db('gadgets').insert(gadget)
    let result = await db('gadgets').where({id: id})
    return result
}

function remove(name){
    return db('gadgets').where({name: name}).del()
}