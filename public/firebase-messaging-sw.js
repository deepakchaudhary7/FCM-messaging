 importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

var config = {
	    apiKey: "AIzaSyAfnAkZ_yBXXeMg8H-jfdWf1Z8y2qIkOVs",
	    authDomain: "fir-app-f579c.firebaseapp.com",
	    databaseURL: "https://fir-app-f579c.firebaseio.com",
	    projectId: "fir-app-f579c",
	    storageBucket: "fir-app-f579c.appspot.com",
	    messagingSenderId: "412891086095"
	  };
firebase.initializeApp(config);

const messaging =firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload){
	const title = "Testing The Background Message";
	const options = {
		body: "Hi There!!";
	};
	return self.registration.showNotification(title, options);
});