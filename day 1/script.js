
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

document.getElementById('add').addEventListener('click', add_movie)

function add_movie() {
     // create list
     const new_list = document.createElement('li')
     // get the input value
     const list_value = inputText.value.trim()

     const test = document.createTextNode(list_value)
     // append the to the Un-orderd list
     // input validation 
     if (list_value == "") {
          alert("You must put something...")
     } else {
          new_list.appendChild(test)
          movieList.appendChild(new_list)
          inputText.value = ""
     }
}

function randomColor(){
     const dd = document.getElementById('text');

     dd.style.color = "red";
     dd.style.fontSize = '20px'
}
