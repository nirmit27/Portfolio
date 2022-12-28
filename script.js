var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  // removes the ::after psuedoelements from the tab-links
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  // hides the contents of each tab
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  // activates the ::after effects on the clicked tab
  event.currentTarget.classList.add("active-link");
  // displays the content of the clicked tab
  document.getElementById(tabname).classList.add("active-tab");
}

// sidemenu for small screens
var sidemeu = document.getElementById("sidemenu");

function openmenu() {
  sidemeu.style.right = "0";
}

function closemenu() {
  sidemeu.style.right = "-200px";
}

// Contact Form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbw44EYneOGlO89EGj5L35rOC2fo2TqObxAo2kXJ08A_cmolvibZCZpMxYn8LZpQq7LkUw/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
