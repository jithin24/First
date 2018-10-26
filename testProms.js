//var request = require('request');

const promise = new Promise((resolve, reject) => {
    //Async code goes here
    console.log ("Inside Promise");
    var request = new XMLHttpRequest();

    //request.open('GET', 'https://api.icndb.com/jokes/random');
    request.open('GET', 'https://resttesttest.com/');
    request.onload = () => {
    if (request.status === 200) {
        console.log("Data received");
        resolve(request.response); // we got data here, so resolve the Promise
    } else {
        console.log("Error on connection");
        reject(Error(request.statusText)); // status is not 200 OK, so reject
    }
  };

  request.onerror = () => {
    console.log("Error on the Request raised and hence Promise rejected");
    reject(Error('Error fetching data.')); // error occurred, reject the  Promise
  };
  request.send(); // send the request

});

console.log('Asynchronous request made.');

promise.then((data) => {
  console.log('Got Data! Promise is fulfilled.');
  //document.body.textContent = JSON.parse(data).value.joke;
}, (error) => {
  console.log('Promise is rejected.');
  console.log(error.message);
});

console.log ("End of Promise testing");
