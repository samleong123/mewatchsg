function newSrc() {
  var e = document.getElementById("selectchannels");
  var newSrc = e.options[e.selectedIndex].value;
  document.getElementById("channels").src=newSrc;
}