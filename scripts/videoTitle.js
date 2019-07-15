// GET TITLE OF VIDEO
function getVideoName(clicked_id) {
  var newName = document.getElementById(clicked_id).title;
  console.log(newName);

  //save value
  localStorage.setItem('name', newName);
}

// CHANGE VIDEO TITLE
var oldTitle;
function assignNewName(){
  var newName = localStorage.getItem('name');
  console.log(newName);

  document.getElementById("video_title").innerHTML = newName;

  //  PAGE TAB TITLE
  document.getElementById("videoPage_title").innerHTML = newName;
}

