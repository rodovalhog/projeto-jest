'use strict'

import { expect } from 'chai'
import map from './mapImperativo'

it ('map shuold be a funcion', () => {
    expect(map).to.be.a('function')
})

it ('map([3,4], (item) => item) should retrun [3,4]', () => {
    expect(map([3,4], item => item)).to.be.deep.equal([3,4])
})

it ('map([4,6], (item) => item + 1) shuold return [5,7]', () => {
    expect(map([4,6], (item) => item + 1)).to.be.deep.equal([5,7])
})

it('map([4,6], (item,index) => index) shuold return [0,1]', () => {
    expect(map([4,6], (item, index) => index)).to.be.deep.equal([0,1])
})

it('map([1,2], (item,index) => index) shuold return [[1,2], [1,2]]', () => {
    expect(map([1,2], (item, index, array) => array)).to.be.deep.equal([[1,2],[1,2]])
})

it ('map() should return []', () =>{
    expect(map()).to.be.deep.equal([])
})

it ('map([1,2]) should return [1,2]', () => {
    expect(map([1,2])).to.be.deep.equal([1,2])
})

it('map(1) should throw TypeError', () => {
    let error;
    try{
        map(1)
    } catch (e) {
        error = e
    }
    expect(error.name).to.be.equal('TypeError')

});

it('map(1) should throw TypeError with message "The first parameter must be an array"', () => {
    let error;
    try{
        map(1)
    } catch (e) {
        error = e
    }
    expect(error.message).to.be.equal('The first parameter must be an array')

});

it('map([1,2],"function") should throw TypeError second parameter must be an fucntion', () => {
    let error;
    try {
        map([1,2,3], 'function')

    } catch (e) {
        error = e
    }
    expect(error.name).to.be.equal('TypeError')
});

it('map([1,2,3], "funciton"), should TypeError with message "The second parameter must be an function"', ( () => {
    let error;
    try {
        map([1,2,3], 'funciton')
    } catch (e) {
        error = e
    }
    expect(error.message).to.be.equal('The second parameter must be an function')
}))