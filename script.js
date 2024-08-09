'use strict';

const request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.send();
console.log(request.responseText);

request.addEventListener('load', function(){
    console.log(this.responseText);
} );