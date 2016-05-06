export default (...strings) => {
  return strings.filter(s => !!s).join(' ')
}
