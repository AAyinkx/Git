const mybutton = document.getElementById("myBtn");
//I have created a constant varieable that will be used for the scroll to top button (fetched by id in html)

// When the user scrolls the function named scrollFunction is enacted
window.onscroll = function () {
  scrollFunction();
};

//If the user scrolls more than 20px from the top of the page the button will appear otherwise it won't be visible
function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; //If the 'scroll to top' button is clicked the scrollTop value is set to 0 so the user will taken to the top
}
mybutton.addEventListener("click", topFunction);
