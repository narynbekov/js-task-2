let str = prompt("\"Пожалуйста введите номер вашей карты:\"");

 let endOfNumber=str.slice(-4);
 beginningOfNumber=str.slice(0,-4);

asterisk="*";
 asteriskOfStartNumber=asterisk.repeat(beginningOfNumber.length);

 result=asteriskOfStartNumber+endOfNumber;
 alert("Номер вашей карты: "+result);
