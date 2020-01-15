let navlinks = document.getElementsByClassName("navtab");
let dropdownRight = 0;
for (const link of navlinks) {
    dropdownRight += link.offsetWidth;
}
function sizeDropdown(){
    if(window.innerWidth > 1120){
        document.getElementById("dropdown").style.right = dropdownRight + "px";
        document.getElementById("dropdown").style.width = "750px";
    }else{
        document.getElementById("dropdown").style.right = "0px";
        document.getElementById("dropdown").style.width = "100%";
    }
}
$( window ).resize(function() {
    sizeDropdown();
});
sizeDropdown();

let style = document.getElementById("dropdown-content").style;
let displaying = false;
function display(mode) {

    if (mode == true) {
        setTimeout(() => {
                style.opacity = "1";
        }, 300);
    } else {
        setTimeout(() => {
                style.opacity = "0";
        }, 300);
    }
}
$(function () {
    $('#dropdown-trigger').hover(function () {
        $('#dropdown').css('height', '300px');
        $('#dropdown-content').css('display', 'grid');
        $('#arr').removeClass('down');
        $('#arr').addClass('up');
        if (displaying == false) {
            display(true);
            displaying = true;
        }
    }, function () {
        // on mouseout, reset the background colour
        $('#dropdown').css('height', '0px');
        $('#dropdown-content').css('display', 'none');
        $('#arr').removeClass('up');
        $('#arr').addClass('down');
        if (displaying == true) {
            display(false);
            displaying = false;
        }
    });
});