const links = document.querySelectorAll("nav a");

links.forEach(link=> {
    link.addEventListener("click", function() {
        const id= this.getAttribute("href");
        const section = document.querySelector(id);
        section.classList.add("active");
        setTimeout(() =>{
            section.classList.remove("active");
        },  1000);
    });
});