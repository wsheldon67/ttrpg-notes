export default (num, digits)=>{
  try {
    return num.toString().padStart(digits, 0)
  } catch (err) {
    console.debug(num, `(a ${typeof(num)}), was passed to lz`)
    console.error(err)
  }
}