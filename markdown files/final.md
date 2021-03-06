# Final
### Team Members

##### Ateyib Ahmed
* Frontend UI development
* Backend Database Configuration
* Server Set up
* Home functionality
* Goal functionality, interaction between database and frontend
* Hunger functionality, interaction between database and frontend 


##### Nathanyel Calero
* Frontend UI development
* Backend Fitbit API integration
* Home functionality
* Hungerbar styling
* Profile Functionality, implemented visual data display

##### Edward Chen
* Frontend UI development
* Skeleton mapping
* Help modals
* Minor Javascript 

##### Siyuan Gao
* Frontend UI development
* Icon selection
* Theme CSS consistency
* Item selection

## Source Code

### app.js //Server setup, handlebar integration

### ./models
* user.js // Connecting user account to mongodb
* goal.js // Connecting goal information to user accounts on mongodb
* item.js // Connecting points usage to user accounts on mongodb

### ./public/css
* home.css // UI formatting

### ./public/js

* feed.js // Hunger bar js onclick functionality
* goals.js // Create goals js onclick functionality, Ajax calls to retrieve user account goals, and awards points to user accounts on goal completion
* home.js // Pet image
* modal.js // Help modal onclick functionality
* profile.js // Ajax call to retrieve weekly fitbit data

### ./views

* home.hbs //  Homescreen to display the apps core functionality, caring for the cat. Uses a hungerbar,point system and shop 
* goals.hbs // Screen to create, display, and interact with user goals for steps and calorie burning
* profile.hbs // Fitbit API integration. Requires login into fitbit. Displays fitbit data pertinent to the fitty applications use.
* login.hbs // User login, required to save account information(I.E points)
* register.hbs // User registration, required to create an account for the application.


#### Final Video Link
* https://drive.google.com/file/d/14str0wOZ29NWo1yqBQb_-j-J-vwt0nv7/view?usp=sharing
