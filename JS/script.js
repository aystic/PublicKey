document.querySelector("body").classList.add("overflow");
document.querySelector(".message-bg").classList.add("invisible");

document.querySelector("video").play();
document.querySelector("video").playbackRate=3;

document.onreadystatechange=function(){
    if(document.readyState==="complete"){
        setTimeout(function(){
        // document.querySelector("body").classList.add("invisible");
        document.querySelector(".loader").classList.add("fadeloader");
        document.querySelector("body").classList.remove("overflow");

        },2000)
        setInterval(() => {
        document.querySelector(".loader").classList.add("invisible");
        // document.querySelector("body").classList.remove("invisible");
        
        }, 2500);

      }
}
function showmessage(){
    setTimeout(function(){
    document.querySelector(".message-bg").classList.add("unfadeloader");
    },0)
    setTimeout(() => {
      document.querySelector(".message-bg").classList.remove("invisible");
    },300); 

}

function hidemessage(){
    // setTimeout(() => {
    //   document.querySelector(".message-bg").classList.add("fadeloader");
    // },100);
    // setTimeout(() => {
    //   document.querySelector(".message-bg").classList.add("invisible");
    // },500);
      document.querySelector(".message-bg").classList.add("invisible");

}