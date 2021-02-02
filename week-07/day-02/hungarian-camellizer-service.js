'use strict';

const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;

app.post('/translate', (req, res) => {
  if (req.body.text && req.body.lang) {
    if (req.body.lang === 'hu') {
      let text = req.body.text;
      //console.log(text.replace(/a/g, 'ava')); //replaceAll nincs javascriptben, helyette global regexet lehet hasznalni
      function replaceVowels(anyText) {
        anyText = anyText.toLowerCase();
        const vowels = ['a','á','e','é','i','í','o','ó','ö','ő','u','ú','ü','ű']
        for (let i = 0; i < vowels.length; i++){
          console.log(`${vowels[i]}`);
        anyText = anyText.split(`${vowels[i]}`).join(`${vowels[i]}v${vowels[i]}`);
        }
        return anyText;
      }
      let translated = replaceVowels(text);
      res.status(200).json({'translated': `${translated}`, 'lang':'teve'})
      } else if (req.body.lang === 'eng') {
      
    }

  } else {
    res.status(400).send(`I can't translate that!`)
  }
})

app.listen(PORT, () => {
  console.log(`Listening to port ${ PORT }`);
});