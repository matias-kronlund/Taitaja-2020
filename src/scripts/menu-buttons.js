let solarstate = false,
    compstate = false;
function showSolar(){
    document.getElementById("floorPlans").style.display = "none";
    compstate = false
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

function showDatski(){
    document.getElementById("solar").style.display = "none";
    solarstate=false;
    if(compstate == false){
        document.getElementById("floorPlans").style.display = "block";
        if(window.innerWidth < 680){
            document.getElementsByClassName("page-content")[0].style.height = "895px";
        }else{
            document.getElementsByClassName("page-content")[0].style.height = "845px";
        }
        
        setTimeout(() => {
            document.getElementById("floorPlans").style.opacity = "1";
        }, 300);
        compstate = true;
    }else{
        document.getElementById("floorPlans").style.display = "none";
        if(window.innerWidth < 680){
            document.getElementsByClassName("page-content")[0].style.height = "186px";
        }else{
            document.getElementsByClassName("page-content")[0].style.height = "96px";
        }
        
        document.getElementById("floorPlans").style.opacity = "0";
        compstate = false;
    }
}