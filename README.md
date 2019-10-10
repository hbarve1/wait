# Wait

This function paues the flow of code for miliseconds given in parameter.

```
  const wait = require('wait');

  async function doSomething() {
    // your important stuff

    await wait(1000); // will wait 1000 milli-seconds after moving forwarn in code, default value is 0

    // your other important stuff
  }
```