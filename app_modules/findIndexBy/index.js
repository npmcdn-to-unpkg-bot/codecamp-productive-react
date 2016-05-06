import curry from 'curry'

export default curry(function(fn, array){
  let index = -1

  if (!Array.isArray(array)){
    console.error('findIndexBy expected second argument to be array', array)
    return index
  }

  array.some(function(item, i){
    if (fn(item, i, array)){
      index = i
      return true
    }
  })

  return index
})
