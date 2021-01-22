# Api

## What does it do ?
Make an api, connect in postgreSQL and set up with sequelize,
this creates the user and validates their information with rules and middlewares and generates a security token,
doing some routes:
 #### Create(to create a new user)
 * Method:(POST)<br/>
 * http://localhost:3333/users <br/>
 body(JSON):<br/>
{ <br/>
	"name": "yourLoginName", <br/>
	"password": "YourPassword" <br/>
}<br/>

 #### Session(for user log in and generate some token validation).
 * Method:(POST)<br/>
 * http://localhost:3333/sessions<br/>
 body(JSON):<br/>
 {<br/>
	"name":"SomeLoginNameCreated",<br/>
	"password": "ValidPassword"<br/>
}<br/>

 #### Uptade(to change password and some information)
 * Method:(PUT)<br/>
 * http://localhost:3333/users<br/>
 body(JSON):<br/>
 {<br/>
	"name":"YourName",<br/>
	"oldPassword": "oldPassword",<br/>
	"password": "newPassword",<br/>
	"confirmPassword": "confirm your (newPassword)"<br/>
}<br/>


 #### this code is under development yet. thanks, i hope u enjoy.





