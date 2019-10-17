# Stratter

## Installation

You can install Stratter using NPM via `npm i stratter`.

## Usage

```js
// Refrence Stratter as a dependency
const format = require("stratter");

// Create a formatted String with red text on a black background that is underlined
const helloWorld = format("Hello World", {
	foreground: "red",
	background: "black",
	options: ["underscore"]
});

// Log the formatted String to the console
console.log(helloWorld);
```

**Need assistance?** Ask in [CodeSupport](https://codesupport.dev).