function randomText () {
  let text = 'abcdefghijklmnopqrstuvwxyz'
  text += text.toUpperCase()
  text += '0123456789'
  let result = ''
  for (let i = 0; i < 5; i++) {
    result += text[Math.floor(Math.random() * (text.length))]
  }
  return result
}

module.exports = randomText
