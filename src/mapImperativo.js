    export default (arr = [], func = (item) => item) => {
        
        if(!Array.isArray(arr)){
            throw new TypeError('The first parameter must be an array')
        }

        if(typeof func !== 'function'){
            throw new TypeError('The second parameter must be an function')
        }

        let arrMap = []
        for(var i = 0; i < arr.length; i++ ){
        arrMap.push(func(arr[i], i, arr))
        }
        return arrMap
    }

    