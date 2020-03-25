 const someRecursive = (arr, func) => {
    return (
        function someInternal (arrInternal, counter) {
            const [ head, ...tail ] = arrInternal;
            return arrInternal.length === 0 //no metodo some se for array vazio que e igual a zero ele retorna false
            ? false
            : func(head, counter, arr)
                ? true
                : someInternal(tail, counter + 1)
        }
    )(arr, 0)
}  

export default someRecursive