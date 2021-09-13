const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click',() => {
    document.body.classList.toggle('nav-open')
});

navLinks.forEach(link => {
    link.addEventListener('click',() => {
        document.body.classList.remove('nav-open');
    })
})

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var tab = document.getElementsByClassName("tab");
  tab[0].style.display = "block";

function openTab(e,tabName) {
  var i;
  for(i=0;i<tab.length;i++) {
    tab[i].style.display = "none";
  }
  var btn = document.getElementsByClassName("tab-btn");
  for(i=0;i<btn.length;i++) {
    btn[i].className = btn[i].className.replace(" active","");
  }
  document.getElementById(tabName).style.display = "block";
  e.currentTarget.className +=" active";
}