
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCOu70VtzHqbTfYKM28OXip6TAKHir33gU",
      authDomain: "kwitter-4e9df.firebaseapp.com",
      databaseURL: "https://kwitter-4e9df-default-rtdb.firebaseio.com",
      projectId: "kwitter-4e9df",
      storageBucket: "kwitter-4e9df.appspot.com",
      messagingSenderId: "774038917960",
      appId: "1:774038917960:web:b37145a3db8f6e0a16d97d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig); 
    userName = localStorage.getItem("userName");
    document.getElementById("userName").innerHTML="Welcome "+userName+"!";
    function addRoom(){
          roomName = document.getElementById("roomName").value;
          firebase.database().ref("/").child(roomName).update({
                purpose: "adding room name"
          });
          localStorage.setItem("roomName", roomName);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
      function redirectToRoomName(name){
            console.log(name);
            localStorage.setItem("roomName", name);
            window.location="kwitter_page.html";
      }
      

