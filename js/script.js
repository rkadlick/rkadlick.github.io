let darkMode = document.querySelectorAll(".dark-mode");
let darkArray = Array.prototype.slice.call(darkMode);

darkArray.forEach(function(dark){
  dark.addEventListener("click", function () {
    darkToggle(dark);
  });
});

function darkToggle(dark) {
  var id = dark.id;

  if(id == "Sun"){
    document.getElementById("Sun").classList.add("hide");
    document.getElementById("Moon").classList.remove("hide");

    document.documentElement.style.setProperty("--background", "#111111");
    document.documentElement.style.setProperty("--nav", "rgba(17, 17, 17, .8)")
    document.documentElement.style.setProperty("--primary", "#eeeeee");
    document.documentElement.style.setProperty("--secondary", "#a6a6a6");
    document.documentElement.style.setProperty("--tertiary", "#6c6c6c");
    document.documentElement.style.setProperty("--purple", "#a972cb");
    document.documentElement.style.setProperty("--pink", "#ef6eae");
    document.documentElement.style.setProperty("--red", "#ff7f82");
    document.documentElement.style.setProperty("--orange", "#ffa260");
    document.documentElement.style.setProperty("--yellow", "#e4cb58");
    document.documentElement.style.setProperty("--green", "#8fc866");
    document.documentElement.style.setProperty("--teal", "#19bc8b");
    document.documentElement.style.setProperty("--blue", "#3582B7");

  }
  if(id == "Moon"){
    document.getElementById("Moon").classList.add("hide");
    document.getElementById("Sun").classList.remove("hide");
    document.documentElement.style.setProperty("--background", "#eeeeee");
    document.documentElement.style.setProperty("--nav", "rgba(238, 238, 238, .8)");
    document.documentElement.style.setProperty("--primary", "#111111");
    document.documentElement.style.setProperty("--secondary", "#212121");
    document.documentElement.style.setProperty("--tertiary", "#dedede");
    document.documentElement.style.setProperty("--purple", "#ac67d6");
    document.documentElement.style.setProperty("--pink", "#ff5eae");
    document.documentElement.style.setProperty("--red", "#ff6f73");
    document.documentElement.style.setProperty("--orange", "#ff9f4c");
    document.documentElement.style.setProperty("--yellow", "#f4c430");
    document.documentElement.style.setProperty("--green", "#8dd45a");
    document.documentElement.style.setProperty("--teal", "#05d093");
    document.documentElement.style.setProperty("--blue", "#2E719F");

  }
  
}

$("#experience-nav").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#experience").offset().top - 100
    }, 1000);
});

$("#projects-nav").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#projects").offset().top - 100
    }, 1000);
});

$("#home").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: 0
    }, 1000);
});