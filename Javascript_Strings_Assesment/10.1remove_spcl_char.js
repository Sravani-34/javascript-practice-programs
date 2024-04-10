let string="Hello iam sra@@@vani iam££ from€€ India88";
let newstring=string.replace(/[^a-zA-Z0-9 ]/g,'');
//let newstring=string.replace(/[^\w ]/g,'');


console.log(newstring);
//(/[^a-zA-Z0-9]/g,'')\