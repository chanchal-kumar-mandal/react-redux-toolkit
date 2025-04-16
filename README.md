# React + Vite

## Description
## React Redux Toolkit App
This React application includes a To-Do List and a Counter feature, both powered by Redux Toolkit for efficient state management.



## Live App: https://chanchal-kumar-mandal.github.io/react-redux-toolkit/

## Demo Screenshots


## Requirements

### Install Nodejs
Download the Latest Node.js Installer:

Go to the official Node.js website: https://nodejs.org/en/.
Download the LTS (Long Term Support) version for Windows.
https://nodejs.org/en/download/

checking the version
$ node -v
$npm -v

### Install Visual Studio (VS) Code
https://code.visualstudio.com/download

### Install Extension In VS Code
1. Thunder Client 
2. ES7 React/Redux/GraphQL/React-Native Snippets 
3. Bracket Pair Colorizer 
4. Auto Rename Tag 
5. Live Server 
6. Prettier - Code formatter 

### Add Chrome Extension
React Developer Tools

### Install react app (Example: react-redux-toolkit)
$ npm create vite@latest react-redux-toolkit -- --template react 

### Go to app directory
$ cd react-redux-toolkit

$ npm install

### Install React Redux Toolkit
$ npm install @reduxjs/toolkit react-redux

  
### Start app open (http://localhost:3000) to view it in your browser after run below command. 
$ npm run dev

### Push your code to github repo https://github.com/chanchal-kumar-mandal/react-redux-toolkit
First create new repo in your github account like https://github.com/chanchal-kumar-mandal/react-redux-toolkit
$ git remote add origin https://github.com/{username}/{repository-name}.git
$ git add .
$ git commit -am "Your message related to commit"
$ git push origin HEAD

### Host your app to github https://github.com/chanchal-kumar-mandal/react-redux-toolkit

$ npm install gh-pages --save-dev

### Set up Github Hosting 
1. Create a GitHub Repository
	Go to GitHub and create a new repository for your project.
	Initialize the repository with a README if you like.
2. Push Your React App to GitHub (if not already done)

	git init  # Initialize git if not done already
	git remote add origin https://github.com/username/repository-name.git  # Replace with your repository URL
	git add .
	git commit -m "Initial commit"
	git push -u origin main  # Push to the main branch
3. Install gh-pages Package
	$npm install gh-pages --save-dev
4. Add Scripts to package.json
	Open package.json and add the following:
	"homepage": "https://yourusername.github.io/repository-name"

	Update the scripts section in package.json to include deployment commands.
	"scripts": {
	  "start": "react-scripts start",
	  "build": "react-scripts build",
	  "test": "react-scripts test",
	  "eject": "react-scripts eject",
	  "predeploy": "npm run build",
	  "deploy": "gh-pages -d build"
	}
5. Build and Deploy Your React App
	$npm run build
	$npm run deploy
6. Enable GitHub Pages in Repository Settings
	Go to your repository on GitHub.
	Click on Settings (on the right side).
	Scroll down to the Pages section in the left sidebar.
	Under Source, select gh-pages branch.
	Click Save.
	Your site will now be available at: arduino
	Copy code
	https://username.github.io/repository-name/
7. Access Your Hosted React App
	Your React app will be live at https://yourusername.github.io/repository-name/.
