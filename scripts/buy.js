/* Code for buy page */
let color_style = document.getElementById('bike-section');

function changeImage() {
    let img_sel = document.getElementById('bike-style').value;
    let img_src = '/images/' + img_sel + '.png';

    const img = document.getElementById('bike');
    img.src = img_src;

    showElements(color_style);
}

window.onload = function() {
    color_style.style.display = 'none';
}

function showElements(my_element) {
    my_element.style.display = 'inline';
}