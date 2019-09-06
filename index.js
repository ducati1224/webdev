;(function() {
  // Get user input
  let userInput = ''
  const inputField = document.querySelector('input')
  const list = document.querySelector('ul')
  // Listen keypress event
  inputField.addEventListener('click', function(event) {
    console.log(event)
    if (event.keyCode === 13) {
      console.log(event)
      userInput = inputField.value

      
      // Method 1: Add event listener on each newly created li node
      // Create li noed
      const newTodo = document.createElement('li')

      // Create TEXT node
      const text = document.createElement('span')
      text.innerText = userInput
      newTodo.appendChild(text)

      // Create BUTTON node

      const btn = document.createElement('i')
      btn.classList.add('mdi')
      btn.classList.add('mdi-close')
      btn.addEventListener('click', function(event) {
        console.log(event)
        event.target.parentNode.remove()
      })
      newTodo.appendChild(btn)

      // Append li node to ul
      list.appendChild(newTodo)

      // Initialize input field
      inputField.value = ''
      

      /*
      // Method 2: Add event listener on parent node (ul), EVENT BUBBLE & CAPTURE
      list.insertAdjacentHTML(
        'beforeend',
        `<li><i class="mdi mdi-close"></i>${userInput}</li>`
      )
      list.addEventListener('click', function(event) {
        if (event.target.tagName !== 'I') return
        event.target.parentNode.remove()
      })
      inputField.value = ''
      */
    }
  })
})()
