closedNotebook = document.querySelector(".closed-notebook");
openNotebook = document.querySelector(".open-notebook");

// after document loads make the image appear
document.addEventListener("DOMContentLoaded", () => {
    
    setTimeout(() => {
        closedNotebook.classList.add("invisible")
        openNotebook.classList.remove("invisible")
    }, 2000);
})
