import curry from 'curry'
import findBy from 'findBy'
import byId from 'byId'

export default curry((id, array) => {
  return findBy(byId(id), array)
})
