# ServiceNowHelper

I identified multiple problems while developing for ServiceNow,

- Having to remember all tables names.
- Debugging with Geneva.
- Navigating between the script definition and the log page.

so I created my personal helper app.

## Features

- Lists all applications and their tables.
- Click on the table/column to copy their system names to clipboard.
- Live log fetching (30 mins history) with live filtering.

## TODO

- Add an icon next to column names to identify type.
- Detect JSON in logs and display them using a navigable tree. [With this plugin](https://github.com/mohsen1/json-formatter)
- Animations
- UI adjustments
- ???

## Installation

```
> npm install
```

## Running

```
> npm run start
```

## Running with live reload

```
> npm run watch
```
## Screenshots

![Login screenshot](http://i.imgur.com/sPA4uHO.png)

![Main view screenshot](http://i.imgur.com/RlaVr4x.png)
