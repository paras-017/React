import Chance from 'chance'

const chance = Chance() 
export const fakeUserdata =()=>{
    return chance.name({middle:true})
}
