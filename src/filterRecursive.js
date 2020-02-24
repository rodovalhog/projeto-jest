const filterRecursive = (arr, func ) => {

   return  (function filterInterno (arrInterno, counter) {

    const [head, ...tail] = arrInterno
       
    return arrInterno.length === 0 
       ? [] 
       : (func(head, counter, arr) ? [head] : []).concat(filterInterno(tail, counter + 1))
   })(arr, 0)
}

export default filterRecursive