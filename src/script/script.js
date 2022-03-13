const btn = document.getElementById('myBtn');
const elementImg = document.querySelector('.imgBox');


/* Event Listeners */ 
btn.addEventListener("click",movePic);


/* Functions */

function movePic()
{
    elementImg.style.opacity = "1";
    elementImg.classList.add("activeAnimate");
    document.getElementById("foundIt").innerHTML = "Du hittade den!";
    document.body.style.backgroundColor = "yellow";
}


    








