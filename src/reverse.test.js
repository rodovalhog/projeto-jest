import {expect} from 'chai';
import reverse from './reverse'

it('reverse should be a function', () => {
    expect(reverse).to.be.a('function')
})

it('reverse([1], item => item) shold be return [1]', () => {
    expect(reverse([1], arr => arr)).to.be.deep.equal([1])
}) 

it('reverse([1,2,3], arr => arr) should return [3,2,1]', () => {
    expect(reverse([1,2,3], arr => arr)).to.be.deep.equal([3,2,1])
})

it ('reverse([6,5,4,3,2,1], arr => arr) should be return [1,2,3,4,5,6]', ()=> {
    expect(reverse([6,5,4,3,2,1], arr => arr)).to.be.deep.equal([1,2,3,4,5,6])
})

it("reverse(['guilherme', 'rodovalho'], item => ite,)", () => {
    expect(reverse(['guilherme', 'rodovalho'], item => item,)).to.deep.equal(['rodovalho','guilherme'])
} )
