let arr = document.querySelectorAll('canvas');

function getPicture()
{
    let arr = document.querySelectorAll('canvas');    
    Array.prototype.forEach.call(arr,(picture)=>{
        if(picture.id == "koma_image")return;
        saveImage(getImage(picture));
    })
}
function getImage(canvas){
    var imageData = canvas.toDataURL();
    var image = new Image();
    image.src = imageData;
    return image;
}

function saveImage(image) {
    var link = document.createElement("a");
    link.setAttribute("href", image.src);
    link.setAttribute("download", "canvasImage");
    link.click();
}

chrome.runtime.onMessage.addListener(function (mes,sender){
    getPicture();
});