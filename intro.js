
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

function showPage(page) {
    document.getElementById(page).style.display = 'block';
}

function initMenu() {
    var links = document.querySelectorAll("#top-menu-bar a");
    for(var i = 0; i < links.length; i++) {
        links[i].onclick = clickOnMenuItem
    }
}

function clickOnMenuItem () {
    var pageId = this.getAttribute('data-page');    
    hideAllPages();
    showPage(pageId);
}

function hideAllPages() {
    var pages = document.querySelectorAll('.page');
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
}

initMenu();


function showSkillls() {
   var skills = ['html', 'css', 'js'];

     var htmlSkills = skills.map(function(skill, index) {
          console.info("#" + (index + 1) + " " + skill);
          return '<li>' + skill + '</li>';
      });

      var ul = document.querySelector('#skills-page ul');
      console.warn(ul);
      ul.innerHTML = htmlSkills.join('');
}

showSkillls();
