let divs = document.querySelectorAll("div");
let navLinks = document.querySelectorAll("nav a");

window.onscroll = () => {
    divs.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("nav a [href*=" + id + "]").classList.add("active");
            })
        }
    });
}