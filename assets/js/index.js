const firebaseConfig = {
    apiKey: "AIzaSyDDpo5H8nSwV5ooYC6sRS2e7PXKSqNqUQQ",
    authDomain: "chatpatasenmarcha.firebaseapp.com",
    databaseURL: "https://chatpatasenmarcha.firebaseio.com",
    projectId: "chatpatasenmarcha",
    storageBucket: "chatpatasenmarcha.appspot.com",
    messagingSenderId: "937755336222",
    appId: "1:937755336222:web:f3be9414845ca90e4e580f"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();  

$(document).ready(function(){
    db.ref('messageChat').on('child_added', function(data){
        $('#chat').append(data.val().message + '<br>');
        
    });
});
 $('#btnSend').on('click', function(event){
    event.preventDefault() 
    const message = $('#message').val();  
     
     db.ref('messageChat').push({
         message: message
     });
     
     $('#message').val('');
     
 });


function validate(){
    const validateInput = true;
    const element = document.getElementsByClassName("inputText");
    for (i = 0; i< element.length; i++){
        if (element[i].value === "" || element[i].value == null){
            validateInput = false
        }
    }
    if(validateInput){
        
        document.getElementById("btnSend").disabled = false;
    }else{
        
        document.getElementById("btnSend").disabled = true;
    }
}


function hideChat(){
    const chatContainer = document.getElementById("chatContainer");
    if(chatContainer.style.display === "none"){
        chatContainer.style.display = "block";
    } else {
        chatContainer.style.display = "none";
    }
}

