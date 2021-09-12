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


function openTab(tabName) {
  var i;
  var tabs = document.getElementsByClassName("tabs");
  var buttons = document.getElementsByClassName("tab-btn");
  for(i=0;i<buttons.length;i++) {
    buttons[i].addEventListener("click",function(){
      var highlight = document.getElementsByClassName("active");
      if(highlight.length>0){highlight[0].className = highlight[0].className.replace(" active","");}
      this.className+=" active";
    });
  }
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(tabName).style.display = "block";  
}