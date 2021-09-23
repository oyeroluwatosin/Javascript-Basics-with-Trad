const name = 'John';
const age =30;
const job = 'Web Developer';
const city = 'Miami';
let html

// Without template string (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city +' </li></ul>';

// In ES5 you can better simplify this by writing:
html = '<ul>' +
'<li>Name: ' + name + '</li>' +
'<li>Age: ' + age + ' </li>' +
'<li>Job: ' + job + ' </li>' +
'<li>City: ' + city +' </li>' +
'</ul>';

// With Temperate Strings (es6)
html = `
<ul> 
<li>Name: ${name}</li>
<li>Age: ${age} </li> 
<li>Job: ${job} </li> 
<li>City: ${city} </li>
<li> ${2+2} </li>
<li> ${hello()} </li>
<li> ${age > 30 ? 'Over 30' : 'Under 30'} </li>
</ul>
`;

document.body.innerHTML = html;