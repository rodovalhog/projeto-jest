    export default (arr = [], func = (item) => item) => {

        let arrMap = []
        for(var i = 0; i < arr.length; i++ ){
        arrMap.push(func(arr[i], i, arr))
        }
        return arrMap
    }

    