const { name } = require("ejs");
const express = require(`express`);
const app = express();
const port = 3000;

const magic = require("./models/magic")
app.use(express.static(`public`));

app.get(`/greeting/`, (req, res)=> {
    res.send("Hello Stranger");
});

app.get('/greeting/:name/', (req, res) => {
	res.send('Wow, Hello there ' + req.params.name);
});
	

app.get(`/tip/:total/:tipPercentage/`, (req,res) => {
    res.send("<h1>20</h1>")
})

  
  app.get('/magic/:question/', (req, res) => {
      const question = req.params.question;
      const answer = magic[Math.floor(Math.random()* magic.length)];
      res.send(`${question}` + `? ` + `${answer}`);
// res.render(`index.ejs`, + (`${question}` + `? ` + `${answer}`));
});
	

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
  });










