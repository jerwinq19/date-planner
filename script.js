
// for loop
for (let num = 1; num < 101; num++) {
     if (num % 2 == 0) {
          console.log(`This is a even number: ${num}`)
     } else {
          console.log(`This is a odd number: ${num}`)
     }
}

// simple onlick function
function simple() {
     const tite = document.getElementById('text')
     tite.innerHTML = 'Button Click!'
}

// getting the IDs
const inputText = document.getElementById('movie-name')
const movieList = document.getElementById('movie-list')

function add_movie() {
     // create list
     const new_list = document.createElement('li')
     // get the input value
     const list_value = inputText.value.trim()

     const test = document.createTextNode(list_value)
     // append the to the Un-orderd list
     if (list_value == "") {
          alert("You must put something...")
     } else {
          new_list.appendChild(test)
          movieList.appendChild(new_list)
          inputText.value = ""
     }
}

