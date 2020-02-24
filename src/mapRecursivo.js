'use strict'

const map = (arr = [], func = (item) => item) => {
//nos parametros das função são passado valores default caso não passe na função
    return (function mapInternal (arrInternal, counter) {
//foi feita uma iife
        const [ head, ...tail] = arrInternal;
        return arrInternal.length === 0 ? [] :[
            func(head, counter, arr),
            ...mapInternal(tail, counter + 1)
        ]
    })(arr, 0)
}

export default map