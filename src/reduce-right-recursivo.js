import mainReduceRigthRecursivo from './main-reduceRight-recursivo'
import reverse from './reverse'

const reduceRightRecursivo = (arr, ...params) => mainReduceRigthRecursivo(reverse(arr), ...params);

export default reduceRightRecursivo;