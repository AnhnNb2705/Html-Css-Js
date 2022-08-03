

var firstItem = document.getElementById('one');

var itemContent = firstItem.innerHTML;

firstItem.innerHTML= '<a href=\"html://example.org\">' + itemContent + '</a>'