$(document).ready(function () {
    setTimeout(function () {
        $("#floatingButton").hide();
        $(document).on('scroll', function () {
            if ($(document).scrollTop() > 800) {
                $("#floatingButton").show();
            } else {
                $("#floatingButton").hide();
            }
        });
    }, 100); // Adjust the delay as needed
});

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
    skillLoad("oop", "oop-value")
    skillLoad("html", "html-value")
    skillLoad("css", "css-value")
    skillLoad("javascript", "javascript-value")
    skillLoad("php", "php-value")
    skillLoad("laravel", "laravel-value")
    skillLoad("mysql", "mysql-value")
    skillLoad("firebase", "firebase-value")
    skillLoad("python", "python-value")
    skillLoad("docker", "docker-value")
    skillLoad("linux", "linux-value")
    skillLoad("java", "java-value")
    skillLoad("ccna", "ccna-value")
    skillLoad("vapt", "vapt-value")
    skillLoad("df", "df-value")
    skillLoad("ws", "ws-value")


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

function dropdownVisibility() {
    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        dropdown.classList.add('visible');

    } else {
        dropdown.classList.remove('visible');
        dropdown.classList.add('hidden');
    }
}   