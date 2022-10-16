const copyBtn = document.getElementById('#copy-btn')
const url = document.getElementById('#shortenedURL')
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(url.value)
})
console.log('copied!')
