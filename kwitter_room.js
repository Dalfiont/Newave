// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrxBsKO8s-4PYBvTypGH8jY7S_aHYOHkY",
    authDomain: "chat-n--school.firebaseapp.com",
    projectId: "chat-n--school",
    storageBucket: "chat-n--school.appspot.com",
    messagingSenderId: "532985215392",
    appId: "1:532985215392:web:d29cec6aae16844fa10cc5"
  };
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();