function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {  
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; //when the box expands
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; //when the box shrinks
      moreText.style.display = "inline";
    }
  }

  // Get the modal to log in
var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function bgChange(bg) {                    //Search Bar
    document.body.style.background = bg;
  }

  const userCardTemplate = document.querySelector("[data-user-template]")
  const userCardContainer = document.querySelector("[data-user-cards-container]")
  const searchInput = document.querySelector("[data-search]")
  
  let users = []
  
  searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
      const isVisible =
        user.name.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value)
      user.element.classList.toggle("hide", !isVisible)
    })
  })
  
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      users = data.map(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        header.textContent = user.name
        body.textContent = user.email
        userCardContainer.append(card)
        return { name: user.name, email: user.email, element: card }
      })
    })



    