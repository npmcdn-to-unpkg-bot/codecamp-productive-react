import curry from 'curry'

export default (separator) => {
  
  return (...list) => {
    
    if(list.reduce === undefined){
      return new Error('Must provide an array as first argument')
    }
    return list
      .filter(x => x !== null && x != undefined)
      .reduce((acc, node, index) => {

        if( index !== 0 ){
          acc.push(separator)
        }

        acc.push(node)

       return acc
      }, [])
  }
}
