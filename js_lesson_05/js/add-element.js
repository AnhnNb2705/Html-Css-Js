

var newEl=document.createElement('li');

var newText=document.createTextNode('ahihi');

newEl.appendChild(newText);

var position = document.getElementsByTagName('ul')[0];

position.appendChild(newText);
