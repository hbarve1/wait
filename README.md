# Wait

This function paues the flow of code for miliseconds given in parameter.

```
  const wait = require('@hbarve1/wait');

  async function doSomething() {
    // your important stuff

    // will wait 1000 milli-seconds after moving forwarn in code, 
    // default value is 0
    await wait(1000); 

    // your other important stuff
  }
```