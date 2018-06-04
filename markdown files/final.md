# Final
### Team Members

##### Ateyib Ahmed
* Frontend UI development
* Backend Database Configuration
* Server Set up
* Home functionality
* Goal functionality
* Hunger functionality 


##### Nathanyel Calero
* Frontend UI development
* Backend Fitbit API integration
* Home functionality
* Profile Functionality, implemented visual data display
*

##### Edward Chen
* Frontend UI development
* Skeleton mapping
* Help modals, Minor Javascript 

##### Siyuan Gao
* Frontend UI development
* Icon selection
* Theme CSS consistency




Source Code

app.js //Server setup, handlebar integration

### models
* goal.js // Connecting goal information to mongodb
* user.js // Connecting user account information to mongodb 

### public/css
* home.css // UI formatting

### public/js

* feed.js // Hunger bar js onclick functionality
* home.js // Pet image
* modal.js // Help modal onclick functionality
* profile.js // Ajax call to retrieve weekly fitbit data

### public/views

* home.hbs //  Homescreen to display the apps core functionality, caring for the cat. Uses a hungerbar,point system and shop 
* goals.hbs // Screen to create and display user goals for steps and calorie burning
* profile.hbs // Fitbit API integration. Requires login into fitbit. Displays fitbit data pertinent to the fitty applications use.
* login.hbs // User login, required to save account information(I.E points)
* register.hbs // User registration, required to create an account for the application.
