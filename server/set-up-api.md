### Setting up server
- Make sure to have Node.js installed
- Create server folder and navigate to it using `cd` command.
- Run `npm init -y` to create new Node.js application. Creates package.json file that holds metadata.

### Using Express.js
- In server folder, run `npm install express nodemon dotenv cors` (four packages)
- Make sure to put node_modules in .gitignore file
- In index.js, make sure to include:
```
const express = require('express');
const server = express();
```
- To restart application, must run `node index.js` each time, but you can use nodemon to overcome this! In /server/package.json, add two new scripts: `"start": "node index.js"` and `"dev": "nodemon index.js`. Then in terminal, run `npm run dev`.