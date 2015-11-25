/**
 * Created by session2 on 11/24/15.
 */
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

function delete_image(img) {
    img.parentNode.removeChild(img);
}

