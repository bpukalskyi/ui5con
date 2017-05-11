Installation
========================
```
npm install
```

Development
========================
For development purpose it's nessasary to start webserver on the local machine:
```
npm start
```

After successful start the website should be available on port "3030" (can be changed in package.json file) - http://localhost:3030/.
 
Every time when HTML/CSS/JS files are saved, automatic re-build happens and opened page reloads automatically with new changes.
 
Build
========================
When change is ready for production, it's time to make a final build:
```
npm run build
```

As a result, "./build" folder will be created in the root folder of the project. This folder contains all necessary assets and should be copied "as is" to the production.