export default (arr, func) => {
    let newArr = []

// Aqui temos dois modos que foi feito 
// for Tradicional
    // for(let i = 0; i < arr.length; i ++){
    //     func(newArr.push(arr[arr.length - (i+1)]))
    // }
    // return newArr



// entenda oque acontece para isso funcionar na segunda condição
//ele faz uma verificação de true e false onde qualquer numero
//acima de 0 e true e quando da zero e false e ele sai do array

// for inverso
    for(let i = arr.length; i--;){
        newArr.push(arr[i])
    }
    return newArr
    
}

