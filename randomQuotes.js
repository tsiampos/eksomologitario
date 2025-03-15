var objJson = [
    { linkName: "index"},
    { linkName: "page2"},
    { linkName: "page3"},
    { linkName: "page4"},
    { linkName: "page5"},
    { linkName: "page6"},
    { linkName: "page7"},
    { linkName: "page8"},
    { linkName: "page9"},
    { linkName: "page10"},
    { linkName: "page11"},
    { linkName: "page12"},
    { linkName: "page13"}
];
 

window.onload = function() {
  a = document.getElementById('link');
  var randomLink = Math.floor(Math.random() * objJson.length);
  a.setAttribute("href", objJson[randomLink].linkName + ".html");
}