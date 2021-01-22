# Api

## What does it do ?
Make an api, connect in postgreSQL and set up with sequelize,
this creates the user and validates their information with rules and middlewares and generates a security token,
doing some routes:
 #### Create(to create a new user)
 * Method:(POST)
 * http://localhost:3333/users 
 body(JSON):<br/>
{ <br/>
	"name": "yourLoginName", <br/>
	"password": "YourPassword" <br/>
}<br/>

 #### Session(for user log in and generate some token validation).
 * Method:(POST)
 * http://localhost:3333/sessions
 body(JSON):
 {
	"name":"SomeLoginNameCreated",
	"password": "ValidPassword"
}

 #### Uptade(to change password and some information)
 * Method:(PUT)
 * http://localhost:3333/users
 body(JSON):
 {
	"name":"YourName",
	"oldPassword": "oldPassword",
	"password": "newPassword",
	"confirmPassword": "confirm your (newPassword)"
}


 #### this code is under development yet. thanks, i hope u enjoy.





