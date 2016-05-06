import findIndexBy from 'findIndexBy'
import curry from 'curry'

export default curry(function(fn, array){
  let index = findIndexBy(fn, array)

  if (index !== -1){
    return array[index]
  }
})
