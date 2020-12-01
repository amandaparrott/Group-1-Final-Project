INSTRUCTIONS: 
So to get the boilerplate:
1. Create folder anywhere u want in ur PC
2. open either VS code or Commandr and use "cd"
3. once u change directory for the right location, copy paste "git clone https://github.com/amandaparrott/Group-1-Final-Project/tree/dev"
4. wait for packages to install by typing "npm install"
TADA you are done! 

# Barebones React/TypeScript/Express/Sass Boilerplate
This project is a starting point for a TypeScript based React app that also has a local API server using express.

There are 2 different Webpack configurations. One for the server and one for the client.

https://www.youtube.com/watch?v=MqczHS3Z2bc -> to finish Auth0

## Server
The server build process compiles the TypeScript files found in `/src/server` into a single bundled JavaScript file located in the `/dist` directory.

## Client
The client build process compiles the React app located in `/src/client` into a bundled located at `/public/js/app.js`.

The client configuration will also build the Sass files found at `/src/client/scss`. The `index.tsx` imports the `app.scss` file which already includes an import for Bootstrap.

## Running the project
In order to run the server, use `npm run dev`, and the server will start on port 3000 (http://localhost:3000). 

Webpack will watch the files. Once you save a file, you can refresh your browser to ensure you got the updated client files. If you only change server files, you *shouldn't* need to refresh.


