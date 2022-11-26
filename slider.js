
let slider_img = document.querySelector('.slider-img');
let images = ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg','f.jpg', 'g.jpg', 'h.jpg', 'i.jpg', 'j.jpg'];
let i=0; //current Images Index

function prev(){
    if (i<= 0) i = images.length; 
    i--;
    return setImg();

};

function next() {
    if ( i >= images.length-1 ) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src', 'img/'+images[i]);
}