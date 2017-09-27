console.log('Loaded!');

//Change the text
var element= document.getElementById('MainText');

element.innerHTML= 'New Value';

//Move the image
var img = document.getElementById ('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft= marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.oneclick = function (){
    var interval = setInterval(moveRight, 100);
};
