function addingEventListener() {
    document.querySelector("#button").addEventListener("click", (event)=> {
        clickAlert();
    })
}

function clickAlert() {
    alert('I was clicked!');
  }