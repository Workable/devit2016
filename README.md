# Building a Workable Chrome Extension in React & Redux

This project demonstrates a message passing paradigm between the different building blocks of a Chrome Extension (i.e. content script, background script, etc...) based on Redux principles and accessories.
Through custom middleware and store enhancers, content script actions are sent as messages to the background script that tranforms them to corresponding reactions in the background context and vice versa. Furthermore, background state is always shared and synced across every connected content script instance.

The final output is a simple Chrome Extension called "Spoiled". As indicated by its name, "Spoiled" fetches spoilers for Game of Thrones characters in free narratives and was developed for Workable's workshop for the Devit 2016 conference.

The spoiler API is also included in the project.

## Prerequisites
Install Node > v5.x

Install Gulp

```
$ npm install -g gulp
```

## Install extension
```
$ npm i -g gulp
$ cd <project>/extension
$ npm install
$ gulp
```
Gulp will build the extension code and place it in the `app/` directory.

After that, on `chrome://extensions` select `Load unpacked extensions` and pick the project's `app/` directory.

## Start server
```
$ cd <project>/server
$ npm install
$ npm start
```

## Demo

Browse to `http://localhost:1337` and you are good to go!
