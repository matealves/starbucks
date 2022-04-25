window.onload = function menuMob() {
    document.getElementById("menuMob").addEventListener("click", function(){
        if (document.getElementById("menu").style.display == 'none' || document.getElementById("menu").style.display == '') {
            document.getElementById("menu").style.display = 'block';
        } else {
            document.getElementById("menu").style.display ='none'
        }
    });
};