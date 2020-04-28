import { expect } from 'chai'
import reduce from './reduce-recursivo'
import reduceRightRecursivo from './reduce-right-recursivo'


it ('reduce should be a function', () => {
    expect(reduce).to.be.a('function')
})

it('reduce([1,2,3], (acc, item) =>  acc + item, 0) should return 6', () => {
    const before = reduce([1,2,3], (acc, item) =>  acc + item, 0);
    const after = 6;
    expect(before).to.be.equal(after)
})

it('reduce([2,3,4], (acc, item) => acc + item, 0) should return 9', () => {
    const before = reduce([2,3,4], (acc, item) => acc + item, 0);
    const after = 9
    expect(before).to.be.equal(after)
})

it('reduce([2,3,4], (acc, item) => acc + item) should return 9', () => {
    const before = reduce([2,3,4], (acc, item) => acc + item);
    const after = 9
    expect(before).to.be.equal(after)
})

it('reduce([1,2], (acc, item) => acc + item, 0) should return 9', () => {
    const before = reduce([1,2], (acc, item, index) => acc + index, 0);
    const after = 1
    expect(before).to.be.equal(after)
})

it('reduce([2,3,4], (acc, item) => acc + item, 0) should return 9', () => {
    const before = reduce([2,3,4], (acc, item, index, arr) => acc + item, 0);
    const after = 9
    expect(before).to.be.equal(after)
})


it("reduce[1,2], (acc,item) => { acc['number-' + item] = item; return acc}, {}) shoul retur {'number-1: 1, 'number-2: 2} ", () => {
    const before = reduce([1,2], (acc,item) => { acc['number-' + item] = item; return acc}, {})
    const after = {"number-1" : 1, "number-2" : 2}
    expect(before).to.be.deep.equal(after)
})

it('reduce([1,2,3], (acc, item, index, arr) => acc + arr[index] + item, 0) should return 12', () => {
    const before = reduce([1,2,3], (acc, item, index, arr) => acc + arr[index] + item, 0);
    const after = 12;
    expect(before).to.be.equal(after)
})

it("reduceRightRecursivo(['me', 'lher', 'gui'], (acc, item) => acc + item, '') should return 'guilherme'", () => {
    const before = reduceRightRecursivo(['me', 'lher', 'gui'], (acc, item) => acc + item, '');
    const after = 'guilherme';
    expect(before).to.be.equal(after)
})
