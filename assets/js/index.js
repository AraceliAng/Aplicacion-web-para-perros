

firebase.initializeApp(firebaseConfig);

// const messageText = document.getElementById("message");
// const chatArea = document.getElementById('chat');
 const button = document.getElementById('btnSend');


const db = firebase.database();  

$(document).ready(function(){
    db.ref('messageChat').on('child_added', function(data){
        $('#chat').append(data.val().mensaje + '<br>');
        UIkit.scroll(data).scrollTop(data);
    });
});
 $('#btnSend').on('click', function(){
     const message = $('#message').val();  
     
     db.ref('messageChat').push({
         mensaje: message
     });
     $('#message').val('');
     //$("#chat").scrollTop($('#chat').prop('scrollHeight'));
 });

// function getMessages() {
//     const div = $("#chat");
//     div.scrollTop(div.prop('scrollHeight'));
// }

// $(function() {
//     getMessages();
// });
//


function validate(){
    const validateInput = true;
    element = document.getElementsByClassName("inputText");
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