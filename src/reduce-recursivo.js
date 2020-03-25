
const isInitialValueUndefined = (initialValue) => initialValue === undefined;

const reduce = (arr, func, initialValue) => {
    
    const acc = isInitialValueUndefined(initialValue) ? arr[0]: initialValue;
    const arrCopy = isInitialValueUndefined(initialValue)  ? arr.slice(1) : arr;

    return (function reduceInternal (accInternal, arrCopyInteral, conter) {
        const [ head, ...tail ] = arrCopyInteral;
        const accNext = () => func(accInternal, head, conter, arrCopy)

        return arrCopyInteral.length === 0 
        ? accInternal
        : reduceInternal(accNext(), tail, conter + 1)
    })(acc, arrCopy, 0)
}

export default reduce
