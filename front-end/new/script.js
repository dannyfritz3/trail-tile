const map_data = {
  "Theodore Wirth":"https://www.mtbproject.com/widget/map?favs=0&location=fixed&x=-10389275&y=5618117&z=12.2&h=1000",
  "Carver Lake":"https://www.mtbproject.com/widget/map?favs=0&location=fixed&x=-10350402&y=5606419&z=14.5&h=1000",
  "Lebanon Hills":"https://www.mtbproject.com/widget/map?favs=0&location=fixed&x=-10374642&y=5586803&z=14.6&h=1000"
};


function clickTrailTile(el) {
  if(!el.classList.contains("active-tile")){
    el.classList.add("active-tile");
  } else {
    el.classList.remove("active-tile");
  }
}

function clickSegmentButton(event) {
  event.stopPropagation();
  console.log("Hello, this is working");
}

function tabClicked(event, el){
  event.stopPropagation();
}

function viewTrailOnMap(event, el) {
  event.stopPropagation();
  var trailNameClicked = el.parentElement.firstElementChild.innerText;
  document.getElementById("masterMap").src = map_data[trailNameClicked];
}