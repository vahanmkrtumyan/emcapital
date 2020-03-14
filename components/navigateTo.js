function navigateTo (e) {
    e.preventDefault();
    const { href } = e.currentTarget;
    window.scroll({
        top:
        (document.querySelector(
            href.slice(href.lastIndexOf("/") + 1)
        )).offsetTop - 110,
        behavior: "smooth"
    });
};

export default navigateTo;
