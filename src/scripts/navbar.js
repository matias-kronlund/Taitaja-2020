let navlinks = document.getElementsByClassName("navtab");
let dropdownRight = 0;
for (const link of navlinks) {
    dropdownRight += link.offsetWidth;
}
document.getElementById("dropdown").style.right = dropdownRight + "px";
let style = document.getElementById("dropdown-content").style;
let displaying = false;
function display(mode) {
    let stop = false;
    if (mode == true) {
        setInterval(() => {
            if (stop == false) {
                style.opacity = "1";
                stop = true;
            }
        }, 300);
    } else {
        setInterval(() => {
            if (stop == false) {
                style.opacity = "0";
                stop = true;
            }
        }, 300);
    }
}
$(function () {
    $('#dropdown-trigger').hover(function () {
        $('#dropdown').css('height', '350px');
        $('#dropdown-content').css('display', 'grid');
        if (displaying == false) {
            display(true);
            displaying = true;
        }
    }, function () {
        // on mouseout, reset the background colour
        $('#dropdown').css('height', '0px');
        $('#dropdown-content').css('display', 'none');
        if (displaying == true) {
            display(false);
            displaying = false;
        }
    });
});