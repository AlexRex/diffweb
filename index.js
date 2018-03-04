const fetch = require('node-fetch');

let prev;

const test = async (url) => {
  try {
    const actual = await (await fetch(url)).text();

    if (prev !== actual) {
      console.log('CHANGE!!');
    } else {
      console.log('no change');
    }

    prev = actual;

    started || start();

  } catch (e) {

  }
}

let started = false;

const start = () => {
  setInterval(() => {
    fetch('http://127.0.0.1:3000');
    started = true;
  }, 10000)
}

module.exports = async (req, res) => {
  const t = await test('https://ti.to/jsconfeu/jsconf-eu-2018');
  res.end(t)
}


