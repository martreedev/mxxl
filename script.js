let loggedInID = null;
let login_prompt = document.getElementById("login-container");


function define_button(button){
    const button_id = button.id;
    loggedInID = button_id;
    display_personalized_questions(button_id);
}

function display_personalized_questions(id){
    // reveal the hidden question div based on which button was pressed
    let love_alter_menu = document.getElementById((id + "-love-alert"));
    love_alter_menu.style.visibility = "visible";
    //remove login prompt
    login_prompt.remove();
}

function isCorrectChoice(button, person){
    let buttonID = button.id;

    let classNam = JSON.stringify(button.id);
    localStorage.setItem("button",classNam);
    console.log(localStorage.getItem("button"))

    if (person === "mar" ){
        if(buttonID === "mar-button3"){
            button.style.backgroundColor = "#7cfc00";
            // log mariusz in
            logIn("mar", 200);
        }else{
            button.style.backgroundColor = "#FF2B2B";
        }
    }else{
        if(buttonID === "leah-button1"){
            button.style.backgroundColor = "#7cfc00";
            // log leah in
            logIn("leah", 200);
        }else{
            button.style.backgroundColor = "#FF2B2B";
        }
    }
}

function logIn(user, sleep_duration){
    setTimeout(()=>{
        console.log(user + " has logged in");
        //change page
        //location.reload();
    },sleep_duration)
}

