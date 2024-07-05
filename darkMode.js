// Mock Dev note :To make nav go from light to dark.. next task would be to
//change logo to inverted logo color image for consistency of nav
//with the moon to be changed to white image.

//event listener using an if/else boolean function to switch states
//get image source based on state of darkmode toggle ie: 00 / 01
    var icon = document.getElementById("icon");
    icon.onclick = function(){
        document.body.classList.toggle("darkmode");
    if(document.body.classList.contains("darkmode")){
        icon.src = "./ConchellaImages/sunx.webp" ;
    } else {
        icon.src = "./ConchellaImages/moon.webp";
    }
    
    }
  