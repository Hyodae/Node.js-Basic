var connect = require('connect');
var http = require('http');

var app = connect();


/* Simple Demo 
function doFirst(request, response, next) {
    console.log("Bacon");
    next();
}

function doSecond(request, response, next) {
    console.log("Tuna");
    next();
}

app.use(doFirst);
app.use(doSecond);
*/

function profile(request, response) {
    console.log('User request profile');
}

function forum(request, response) {
    console.log('User request forum');
}

app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8888);
console.log("Server is running...");
