var express = require('express'),
    app = express(),
    chalk = require('chalk'),
    bodyparser = require('body-parser');

var prin = {
  server : "Low Left",
  Port: 3000,
  Encryption: "Morse",
  Md: 5,
  Status: "Online",
  TimeoutRecap: 2424
}
var donation = [
  {
    name: "Kafka on the shoer",
    onwer: "Nehal",
    src: '/src/image.jpg'
  },{
    name: "Kafka on the shoer",
    onwer: "Paankaj",
    src: '/src/image1.jpg'
  },{
    name: "Kafka on the shoer",
    onwer: "Anynomous",
    src: '/src/image2.jpg'
  },{
    name: "Kafka on the shoer",
    onwer: "Doolen",
    src: '/src/image3.jpg'
  },{
    name: "Down Town",
    onwer: "Nehal",
    src: '/src/image4.jpg'
  },{
    name: "Boy with broken heart",
    onwer: "yasaru",
    src: '/src/image5.jpg'
  },{
    name: "Boy who loved",
    onwer: "paku",
    src: '/src/image6.jpg'
  }
]
var requests = [
  {
    name: "Atul",
    book: "The Lord of the Rings Trilogy",
    distance: "green",
  },{
    name: "Madhav",
    book: "The Count of Monte Cristo",
    distance: "green",
  },{
    name: "The_sport",
    book: "A Game of Thrones",
    distance: "red",
  },{
    name: "One_above_all",
    book: "To Kill a Mockingbird",
    distance: "orange",
  },{
    name: "bookWorm",
    book: "The Little Prince",
    distance: "green",
  },{
    name: "scribbled",
    book: "Siddhartha",
    distance: "green",
  },{
    name: "MAyank",
    book: "The Girl with the Dragon Tattoo",
    distance: "red",
  },{
    name: "Patidarr",
    book: "The Alchemist",
    distance: "orange",
  },{
    name: "Nehal",
    book: "To Kill a Mockingbird",
    distance: "green",
  },{
    name: "The_Winchi",
    book: "The Count of Monte Cristo",
    distance: "orange",
  },{
    name: "The_wahh",
    book: "Americanah",
    distance: "green",
  },{
    name: "NookNerd",
    book: "The Secret Life of Bees",
    distance: "orange",
  },{
    name: "Nerd_dude",
    book: "The Kite Runner",
    distance: "green",
  },
]
// var books = ['','','download.jpg','download(1).jpg','download(2).jpg','download(3).jpg''download(4).jpg'];
var me ={
  name: 'kaneki',
  books : ['yppp','asd','asddgdfg'],
  points: 4,
  recieved: 2,
  donated: 2,
  donate_books: ['the girl leape through time'],
}


app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({ extended: true }));
//home
app.get('/',(req,res)=>{
  // res.send("<h1>this is home</h1>");
  var data = [
    donation,requests
  ];
  console.log(data[0].donation);
  res.render('home.ejs',{data: data});
});
//login
app.get('/login',(req,res)=>{
  res.send("<h1>this is login</h1>");
});
//profile
app.get('/profile/:name',(req,res)=>{
  if (me.points >0) {
    me.recieved += 1;
    me.points -= 1;
    me.books.push(req.params.name);
  }else{
    console.log(chalk.red("You do not hve enough points! Want to buys some go to store"));
    res.send("You do not hve enough points! Want to buys some go to store");
  }
  res.render('profile.ejs',{dona:me});
});
//confirmation
app.get('/confirmation/:name',(req,res)=>{
  console.log(req.params.name);
  // console.log(me);
});
//Success
app.get('/Success',(req,res)=>{
  res.send("<h1>this is Success</h1>");
});
//donate
app.get('/donate',(req,res)=>{
  res.render('donate.ejs')
});


//-------------Posts------------------//
// //login
// app.post('/login',(req,res)=>{});
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
//confirmation
// app.post();

app.listen(3000, ()=>{
  console.log(chalk.green("server at 3000....."));
  console.log(prin);
})
