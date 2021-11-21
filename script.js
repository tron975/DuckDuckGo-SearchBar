const searchText = document.getElementById('search-text')

searchText.addEventListener("keydown", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      document.querySelector(".search-icon").click();
    }
  });


function clearText() {
  document.getElementById('search-text').value=''
}

function relocate() {
  window.location.href = 'https://duckduckgo.com/?q=' + document.getElementById('search-text').value
}
