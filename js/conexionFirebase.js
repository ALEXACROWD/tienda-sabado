  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = 
  {
    apiKey: "AIzaSyDAIX2GSoQLmpSrFapseTkht3IYYQTisio",
    authDomain: "tiendaalexa-2ca9c.firebaseapp.com",
    projectId: "tiendaalexa-2ca9c",
    storageBucket: "tiendaalexa-2ca9c.appspot.com",
    messagingSenderId: "174613153459",
    appId: "1:174613153459:web:50b276f37616ea0cf892c6",
    measurementId: "G-SHL7NL137K"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);