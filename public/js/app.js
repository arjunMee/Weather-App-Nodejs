const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''
  // localhost:3000
  http: fetch('/weather?address=' + search.value).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
        search.value = ''
      } else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forcast
        search.value = ''
      }
    })
  })
})
