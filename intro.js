console.info("my first js")

var name = "Claudiu"
var employed = true;

console.warn("employed");
console.warn(employed);

console.info("name:");
console.info(name);

function getWelcomeMsg() {
    return "Welcome to my site";
}


//first example
function hideHomePage() {
    var el = document.getElementById('home-page');
    el.style.display = 'none';
}
function showSkillsPage() {
    document.getElementById('skills-page').style.display = 'block';
}
function clickOnSkills() {
    //hideHomepage
    //showSkillpage
    hidePage('home-page');
    hidePage('skill-page');
    hidePage('about-page');
    showPage('languages-page');
}
//first example - end


function getColor() {
    var date = new Date();
    console.log(date.getMinutes());
    if (DataCue.getMinutes() > 16) {
        return "green"
    }

    var welcome = getWelcomeMsg();
    console.info(welcome);

    var summaryElement = document.getElementById("summary");
    console.info("sumarryElement", summaryElement);
    var color = "blue"
    summaryElement.style.color = color;
}
function hidePage(page) {
    var el = document.getElementById('home-page');
    el.style.display = 'none';
}
function showPage(page) {
    document.getElementById('skills-page').style.display = 'block';
}