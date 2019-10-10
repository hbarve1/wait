function wait(milliseconds) {
  const timeout = milliseconds || 0;

  return new Promise(resolve => {
    setTimeout(() => resolve(), timeout);
  });
}

module.exports = wait;
