  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
  import { getDatabase,set ,ref, update} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCLDuLBIgYipkEvXoDQdL3rC5XIQMu6xcg",
    authDomain: "dilip-handicraft.firebaseapp.com",
    databaseURL: "https://dilip-handicraft-default-rtdb.firebaseio.com",
    projectId: "dilip-handicraft",
    storageBucket: "dilip-handicraft.appspot.com",
    messagingSenderId: "596575358116",
    appId: "1:596575358116:web:e56f9bab2da6ba11b42a31",
    measurementId: "G-H6CNERLB6N"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();
  console.log(database);

  
     //----- New Registration code start	  
     if(window.location.pathname == "/signup.html"){
   register.addEventListener("click", function() {

    var email =  document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var username = document.getElementById("userName").value;
    var confirmpsswrd = document.getElementById("confirmPassword").value;
    var inputs = document.querySelectorAll('input');


   
    if(password != confirmpsswrd){
      alert("Password Must be Same :) ");
    }
    else{
    createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;

// setting in database

  set(ref(database,'user/' + user.uid),{
    username: username,
    email: email,
    password:password
  })
// database End

  alert("Register Sucessfully");
  window.location.replace("http://127.0.0.1:5500/index.html");
  inputs.forEach(input => input.value = '');
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage);
  // ..
});
   }	  
    });
    //----- End
  eye.addEventListener("click", function(){

  var eyeslash = document.getElementById("eye");
  var showpassword = document.getElementById("Password");

if(eyeslash.classList.contains("fa-eye")){
  showpassword.type="text";
  eyeslash.classList.remove("fa-eye")
  eyeslash.classList.toggle("fa-eye-slash");
}
 else if(eyeslash.classList.contains("fa-eye-slash")){
  eyeslash.classList.remove("fa-eye-slash")
  showpassword.type="password";
  eyeslash.classList.toggle("fa-eye");
}
});
}
else{

loginId.addEventListener("click", (e)=> {

  alert("button is clicked");
  var loginEmail = document.getElementById("loginEmail").value;
  var loginPassword = document.getElementById("loginPassword").value;
  

  
  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    const dt = new Date();
    update(ref(database,'user/' + user.uid),{
      last_login: dt,
    })

    alert("user Loged in :) ");
    window.location.replace("http://127.0.0.1:5500/home.html");

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });


});


}




// const usernames = ["david", "david1", "david2","dipesh"];


//   alert = document.getElementById("alert");

// const updateUi = (value) => {
//   console.log("value", value);
//   spinner.classList.remove("visible");

//   const usernameExists = usernames.some((u) => u === value);

//   console.log("usernames", usernames);
//   console.log("usernameExists", usernameExists);

//   if (usernameExists) {
//     alert.classList.add("visible");
//   } else {
//     alert.classList.remove("visible");
//   }
// };

// const debounce = (callback, time) => {
//   let interval;
//   return (...args) => {
//     clearTimeout(interval);
//     interval = setTimeout(() => {
//       callback.apply(null, args);
//     }, time);
//   };
// };



// const handleChange = debounce((input) => {
//   const { value } = input.target;

//   updateUi(value);
// }, 500);
