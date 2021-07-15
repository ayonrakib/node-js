var http = require('http');
// var math = require('./module');
// var stringLibrary = require('./stringLibrary');
// var fileSystem = require('fs');

// http.createServer(function (req, res) {
//   fileSystem.readFile('demofile1.html', function(err,data){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.write(stringLibrary.returnFirstCharacter("Ayon"));
//     res.end(math.add(10,20).toString());
//   });
// }).listen(10000);
var router = {};
var age = 30;
process.env.PORT = 10000;
http.createServer(function (req,res){
  console.log("New request");
  Object.keys(req).forEach((prop)=> console.log(prop));
  console.log("The requested url is: ",req.url);
  if(req.url in router){
    func = router[req.url];
    res.end(func());
  }
  else{
    res.end(`Target url ${req.url} not found`);
  }
  // res.end(`${Object.keys(req).forEach((prop)=> console.log(prop))}`);
}).listen(process.env.PORT);

function ayonUrl(){
  return "My name is Ayon";
}

function evaUrl(){
  return "My name is Eva";
}

function baseUrl(){
  return `{'hi':'there, port number ' + ${process.env.PORT}}`;
}

// function homeUrl(){
//   return "{name:'Scarecrow'}";
// }
router["/home"] = () => {
  return "{name:'Scarecrow'}";
};

router["age"] = (age) => {
  return `{age: ${age}}`;
}
// first input er naam hocche request, second ta hocche response.
// http.createServer call korle return hobe server object, oi server object er listen method ase-8080 port paramter dibo
// ei pc er kon port e she listen korbe
// jokhon request ashbe, server ta function call korbe
// duita param: request, reponse-duitai obj. req var e request objectpabo flask er moton
// request er duita part thake header and body. response er o same header and body
// request obj e sobproperty pabo-cookies, url er jeisob part ase-query string etc
// response object-server jei response pathaise shei obj-server updated response theke pathabe
// response er tin ta part: first e status code: 200 mane successful, 2nd ta content type: response er body te kon type data ase,
// third ta hocche cookie. notun cookie create ba old cookie update
// end method tai body, erpore ar kono object add korte parbo na request body te
// server kon port e listen kortese sheita server restart na dile update hobe na

// javascript e likhsi mane ei na je eita browser e choltese. eita ami onek khane likhte pari, app banaite pari
// eikhane, JS code gula C er moto compile kore,assembly language er motoi kisu ekta app banay
// sheita run kore, sheita server hoye gese, serve

// compiler = translation -> C++ theke assembly. sob e assmbly te translate korbe
// interpreter-compile korbe na, proti line code er jonno ultimately proti ta line individually compile 

// require nodejs er special

// assignment: ami alada alada kore likhsi function definition and attachment. ami eksathe korte chai, jeno function likha hoy and attach o hoye jaay