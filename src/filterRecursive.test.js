import { expect } from 'chai'
import filter from './filterRecursive'


it ('filter shoult to be a function', () => {
    expect(filter).to.be.a('function')
});

it('filter deve receber um array como parametro e retornar o proprio array', () => {
    expect(filter([1,2,3], item => item)).to.be.deep.equal([1,2,3])
});

it('filter([0,1,2,3], (item) => item) should return [1,2,3]', () => {
    expect(filter([0,1,2,3], item => item)).to.be.deep.equal([1,2,3])
} )

it('filter([1,2,3,4], (item) => item) should return [1,2,3,4]', () => {
    expect(filter([1,2,3,4], item => item)).to.be.deep.equal([1,2,3,4])
} )

it('filter([1,2,3], (item) => item < 2) should return [1]', () => {
    expect(filter([1,2,3], item => item < 2)).to.be.deep.equal([1])
} )

it('filter([1,2,3,4,5,6], (item) => item < 2) should return [4,5,6]', () => {
    expect(filter([1,2,3,4,5,6], item => item >= 4)).to.be.deep.equal([4,5,6])
} )

it('filter([1,2,3, 5], (item, index) => item === index + 1 )', () => {
    expect(filter([1,2,3, 5], (item, index) => item === index + 1 )).to.be.deep.equal([1,2,3])
})

it('filter([1,2,3,2,5], (item,index,array) => index === array.indexOf(item) should return [1,2,3,5]', () => {
    const before = filter([1,2,3,2,5], (item,index,array) => index === array.indexOf(item))
    expect(before).to.be.deep.equal([1,2,3,5])
})

