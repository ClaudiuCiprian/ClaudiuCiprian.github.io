
function getWelcomeMsg() {
    return "Welcome to my site";
}



function hideHomePage() {
    var el = document.getElementById('home-page');
    el.style.display = 'none';
}
function showSkillsPage() {
    document.getElementById('skills-page').style.display = 'block';
}


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


function initMenu() {
    var links = document.querySelectorAll("#top-menu-bar a");
    for(var i = 0; i < links.length; i++) {
        links[i].onclick = clickOnMenuItem
    }
}

function clickOnMenuItem () {
    var pageId = this.getAttribute('data-page');
    shawPage(pageId);
  
}

function hideAllPages() {
    var pages = document.querySelectorAll('.page');
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
}



initMenu();
function showSKillls() {
   var skills = ['html', 'css', 'js'];
   for (var i = 0; i < skills.length; i++) {
       console.warn(i+1 + '.' + skills[i]);
   }
}

showSKillls();