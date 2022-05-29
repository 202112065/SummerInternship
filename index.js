const User = require('./FirebasePush')
const express = require('express');
const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
  const {id, firstName, lastName} = req.body;
  const user = new User (id, firstName, lastName);
  //console.log(user);
  user.post();
  res.send("Success!");
});

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));