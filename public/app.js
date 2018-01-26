var config = {
	    apiKey: "AIzaSyAfnAkZ_yBXXeMg8H-jfdWf1Z8y2qIkOVs",
	    authDomain: "fir-app-f579c.firebaseapp.com",
	    databaseURL: "https://fir-app-f579c.firebaseio.com",
	    projectId: "fir-app-f579c",
	    storageBucket: "fir-app-f579c.appspot.com",
	    messagingSenderId: "412891086095"
	  };
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.requestPermission()
.then(function(){
	console.log("have permission");
	console.log(messaging.getToken());
	return messaging.getToken();
})
.then(function(token){
	console.log(token);
})
.catch(function(err){
	console.log("Error in getting permission");
});

messaging.onMessage(function(payload){
	alert("Hiiiii");
	console.log('onMessage ', payload);
});