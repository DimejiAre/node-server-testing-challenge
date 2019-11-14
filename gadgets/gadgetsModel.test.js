const Gadgets = require('./gadgetsModel');
const db = require('../data/dbConfig');

beforeEach(async () => {
    await db('gadgets').truncate()
 })

describe('gadgets model', ()=>{
    describe('insert function', ()=>{
        let gadgets;
        it('inserts correctly', async ()=>{
            await Gadgets.insert({name: 'iphone', manufacturer: 'apple'})
            gadgets = await db('gadgets')
            expect(gadgets).toHaveLength(1)
            await Gadgets.insert({name: 'air pods', manufacturer: 'apple'})
            gadgets = await db('gadgets')
            expect(gadgets).toHaveLength(2)
        })
    })

    describe('delete function', ()=>{
        let gadgets;
        it('deletes correctly', async ()=>{
            await Gadgets.insert({name: 'iphone', manufacturer: 'apple'})
            await Gadgets.insert({name: 'air pods', manufacturer: 'apple'})
            await Gadgets.remove('air pods')
            gadgets = await db('gadgets')
            expect(gadgets).toHaveLength(1)
        })
    })
})