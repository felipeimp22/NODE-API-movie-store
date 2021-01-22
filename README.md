# Api

#### Installing a project
* Install yarn or npm in your computer <br/>
yarn: https://classic.yarnpkg.com/en/docs/install/#windows-stable <br/>
npm: https://nodejs.org/en/download/ <br/>
Go to the project folder root in CMD and run: <br/>
> yarn  <br/>
or <br/>
> npm install <br/>


## What does it do ?
Make an api, connect in postgreSQL and set up with sequelize,
this creates the user and validates their information with rules and middlewares and generates a security token,
doing some routes:
### Routes:
 #### Create(to create a new user)
 * Method:(POST)<br/>
 * http://localhost:3333/users <br/>
 body(JSON):<br/>
{ <br/>
	"name": "Felipe",<br/>
	"email": "felipe@felipe.com",<br/>
	"password": "12345678910"<br/>
}<br/>

 #### Session(for user log in and generate some token validation).
 * Method:(POST)<br/>
 * http://localhost:3333/sessions<br/>
 body(JSON):<br/>
 {<br/>
	"name": "Felipe",<br/>
	"email": "felipe@felipe.com",<br/>
	"password": "12345678910"<br/>
}<br/>

 #### Uptade(to change password and some information)
 * Method:(PUT)<br/>
 * http://localhost:3333/users<br/>
 body(JSON):<br/>
{<br/>
	"name": "Felipe",<br/>
	"email": "felipe@felipe.com",<br/>
	"oldPassword": "12345678910",<br/>
	"password": "1234567",<br/>
	"confirmPassword": "1234567"<br/>
}
* OBS: on this route you need pass on Header, authorization:  Bearer acessToken

### Sequelize commands
#### main command used
* Run migrations: yarn sequelize db:migrate
* Undo All : yarn sequelize db:migrate:undo:all 
* create : yarn sequelize migration:create --name=migration-name

 #### this code is under development yet. thanks, i hope u enjoy.





