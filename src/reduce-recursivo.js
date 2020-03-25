const reduce = (arr, func, initialValue) => {
    
    let acc = initialValue;
    let arrCopy = arr

    if(initialValue === undefined){
        acc = arr[0]
        arrCopy = arr.slice(1)
    }
    
    // for(let i = 0; i < arrCopy.length; i++){
    //    acc = func(acc, arrCopy[i], i, arrCopy)
    // }
    // return acc

    return (function reduceInternal (accInternal, arrCopyInteral, conter) {
        const [ head, ...tail ] = arrCopyInteral;

        return    arrCopyInteral.length === 0 
        ? accInternal
        : reduceInternal(func(accInternal, head, conter, arrCopy), tail, conter + 1 )
    })(acc, arrCopy, 0)
}

export default reduce