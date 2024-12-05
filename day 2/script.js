// change text

document.getElementById('chg-text').addEventListener('click', changeText)

// change value function
function changeText() {
     document.getElementById('myText').innerHTML = "tite"
}

// toggle highlight button


document.getElementById('toggle-high').addEventListener('click', highlightText)

function highlightText() {
     // change color to yellow
     document.getElementById('toggle-text').style.backgroundColor = "yellow"

     // change text color to black
     document.getElementById('toggle-text').style.color = "red"
}

// add and create new element
document.getElementById("add-item").addEventListener('click',addNew)

function addNew() {
     const newList = document.createElement('li')
     const text = document.createTextNode("New Item")
     newList.appendChild(text)
     document.getElementById('item-list').appendChild(newList)
}

// removing an element 
const removebtn = document.querySelectorAll(".remove-btn")

// Add a click event listener to each button
removebtn.forEach((nigga) => {
     nigga.addEventListener("click", function(event) {
          const listItem = event.target.parentElement
          listItem.remove()
     })
})

// form validation
document.getElementById('my-form').addEventListener('submit', formValidation)

function formValidation(event) {
     const text = document.getElementById('name').value
     if (text == "") {
          document.getElementById("error-message").style.display = "block"
     } else {
          console.log("continue")
          document.getElementById("error-message").style.display = "none"
     }
     event.preventDefault()
}    