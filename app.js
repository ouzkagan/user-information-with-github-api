//element seçme

const githubform = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers= document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");

const github = new Github();
const ui = new UI();
eventListeners();

function eventListeners(){
    githubform.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllsearched);
}

function getData(e){
    let username = nameInput.value.trim();

    if(username===""){
        alert("doldur.");
    }else{
        github.getGithubData(username)
        .then(response => {
            if(response.user.message === "Not Found"){
                console.log("Hata");
                ui.showError(response.user.message);
            }else{
                // console.log(response);
               
                ui.showUserInfo(response.user);
            }
        })
        .catch(err => console.log(err));
    }
    ui.clearInput();
    e.preventDefault();
}
function clearAllSearched(){
    //arananları temizle
}
function getAllsearched(){
    //arananları storage den ui a ekle
}