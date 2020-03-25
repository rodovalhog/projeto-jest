import { expect } from 'chai'
import every from './every-recursive'

it ('every() should to be a function', () => {
    expect(every).to.be.a('function')
})

//quando vc tem retorno de valores boleanos temos o
//to.be.ok para valores true e o 
//to.not.be.ok para valores false
it('every([], item => item) should true', () => {
    expect(every([], (item) => item)).to.be.ok
})

it ('every([0, 2, 3], (item) => item) should return false', () => {
    expect(every([0,2,3], (item) => item)).to.not.be.ok
})

it ('every([1, 2, 3], (item) => item) should return true', () => {
    expect(every([1,2,3], item => item)).to.be.ok
})

it('every([1,2,3], (item, index) => item - 1) should return true', () => {
expect(every([1,2,3], (item, index) => index === item -1)).to.be.ok
})

it('every([1,2,3], (item, index, array) => array.length === 3) should return true', () => {
expect(every([1,2,3], (item, index, array) => array.length === 3)).to.be.ok
})