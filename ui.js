class UI{
    constructor(){
        this.profileDiv = document.getElementById("profile");
        this.repoDiv = document.getElementById("repos");
        this.lastUsers = document.getElementById("last-users");
        this.inputField = document.getElementById("githubname");
        this.cardBody = document.getElementsByClassName("card-body")[0];
    }
    clearInput(){
        this.inputField.value = "";
    }
    showUserInfo(user){
        this.profileDiv.innerHTML+= `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
            <a href="${user.html_url}" target = "_blank">
             <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
             <hr>
             <div id="fullName"><strong>${user.name}</strong></div>
             <hr>
             <div id="bio">${user.bio}</div>
            </div>
          <div class="col-md-8">
                <button class="btn btn-secondary">
                      Takipçi  <span class="badge badge-light">${user.followers}</span>
                </button>
                <button class="btn btn-info">
                     Takip Edilen  <span class="badge badge-light">${user.following}</span>
                  </button>
                <button class="btn btn-danger">
                    Repolar  <span class="badge badge-light">${user.public_repos}</span>
                </button>
                <hr>
                <li class="list-group">
                    <li class="list-group-item borderzero">
                        <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/mail.png" width="30px"> <span id="mail">${user.email}</span>
                        
                    </li>
                    
                </div>
                   
                
          </div>
    </div>
        
        `;
    }
    showError(message){
        // console.log(this.cardBody);
        /*
        <div class="alert alert-danger" role="alert">
        This is a danger alert—check it out!
        </div>
        
        */
        const errormsg = document.createElement("div");
        errormsg.className="alert alert-danger";
        errormsg.id= "error-message";
        errormsg.textContent="Lütfen geçerli bir kullanıcı adı giriniz! Sorun: " + message;
        this.cardBody.appendChild(errormsg);

        let i=1;

        setTimeout(() =>{
            
            const opaklik=setInterval(()=>{
                document.getElementById("error-message").style.opacity =i;
                i=i-0.01;
                if(i<=0){
                    errormsg.remove();
                    clearInterval(opaklik);
                }
            },10);
            opaklik();

        },1500)
    }


}