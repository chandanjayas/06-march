function samsang(){
    var disp=document.getElementById("sam");
    if(disp.classList.contains("sam")){
        disp.classList.replace("sam","about_sam");
    }else{
        disp.classList.replace("about_sam","sam");
    }
}
function Apple(){
    var disp2=document.getElementById("apple");
    if(disp2.classList.contains("apple")){
        disp2.classList.replace("apple","apple_container");
    }else{
        disp2.classList.replace("apple_container","apple");
    }
}
function vivo(){
    var disp3 =document.getElementById("vivo");
    if(disp3.classList.contains("vivo")){
        disp3.classList.replace("vivo","vivo_container");
    }else{
        disp3.classList.replace("vivo_container","vivo");
    }
}
function mi(){
    var disp4=document.getElementById("mi");
    if(disp4.classList.contains("mi")){
        disp4.classList.replace("mi","mi_container")
    }else{
        disp4.classList.replace("mi_container","mi");
    }
}