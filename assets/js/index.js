
firebase.initializeApp(firebaseConfig);
const db = firebase.database();  

$(document).ready(function(){
    db.ref('messageChat').on('child_added', function(data){
        $('#chat').append(data.val().message + '<br>');
        
    });
});
 $('#btnSend').on('click', function(){
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

