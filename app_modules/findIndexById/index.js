import curry from 'curry'
import findIndexBy from 'findIndexBy'
import byId from 'byId'

export default curry((id, array) => {
  return findIndexBy(byId(id), array)
})
