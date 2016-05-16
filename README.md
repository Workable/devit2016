# A Workable Chrome Extension

This is Workable's workshop for the Devit conference 2016: A simple Chrome extension that fetches spoilers for Game of Thrones characters and is built using React & Redux. 

The spoiler API is also included in the project.

## Install extension
```
$ cd <project>/extension
$ npm install
$ gulp
```
The gulp command will build the extension code and place it in the `app/` directory. 

After that, on `chrome://extensions` select `Load unpacked extensions` and pick the project's `app/` directory.

## Start server
```
$ cd <project>/server
$ npm install
$ npm start
```

Visit `http://localhost:1337` and you are good to go!


