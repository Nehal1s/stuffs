
var express = require('express'),
    app = express(),
    chalk = require('chalk'),
    cors = require('cors');
    bodyparser = require('body-parser'),
    encryhash = require('./public/js/hashing.js'),
    passport = require('passport'),
    cookieSession = require('cookie-session'),
    {donation, requests, users, me} = require('./public/js/database.js');
// const MongoClient = require('mongodb').MongoClient,
//       uri = "mongodb+srv://kaneki:<password>@cluster0.scsrk.mongodb.net/<dbname>?retryWrites=true&w=majority",
//       client = new MongoClient(uri, { useNewUrlParser: true });
//       client.connect(err => {
//       collection = client.db("test").collection("devices");
//       // perform actions on the collection object
//       client.close();
//     });
require('./public/js/passport');

var prin = {
  server : "Low Left",
  Port: 3000,
  Encryption: "Morse",
  Md: 5,
  Status: "Online",
  TimeoutRecap: 2424
}



// -----------usess----------//


app.use(express.static(__dirname + '/public'));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(cors())
app.use(cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2']
  }))


  const isLoggedIn = (req, res, next) => {
      if (req.user) {
          next();
      } else {
          res.redirect('/login');
      }
  }


  app.use(passport.initialize());
  app.use(passport.session());
// -------------Routes--------------//



app.get('/failed', (req, res) => res.send('You Failed to log in!'))

app.get('/profile', isLoggedIn, (req, res) =>{
  me.name = req.user.displayName;
  res.render('profile.ejs',{data:me});
})

// Auth Routes
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/register', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/profile');
  }
);

app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})


//home
app.get('/',(req,res)=>{
  var data = [
    {
      donation: donation,
    },{
      requests: requests,
    }
  ];
  res.render('home.ejs',{data: data});
});

//login
app.get('/login',(req,res)=>{
  res.render('login.ejs');
});

//profile
app.get('/profile/:name',(req,res)=>{
  if (me.points >0) {
    me.recieved += 1;
    me.points -= 1;
    me.books.push(req.params.name);
    res.render('profile.ejs',{data:me});
  }else{
    console.log(chalk.red("You do not hve enough points! Want to buys some go to store"));
    res.send("You do not hve enough points! Want to buys some go to store");
  }

});

//confirmation
app.get('/confirmation/:name',(req,res)=>{
  if(me.points>=5){
    res.send('Your points reached 5 in total. You cannot donate books. If you plan to donate books you need clear your points first.... ');
  }else {
    if(me.donate_books.push(req.params.name)){
      res.send('you have donated a book, thankyou .....');
      me.points +=1;
      console.log(me.points);
    }else{
      res.send('something went wrong, pls try again later. If the problem persist mae sure to contact us...');
    }
  }
  // console.log(me);
});
//Success
app.get('/Success',(req, res)=>{
  res.send("<h1>this is Success</h1>");
});
//donate
app.get('/donate',(req, res)=>{

  res.render('donate.ejs')
});


// -------------Auths-------------//
// Auth Routes







//-------------Posts------------------//
// //login
app.post('/login',(req,res)=>{
  for(var i=0;i<users.length;i++){
    if(users[i].user == req.body.user){
      console.log(users[i].pass + ":" + encryhash(req.body.pass.toLowerCase()) + ":");
      if(users[i].pass == encryhash(req.body.pass.toLowerCase())){
        res.send('logged in');
        console.log('logged in');
        console.log(user[i].pass+ " : " + encryhash(req.body.pass));
      }else {
        res.send('failed');
      }
    }else{
      res.send('failed');
      console.log('failed');
    }
  }
});
//donate
app.post('/donate',(req,res)=>{
  if(me.points>=5){
    res.send('Your points reached 5 in total. You cannot donate books. If you plan to donate books you need clear your points first.... ');
  }else {
    if(me.donate_books.push(req.body.book)){
      res.send('you have donated a book, thankyou .....');
      me.points +=1;
      console.log(me.points);
    }else{
      res.send('something went wrong, pls try again later. If the problem persist mae sure to contact us...');
    }
  }
});
//sing up

//confirmation
// app.post();

app.listen(8080, ()=>{
  console.log(chalk.green("server at 3000....."));
  console.log(prin);
})
