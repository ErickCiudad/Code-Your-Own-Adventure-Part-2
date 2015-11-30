function show_image(src, width, height, alt, id) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    img.id = id;
// This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

function delete_image() {
    test.parentNode.removeChild(test);
}

document.body.removeChild(img);

function create() {
    var para = document.createElement("p");
    var node = document.createTextNode("This is new");
    para.appendChild(node);
    var element = document.getElementById("screen");
    element.appendChild(para);
    para.id = 'id'
}

function replace() {
    var para = document.createElement("p");
    var node = document.createTextNode("This is coral");
    para.appendChild(node);
    var parent = document.getElementById("screen");
    var child = document.getElementById("id");
    parent.replaceChild(para,child);
}

function specialCreate(){
    var para = document.createElement("p");
    var node = document.createTextNode("Special af");
    para.appendChild(node);
    var element = document.getElementById("screen");
    element.appendChild(para);
    para.id = 'special'};
