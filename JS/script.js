document.querySelector("video").play();
document.querySelector("video").playbackRate=1.25;

document.onreadystatechange=function(){
    if(document.readyState==="complete"){
        setTimeout(function(){
        // document.querySelector("body").classList.add("invisible");
        document.querySelector(".loader").classList.add("fadeloader");
        },5000)
        setInterval(() => {
        document.querySelector(".loader").classList.add("invisible");
        // document.querySelector("body").classList.remove("invisible");
          
        }, 5500);
      }
    else{
      window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
      }, false);

    }
}