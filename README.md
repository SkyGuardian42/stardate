# Stardate.js
> A simple library for converting a date to a StarTrek Stardate

```js
// Import Stardate.js
const stardate = require('./stardate.js');

// Get Current Date 
const now = new Date();

// Get Current Stardate
const currentStarDate = stardate({
  year: now.getFullYear(),
  month: now.getMonth(),
  day: now.getDate(),
  hour: now.getHours(),
  minute: now.getMinutes(),
  second: now.getSeconds(),
});
```
