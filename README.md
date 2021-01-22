# Api

#### Installing a project
* Install yarn or npm in your computer <br/>
yarn: https://classic.yarnpkg.com/en/docs/install/#windows-stable <br/>
npm: https://nodejs.org/en/download/ <br/>
Go to the project folder root in CMD and run: <br/>
> yarn  <br/>
or <br/>
> npm install <br/>

#### Running Project
after the project was installed, Go to the project folder root in CMD and run: <br/>
> yarn dev <br/>
or <br/>
> npm run dev <br/>


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

 #### createFilms(create a film)
 * Method:(POST)<br/>
 * http://localhost:3333/createFilms
 body(JSON):<br/>
 { <br/>
		"title": "Coringa",<br/>
   		"movie_director": "Eu"<br/>
}<br/>

 #### leasing a Films(leasing a film)
 * Method:(POST)<br/>
 * http://localhost:3333/leasing
 body(JSON):<br/>
 { <br/>
		"id":  ID of Movie <br/>
}<br/>
* OBS: on this route you need pass on Header, authorization:  Bearer acessToken

 #### return a Film(return a film)
 * Method:(POST)<br/>
 * http://localhost:3333/returnFilm <br/>
 body(JSON):<br/>
 { <br/>
		"id":  ID of Movie <br/>
}<br/>
* OBS: on this route you need pass on Header, authorization:  Bearer acessToken

 #### available Film(find all available film)
 * Method:(GET)<br/>
 * http://localhost:3333/availableFilms <br/>
 body(JSON):<br/>
 NO BODY
* OBS: on this route you need pass on Header, authorization:  Bearer acessToken

### Sequelize commands
#### main command used
* Run migrations: yarn sequelize db:migrate
* Undo All : yarn sequelize db:migrate:undo:all 
* create : yarn sequelize migration:create --name=migration-name

 #### this code is under development yet. thanks, i hope u enjoy.





