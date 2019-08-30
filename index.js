;(function() {
  // Get user input
  let text = ''
  const userInput = document.querySelector('input')
  const list = document.querySelector('ul')
  // Listen keypress event
  userInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      text = userInput.value
      /**
       * Add event listener on each node
       */

      const newTodo = document.createElement('li')
      // const btn = document.createElement('i')
      const text1 = document.createElement('span')
      text1.innerText = text
      // btn.classList.add('mdi')
      // btn.classList.add('mdi-close')
      // btn.addEventListener('click', function(event){
      //   console.log(event)
      //   event.target.parentNode.remove()
      // })
      // newTodo.appendChild(btn)
      newTodo.appendChild(text1) // <li><span></span></li>
      list.appendChild(newTodo) // <ul><li><span></span></li></ul>
      userInput.value = ''
    }
  })
  // Push to list
})()
