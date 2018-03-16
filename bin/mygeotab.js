

var loginSubmit = document.getElementById("loginsubmit");
var database = "eagle_group";
var geotabServer = "https://my154geotab.com"
var username = "";
var password = "";


var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");



var api = GeotabApi(function (authenticationCallback) {
        // Handling getting credentials. Deals with these cases:
        //      a) No credentials yet (first page load)
        //      b) The credentials have expired (password changed or server moved)
        //      c) "api.forget()" has been called
        //
        // Show the dialog now & set up listener to callback with credentials
        //
        document.getElementById("loginsubmit").addEventListener("click", function () {
        	console.log("inside loginsubmit");
                var
                server = document.getElementById("servername").value,
                userName = document.getElementById("username").value,
                password = document.getElementById("password").value,
                database = document.getElementById("database").value;
console.log(userName, server, database, password);
                authenticationCallback(server, database, userName, password,
                        function (errorString) {
                        alert(errorString);
                });
        }, false);
});

//var serverName = "";

//loginSubmit.addEventListener("click", loginuser);




//function AuthenticateGeoTab() {
//	console.log( username, password);
//	console.log(database, geotabServer);


//	var api = GeotabApi(function (authenticationCallback) {
//	                authenticationCallback(geotabServer, database, username, password,
//	                        function (errorString) {
//	                        alert(errorString);
//	                });
//	        }, false);
//	
//
//}




//function loginuser (event) {
//	event.preventDefault();
//	var servername = document.getElementById("servername").value;
//	username = document.getElementById("username").value;
//	var database = document.getElementById("database").value;
//	password = document.getElementById("password").value;
//	AuthenticateGeoTab();
	//usernameInput.classList.add('hidden');
	
//}


