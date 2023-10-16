const firebaseConfig = {
    apiKey: "AIzaSyCmD_jvL0MAugohJb2dMoBzifB3IynSAuU",
    authDomain: "quero-comversar.firebaseapp.com",
    projectId: "quero-comversar",
    storageBucket: "quero-comversar.appspot.com",
    messagingSenderId: "236116756316",
    appId: "1:236116756316:web:4e869074b83404d6f26399"
  };
  
firebase.initializeApp(firebaseConfig);
usser_name=localStorage.getItem("usser_name");
room_name=localStorage.getItem("room_name");

function sand(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).puch({name:usser_name,
        message:msg,
        like:0});
    document.getElementById("msg").value=" ";
}

function getData(){
    firebase.database().ref("/"+room_name).on('value', function(snapshot){
        document.getElementById("output").innerHTML=" ";
        snapshot.foreach(function(childSnapshot){childkey = childSnapshot.key;
        ChidData=childSnapshot.val();
        if(childKey!="porpose"){
            firebese_message_id=childKey;
            message_data=ChildData;
            console.log(firebese_message_id);
            console.log(message_data);
            name=message_data['name'];
            message=message_data['message'];
            like=message_data['like'];
            name_with_tag="<h4 Class='message_h4'>"+message+"</h4>";
            like_buttom="<buttom Class='btn btn-warning' id="+firebese_message_id+"value="+like+"oneclick='updatelike(this.id)'>curtidas:"+like+"</buttom>";
            row = name_with_tag + message_with_tag + like_buttom;
            document.getElementById("ouput").inertHtml += row;
        }
    })
    })
}

getData();
function updatelike(message_id){
    comsole.log("clicou no botão curtidas-"+message_id);
    buttom_id= message_id;
    like=document.getElementById(butom_id).value;
    update_like= Number(like)+1;
    comsole.log(update_like);
    firebase.database().ref(room_name).Child(message_id).update({
        like:update_like
    });
}

function logout(){
    localStorageItem("user_name");
    localStorageItem("room_name");
    Window.location.riplace("index.html");
}