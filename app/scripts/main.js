const barBtn = document.querySelector(".header-icon--bar");
const menuHeader = document.querySelector(".header-menu");
const headerDesc = document.querySelector(".header-text--desc");
barBtn.addEventListener("click", function (e){
    if (e.target.matches(".header-icon--bar")){
        menuHeader.classList.add("is-active");
        headerDesc.style.opacity="0";
        headerDesc.style.visibility="hidden";
    }
});
const closeBtn = document.querySelector(".header-icon--close");
    closeBtn.addEventListener("click", function(e) {
        menuHeader.classList.remove("is-active");
        headerDesc.style.opacity="1";
        headerDesc.style.visibility="visible";
    })

