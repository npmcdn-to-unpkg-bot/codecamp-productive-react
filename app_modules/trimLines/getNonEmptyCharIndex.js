export default (line) => {
  if (!line){
    return -1
  }

  let index = 0
  const len = line.length

  while (index < len && line[index] == ' '){
    index++
  }

  return line[index]? index: -1
}
