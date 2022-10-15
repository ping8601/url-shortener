function randomText() {
  const text = "abcdefghijklmnopqrstuvwxyz"
  let result = ""
  for (let i = 0; i < 5; i++) {
    result += text[Math.floor(Math.random() * 26)]
  }
  return result
}

module.exports = randomText