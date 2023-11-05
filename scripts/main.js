// togle

const NavSlide = () =>{
    const burger = document.querySelector(".burger");
    const NavList = document.querySelector("nav");

    burger.addEventListener("click", () =>{
        NavList.classList.toggle("navOn");
        burger.classList.toggle("toggle-burger");
    }
    );
}

NavSlide();