const showContent = document.getElementById('nav-content')
const dropdown = document.getElementById('drop')
// document.getElementById('project').addEventListener('click', function (event) {
//     dropdownVisibility()
// })
document.getElementById('button').addEventListener('click', function (event) {
    toggleVisibility()
})
function toggleVisibility() {

    if (showContent.classList.contains('hidden')) {
        showContent.classList.remove('hidden');
        showContent.classList.add('visible');
        showContent.setAttribute('data-aos', 'fade-down');
        showContent.setAttribute('data-aos-once', 'false');

        AOS.init({
            initClassName: "aos-init",
            startEvent: "click",
        });
    } else {
        showContent.classList.remove('visible');
        showContent.classList.add('hidden');
    }
}

function dropdownVisibility() {
    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        dropdown.classList.add('visible');

    } else {
        dropdown.classList.remove('visible');
        dropdown.classList.add('hidden');
    }
}

document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

window.addEventListener('scroll', function () {
    skillLoad("html", "html-value")
    skillLoad("css", "css-value")

});


function skillLoad(elementID, idValue) {
    // Get the skills section element.
    let tagID = "#" + elementID
    const skillsSection = document.querySelector(tagID);
    let value = document.getElementById(idValue).textContent;

    // Check if the skills section is in view.
    if (skillsSection.getBoundingClientRect().top < window.innerHeight) {
        // Add the `active` class to all progress bars.
        const progressBars = document.querySelectorAll(tagID);
        //progressBars.forEach(progressBar => progressBar.classList.add('active'));
        progressBars.forEach(progressBar => progressBar.style.width = value)
    }
}