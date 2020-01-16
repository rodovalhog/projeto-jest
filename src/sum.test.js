import sum from './sum'
import { expect } from 'chai'

it('Sum should be a function', () => {
    expect(sum).to.be.a('function')
} )

it('sum(1, 2) shoud return 3', () => {
    expect(sum(1,2)).to.be.equal(3)
})