export default (num, digits)=>{
  console.debug(num, `(a ${typeof(num)}), was passed to lz`)
  return num.toString().padStart(digits, 0)
}