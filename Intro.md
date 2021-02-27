## THE SETUP

# Package.json
"heroku-postbuild" : "npm run build"
"build" : "cd client && npm ru build"
"install" : "cd client && npm install"
"client" : "cd client && npm run start"
<!-- if the enviornment is production run line 8 if not run line 10 -->
"start": " if-env NODE_ENV=production && npm run run start:prod || npm run start:dev"
"start:prod" : "node server.js"
"start:dev" : "concurrently \ "nodemon --ignore 'client/*'" \"npm run client\""

# Heroku
Once you have created and successfully ran your server - deploy to heroku


Recipe Application -

# Story 
allow users to add recipes into a database 
users should also be able obtain specific recipes from the databse (recipe)
user should be able to review other users recipe (ALL)
admin should be able to delete recipes 
admin should be able to log in and obtain the user and recipe for all 

# Technologies 
Monogoose -> create a mongoDB databse
Express.js -> routing for server-side
React.js -> client side 
Node.js -> server setup
Heroku -> deployment 
Passport.js -> authenitication

## Process
# Step 1:   Server
    ## git init -y -> create package.json
    ## npm install express
    ## create server file 
    ## depoly server to heroku 

# Step 2: Database
    ## npm install mongoose
    ## create database (locally)
    ## test database with mongodb (implement manually)
    ## connect to database - without routes 
    ## test the connection (create testing get route in sever)

# Step 3: Routes 
    ## create a home route for basic landing 
    ## create server side routes for your database (i.e get, post, put, delete)
    ## connect the routes to your server file 
    ## test routes in postman 

# Step 4: Controller
    ## create full CRUD capabilities 
    ## connect the controller methods to the routes 

# Step 5: React
    ## create a build version of the client
    ## connect client to server w/ routes
    ## 




# Phase Two

# Step 1 : Controller
    ## Create a read method
    ## Create a create method
    ## Create an update method
    ## Create a delete method

# Step 2 : Routes
    ## Create a getRoute
    ## Create a postRoute
    ## Create a putRoute
    ## Create a deleteRoute

# Step 3: Test routes and methods
    ## assure the databse can connect to the routes - (test database)