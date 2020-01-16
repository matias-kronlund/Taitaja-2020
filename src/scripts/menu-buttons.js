let solarstate = false;
function showSolar(){
    if(solarstate == false){
        document.getElementById("solar").style.display = "block";
        document.getElementsByClassName("page-content")[0].style.height = "630px";
        setTimeout(() => {
            document.getElementById("solar").style.opacity = "1";
        }, 300);
        solarstate = true;
    }else{
        document.getElementById("solar").style.display = "none";
        if(window.innerWidth < 680){
            document.getElementsByClassName("page-content")[0].style.height = "186px";
        }else{
            document.getElementsByClassName("page-content")[0].style.height = "96px";
        }
        
        document.getElementById("solar").style.opacity = "0";
        solarstate = false;
    }
}