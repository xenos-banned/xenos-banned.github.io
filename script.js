let menuVisible = false;
//Function that hides or shows the menu
function showHideMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function select(){
    //hide the menu once I select an option
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Function that applies the animations of the abilities
function effectSkills(){
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills>= 300){
        let skills = document.getElementsByClassName("progress");
        skills[0].classList.add("React");
        skills[1].classList.add("javascript");
        skills[2].classList.add("htmlcss");
        skills[3].classList.add("git-and-Github");
        skills[4].classList.add("Redux");
        skills[5].classList.add("Communication");
        skills[6].classList.add("Teamwork");
        skills[7].classList.add("Creativity");
        skills[8].classList.add("SelfStudy");
        skills[9].classList.add("ProjectManagement");
    }
}


//I detect the scrolling to apply the skillbar animation
window.onscroll = function(){
    effectSkills();
} 