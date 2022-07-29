var msg ='<h2>Browser window</h2><p>width: '+ window.innerWidth + '</p>';
msg+='height: '+ window.innerHeight + '</p>';
msg+='<h2>history</h2><p>items: '+ window.history.length + '</p>';
msg+='<h2>screen</h2><p>width: '+ window.screen.width + '</p>';
msg+='height: '+ window.innerHeight + '</p>';
var el=document.getElementById('info')
el.innerHTML=msg;
alert('Current page: '+window.location);