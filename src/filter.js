const filter = (arr = [], func = (item) => item)=> {

    let arrFilter = [];

    for(let i = 0; i < arr.length; i++){
        if(func(arr[i],i, arr)){
            arrFilter.push(arr[i])
        }
    }

    return arrFilter

}

export default filter