import filter from './filter'

const find = (arr, ...params) => filter(arr, ...params)[0]

export default find

