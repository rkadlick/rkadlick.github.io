let darkMode = document.querySelectorAll(".dark-mode");
let darkArray = Array.prototype.slice.call(darkMode);

darkArray.forEach(function(dark){
  dark.addEventListener("click", function () {
    darkToggle(dark);
  });
});

function darkToggle(dark) {
  var id = dark.id;

  if(id == "moon"){
    document.getElementById("moon").classList.add("hide");
    document.getElementById("sun").classList.remove("hide");

    document.documentElement.style.setProperty("--background", "#111111");
    document.documentElement.style.setProperty("--primary", "#eeeeee");
    document.documentElement.style.setProperty("--secondary", "#cccccc");
    document.documentElement.style.setProperty("--tertiary", "#999999");
    document.documentElement.style.setProperty("--purple", "#a972cb");
    document.documentElement.style.setProperty("--pink", "#ef6eae");
    document.documentElement.style.setProperty("--red", "#ff7f82");
    document.documentElement.style.setProperty("--orange", "#ffa260");
    document.documentElement.style.setProperty("--yellow", "#e4cb58");
    document.documentElement.style.setProperty("--green", "#8fc866");
    document.documentElement.style.setProperty("--teal", "#19bc8b");

  }
  if(id == "sun"){
    document.getElementById("sun").classList.add("hide");
    document.getElementById("moon").classList.remove("hide");
    document.documentElement.style.setProperty("--background", "#eeeeee");
    document.documentElement.style.setProperty("--primary", "#111111");
    document.documentElement.style.setProperty("--secondary", "#333333");
    document.documentElement.style.setProperty("--tertiary", "#666666");
    document.documentElement.style.setProperty("--purple", "#ac67d6");
    document.documentElement.style.setProperty("--pink", "#ff5eae");
    document.documentElement.style.setProperty("--red", "#ff6f73");
    document.documentElement.style.setProperty("--orange", "#ff9f4c");
    document.documentElement.style.setProperty("--yellow", "#f4c430");
    document.documentElement.style.setProperty("--green", "#8dd45a");
    document.documentElement.style.setProperty("--teal", "#05d093");

  }
  
}


let navItems = document.querySelectorAll('.nav-link');
//console.log(navItems);
let navArray = Array.prototype.slice.call(navItems);
//console.log(navArray);

navArray.forEach(function(nav){
  nav.addEventListener("click", function () {
    pageSelection(nav);
  });
});

function pageSelection(page) {
  var footer = document.querySelector('.footer');
  var id = page.id;
  var section = document.querySelector("."+id+".section");
  //console.log(page);
  var otherSections = document.querySelectorAll(".section:not(."+id+")");
  //console.log(otherSections);

  for(let i = 0; i < otherSections.length; i++){
    if(otherSections[i].classList.contains("hide")){
  
    }else{
      otherSections[i].classList.add("hide");

    }
  }
  section.classList.remove("hide");
  if(id === 'projects' && screen.width <= 660){
    footer.classList.add("hide");
  }else{
    footer.classList.remove("hide");
  }

  navArray.forEach(function(nav){
    if(nav.classList.contains("current")){
      nav.classList.remove("current");
    }
  });

  
  if(page.classList.contains("logo")){
  var home = document.querySelectorAll("#home");
  home[1].classList.add("current");
  
  history.pushState(null, "", "#" + id);
    
  }else{
    page.classList.add("current");

    history.pushState(null, "", "#" + id);
  }
}


let activeList = "";
let elements = document.querySelectorAll('.filter-item');
//console.log(elements);
let elementsArray = Array.prototype.slice.call(elements);
//console.log(elementsArray);

elementsArray.forEach(function(elem){
  elem.addEventListener("click", function () {
    filterSelection(elem)
});
});

function filterSelection(button) {
  
  var id = button.id;
  //console.log(id);  
  var button;
  button = document.getElementById(id);
  if(button.classList.contains("pressed")){

    button.classList.remove("pressed");
    activeList = activeList.replace("."+id, "");
    //console.log(activeList);

    var x;
    x = document.querySelectorAll("div.project-tile"+activeList);
    //console.log(x);

    for(let i = 0; i < x.length; i++){
      x[i].classList.remove("hide");
      //console.log(x[i]);
    }


  }else{

    button.classList.add("pressed");
    activeList += "."+id;

    //console.log(activeList);
    var x;
    x = document.querySelectorAll("div.project-tile:not("+activeList+")");
    //console.log(x);
  
    for(let i = 0; i < x.length; i++){
      x[i].classList.add("hide");
      //console.log(x[i]);
    }
  }
}

let projects = document.querySelectorAll(".project-tile");
let projectsArray = Array.prototype.slice.call(projects);

projectsArray.forEach(function(proj){
  proj.addEventListener("click", function() {
    showProject(proj);
  });
});

function showProject(proj){
  //console.log(proj);

  var children = proj.children;
  //console.log(children);
  for(let i = 0; i < children.length; i++){
    if(children[i].classList.contains("project-info")){
      //console.log(children[i]);
      if(children[i].classList.contains("hide")){
        children[i].classList.remove("hide");
        //console.log(children[i]);
      }else{
        children[i].classList.add("hide");
      }
    }
    if(children[i].classList.contains("project-link")){
      //console.log(children[i]);
      if(children[i].classList.contains("hide")){
        children[i].classList.remove("hide");
        //console.log(children[i]);
      }else{
        children[i].classList.add("hide");
      }
    }
  }
}
