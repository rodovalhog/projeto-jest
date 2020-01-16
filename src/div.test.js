import { expect } from 'chai'
import div from './div'

it('div should be a function', () => {
    expect(div).to.be.a('function')
})

it('div() should return 5', () => {
    expect(div()).to.be.equal(5)
})

it('div(10, 2), não recebe dois parametro e não esta retornando 5', () => {
    expect(div(10,2)).to.be.equal(5)
})