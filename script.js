// ----------------------Handling Skills filling---------------------------------------
var v = document.getElementById('skills');
        window.onscroll = (() => {
                let rect = v.getBoundingClientRect();
                let y = rect.y;
                if(y<=150){
                    $("#jQ-67").css({
                        "width"  : '67%',"transition" : "1s"
                    })
                    $("#jQ-68").css({
                        "width"  : '68%',"transition" : "1s"
                    })
                    $("#jQ-78").css({
                        "width"  : '78%',"transition" : "1s"
                    })
                    $("#jQ-70").css({
                        "width"  : '70%',"transition" : "1s"
                    })
                    $("#jQ-60").css({
                        "width"  : '60%',"transition" : "1s"
                    })
                    $("#jQ-75").css({
                        "width"  : '75%',"transition" : "1s"
                    })
                    $("#jQ-80").css({
                        "width"  : '80%',"transition" : "1s"
                    })
                    $("#jQ-85").css({
                        "width"  : '85%',"transition" : "1s"
                    })
                }
                
        })

// ------------------------------Handling Nav-Menu--------------------------------------
var navButton = document.getElementById('nav-icon');
var check= true;
var bodyHead = document.getElementById('body-header');
var socialContainer = document.getElementById('name-social-container');
var listNav = document.getElementById('inside-nav2-res');
navButton.addEventListener('click', function(){
    if(check){
        bodyHead.style.height = "115vh";
        socialContainer.style.marginTop = "65vh";
        listNav.style.display = "block";
        navButton.setAttribute("src", "https://img.icons8.com/ios/25/000000/delete-sign--v2.png"); 
        check=false;

    }else{
        bodyHead.style.height = "65vh";
        socialContainer.style.marginTop = "18vh";
        listNav.style.display = "none";
        navButton.setAttribute("src", "https://img.icons8.com/ios-filled/25/ffffff/menu--v1.png"); 
        check=true;
    }
})

// -------------------------------------Handling Smooth Scroll----------------------------------

function smoothScroll(event, section){
    event.preventDefault();
    var id = section.id;

    var skills = document.getElementById(id);
    var skillsLength = skills.getBoundingClientRect();
    var temp = 0;
    var height = skillsLength.y;
    console.log(skillsLength);
    function scroll(){
        window.scrollBy(temp,50);
        if(temp >= height){
            clearInterval(scrollInterval);
        }
        temp += 65;
    }
    var scrollInterval = setInterval(scroll, 100);
}
