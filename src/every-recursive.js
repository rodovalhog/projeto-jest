const every = (arr, func) => {
  return (function everyInernal (arrayInternal, counter) {
    const [ head, ...tail] = arrayInternal;
    return arrayInternal.length === 0  //verificação do array ser vazio
    ? true  //se ele for vazio e true mas se não for vazio deve verificar oque tem dentro dele e sem todos os valores são verdadeiros
    : !func(head, counter, arr) //aqui eu verifico se tem algum valor que seja dado com false se tiver ele vai entrar e vai ser retornar false mas se não for false
    ? false //entrou na condição e tinha um valor falase
    : everyInernal(tail, counter + 1) // entrou aqui e 
  })(arr, 0)
}

export default every