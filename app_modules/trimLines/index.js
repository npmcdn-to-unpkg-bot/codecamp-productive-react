/**
 * Given the input string, splits it into lines.
 *
 * Removes the initial empty lines, and also trims
 * all the lines by the number of whitespace chars that the first non-empty line has
 *
 * Returns an array of lines
 *
 * @param  {String} str
 * @return {String[]}
 */

import getNonEmptyCharIndex from './getNonEmptyCharIndex'

export default (str) => {

  let lines = str.split('\n')

  while (lines.length && lines[0].trim() == ''){
    lines = lines.slice(1)
  }

  if (lines.length){

    const firstNonEmpty = lines[0]
    const emptyCharsCount = getNonEmptyCharIndex(firstNonEmpty)

    if (emptyCharsCount != -1){
      lines = lines.map(line => {
        return line.substr(emptyCharsCount)
      })
    }

  }

  return lines
}
