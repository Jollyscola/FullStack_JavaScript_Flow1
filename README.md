# FullStack_JavaScript_Flow1

---
## 1.	Explain the differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.
---




I form at javascript og java at javscript script sprog og at java er et kompileret sprog(”compiled language”)  

|Java	|JavaScript|
|-----|----------|
|Java er et programming sprog|	JavaScript er et integreret computer programmerings sprog|
|Java var først dukkede op i 23-maj-1995|JavaScript var først dukkede op 4-dec-1995|
|Java kode compiled til bytecode|JavaScript kode er alt i tekst og har ikke bruge for at compile|
|Java kode køre på virtual machine |JavaScript kode køre på webbrowser( i form den må vi køre også node bruges som virtual machine)|
|Java er multithreaded|JavaScript er ikke multithreaded|
|Java er lignende c++ og c# |JavaScript lignende perl og python|
|Java er compiled og interpreted programming sprog|JavaScript er kun interpreted programming language|
|Java er ikke et klint side scripting sprog|JavaScript er et klint side scripting sprog at javascript køres mest på klint side|
|Java program har file exension Java|JavaScrip har file extension “.js”|
|Java har block based scope|Javascript har function based scope og object based context|
|alt i Java er class| javascript er prototype|

Eksemple i from af java type 

i java har statik type så skal man angive hvilket slags type man f.eks(integer,String,double mv.)

```
Java:
1. String hej = "Hej";
2. int i = 1;

```
i javascript har vi dynmaisk type så derfor behøver vi ikke at angive typer af en oprettet variabel 
```
JavaScript:
1. var hej = "hej";
2. var i = 1;
```



![javascript-java](https://user-images.githubusercontent.com/32638165/53271927-25753500-36f0-11e9-812b-50984724a685.jpg)


---
## 2.Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers
---


I form af Typescript TS) er det bygget op ved det ny JavaScript(JS) function og er nyt udgangspunkt er at det har typer med som f.eks String Number boolean mv. Noget som er smart ved TS er at man tilføj class, at det ligesom Java har den et fejl setup som gøre at nå man skrive noget forkert kodning komme den op med en fejl og det instedet for i JS er det først i runtime eller når man kører projekt, at man kan se fejlen.
Typscript (TS) har typer i sig i stedet for JavaScript som ikke har typer. 

TS er superset af JS og har alle gode features fra JS. I JS kan man først se fejl når man kører det, men i TS fanger og viser fejlen og gør det meget lettere for programmøren for hvad der skal rettes. 

Når man skal køre TS skal det omdannes til JS, hvor man compiled til Almindelig JS og kan derefter gennemføre i hvilken som helst JS browser. Den kommando man skal bruge for at dette kan lade sig gøre hedder tsconfig.json.

Eksemple af tsconfig.json

```
{
  "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "outDir": "build",
      "sourceMap": true
  }
}
```
Install typescript(-g mener global) skal man have install node.js
```
npm install -g typescript
```

---
##  3.Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.
---

Node er bygget op omkring cloud med JS, så det er let at bygge netværksapplikationer. Den bruger single-theaded, noneblocking, asynchronous programmering. Node er blevet, lavet så JS kan køre i backend med de samme JS-fordele. 

Node er en slags ”virtual” maskine som ligner Java. Node kører på multi-platform. 

Vil man gerne køre Node, skal man installere de forskellige Node pakker. Det udtryk man bruger på Node.js er udtrykket npm kort sagt betyder Node.js: node package management, som er brugt til JS programmet.

ex. Nå den er i et event og nå man skal opdater mange ting samtidig og man kan bruge det til database. 


---
## 4.	Explain about the Event Loop in Node.js
---

Det kan tage noget tid eller blokere, når man skal læse fra en fil /en network stream og derfor har man brug for tråde til at udføre disse processer. Når man kører en metode fra webapi ‘er bliver Single-Thread løst i forhold til, hvor den står i callback-køen og afventer til det er dens tur. Når eventet kører i eventloopen, kan man ikke gøre noget før eventet er afsluttet.

![eventloop](https://user-images.githubusercontent.com/32638165/53271091-af6fce80-36ed-11e9-8a47-cf6ad60174b1.jpg)

Når en tidskrævende funktion bliver called bliver eventet smidt ind i evenloopet i en callback. Det vil sige, at når eventet er sat i gang, kører eventloopet videre. Når eventet er udført, bliver funktionens callback udløst og funktionen kan færdiggøres. På den måde kan node køre videre selvom en funktion er ved at hente data fra nettet, fra en fil eller lignende.

---
## 5.	Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises.
---

Babel: 

Babel er en JS transpiller som oversætter ES6 kode til ES5 kode, så den kan køre/læses på alle browsere. Den kan også køre på ældre browsere. Med den nye ES6 kan man lave fede pile (fat arrows) og/eller multi line i forhold til strings mv. 

WebPack:

WebPack er en åben source som pakker JS filer sammen i en eller flere bundter, som kan køre i browseren. Den er i stand til at bundte mange forskellige typer filer og grunden til at man pakker det hele sammen til bundter, er at man på den måde mindsker mængden af requests, som skal udføres. 

---
## 6.	Explain the purpose of “use strict” and Linters, exemplified with ESLint
---

Formålet med "use strict" er at angive, at koden skal udføres i "strict mode" og her kan du f.eks. ikke bruge undeclared variables. Declared i begyndelsen af et script har globalt anvendelsesområde (al kode i scriptet vil udføres i ”strict mode”),
Linters som JSLint eller JSHint kan registrere potentielle bugs/fejl samt kodning, som er svært at vedligeholde. Kode linting er en måde at øge kodekvaliteten på.
ESLint er et værktøj til at identificere og rapportere om mønstre, der findes i ECMAScript / JavaScript-kode. På mange måder ligner det JSLint og JSHint med nogle få undtagelser:
•	ESLint bruger Espree til JavaScript parsing.
•	ESLint bruger en AST til at evaluere mønstre i kode.
•	ESLint er helt plugget, hver enkelt regel er et plugin, og du kan tilføje flere ved kørsel.

ex: 
man kan få explment

ex:

  

  The statement "use strict"; instructs the browser to use the Strict mode, which is a reduced and safer feature set of JavaScript.
    List of features (non-exhaustive)
    Disallows global variables. (Catches missing var declarations and typos in variable names
    Silent failing assignments will throw error in strict mode (assigning NaN = 5;)
    Attempts to delete undeletable properties will throw (delete Object.prototype)
    Requires all property names in an object literal to be unique (var x = {x1: "1", x1: "2"})
    Function parameter names must be unique (function sum (x, x) {...})
    Forbids octal syntax (var x = 023; some devs assume wrongly that a preceding zero does nothing to change the number.)
    Forbids the with keyword
    eval in strict mode does not introduce new variables
    Forbids deleting plain names (delete x;)
    Forbids binding or assignment of the names eval and arguments in any form
    Strict mode does not alias properties of the arguments object with the formal parameters. (i.e. in function sum (a,b) { return arguments[0] + b;} This works because arguments[0] is bound to a and so on. )
    arguments.callee is not supported



---
## 7. Explain using sufficient code examples the following features in JavaScript.
---
Variable/function-Hoisting
Hoisting er JS’s standardadfærd og betyder, at JavaScript flytter deklarationer til toppen af filen. I JavaScript kan en variabel deklareres, efter at den er blevet brugt. JavaScript kan kun hoist angivelser, ikke initialiseringer.

```
1.console.log(s);
2. var s = 10;
3. output: undefined
```
undefined: eftersom console.log(s); køre før at den s variable ikke er defineret.

```
1.var s;
2. console.log(s);
3.s = 10;
output: undefined
```
undefined: eftersom nu er variable s og nå colsole.log(s); så nå den køre ved den intet hvad den eftersom det først på 3 linje
at vi defineret at s = 10.

```
1.var s = 10; 
2.console.log(s);
3. output: 10
```


Deceleration Functions:

Funktioner som er angivet med følgende syntaks udføres ikke med det samme. De er "gemt til senere brug" og vil blive udført senere, når de ”påberåbes” (called upon). Disse typer funktioner fungerer, hvis du kalder dem FØR eller EFTER, når de er blevet defineret. Hvis du kalder en decelerationsfunktion, før den er defineret - Hoisting – vil den fungere korrekt.

```
1.Navn("Miau");
2.function Navn(navn) {
3. console.log("mine katte navn er " + navn);
4.  }
5. Navn("Tom")
output: 
mine katte navn er Miau
mine katte navn er Tom
```

Expression Functions:

Et funktionsudtryk kan gemmes i en variabel, så de har ikke brug for et funktionsnavn. De vil også blive navngivet som en anonym funktion (en funktion uden navn). For at påberåbe (called) skal de altid bruge et variabelt navn. Disse slags funktioner virker ikke, hvis opkald (calls), før det er defineret, hvilket betyder, at Hoisting ikke sker her. Vi skal altid definere udtryksfunktionen først og derefter påberåbe det.

```
1. famile("Poul");
2. let famile = function (navn) {
3.  console.log("min famile navn er " + navn);
4. };
output: ReferenceError: famile is not defined
```

```
1. let famile = function (navn) {
2.  console.log("min famile navn er " + navn);
3. };
4. famile("Hans");
output: Hans
```
---
## 8. this in JavaScript and how it differs from what we know from Java/.net.
---

this i JavaScript refererer til "ejer" af den funktion som udføres eller til objektet som funktionen er en metode af. I Java refererer dette til det nuværende instansobjekt, som metoden udfører.

ex.
hvis det er helt alene eller ind i function`this` så er et global objekt (men kun i function hvis an ikke kører strict)


Hvis  ind i function så give den globat object window
```
1.function myfunction(){
2.return this;
3.}
4. console.log(myfunction());
output: object window
```
In HTML event handlers, this refers to the HTML element that received the event:
i HTML event handlers this refers til et html element der recived til event.
```
1. <button onclick="this.style.display='none'">Click here to delete button</button> 
output: button get delete // sorry
```

```
1. var person = {
2.    fname: "Jens",
3.    lname : "Hans",
4.    fullName : function() {
5.      return this.fname + " " + this.lname;
6.    }
7.  };
8.
9.  console.log(person.fullName())
output: Jens Hans
  ```
  
  
  
---  
## 9.	Function Closures and the JavaScript Module Pattern
---
Funktionen Closures er en funktion i JavaScript, hvor en indre funktion har adgang til den ydre (omsluttende) funktionens variabler - en rækkekæde (a scope chain).
Closure har tre anvendelsesområder:
•	den har adgang til sit eget anvendelsesområde - variabler defineret mellem sine krøllede parenteser
•	den har adgang til den ydre funktions variabler
•	den har adgang til de globale variabler

The JavaScript Module Pattern er et af de mest almindelige designmønstre, der bruges i JavaScript og med god grund. Modulmønsteret er let at bruge og skaber indkapsling af kodningen. Moduler bruges almindeligvis som singleton-stilobjekter, hvor kun én forekomst eksisterer. Modulmønsteret er fantastisk til service og test / TDD. Der er mange forskellige variationer af modulmønstre.

```
function outer() {

   var b = 10;
   function inner() {
        
         var a = 20; 
         console.log(a+b);
    }
   return inner;
}

var X = outer(); //outer() invoked the first time
var Y = outer(); //outer() invoked the second time
```


ex. Så nå den køre først gang køre den ind i function anden gang køre den global så kan den husk værdi næste gang
det her expressions
```
var outer = (()=> {
    var b = 10;

    return function() {
        b++;
        return b;
    }
}
)();
console.log(outer())
console.log(outer())
output: 
11
12
```
---
## 10.	Immediately-Invoked Function Expressions (IIFE)
---

En IIFE ((Immediately Invoked Function Expression) er en JavaScript-funktion, der kører, så snart den er defineret
```
1. !function(){
2.    console.log("Hej");
3.}();
output: Hej
```

---
## 11.	JavaScripts Prototype
---

Hvert JavaScript-objekt har en prototype. Prototypen er også et objekt. Objekter oprettet ved hjælp af et objekt bogstaveligt eller med nyt objekt (), arver fra en prototype kaldet Object.prototype. Alle JavaScript-objekter (Dato, Array, RegExp, Funktion, ....) arver fra Object.prototype. 
Det er blot en henvisning til et andet objekt og indeholder fælles attributter/egenskaber på tværs af alle forekomster af objektet. Et objekts prototypeattribut angiver det objekt, hvorfra det arver egenskaber.


```
1.function Person(first, last, age, eyecolor) {
2.  this.firstName = first;
3.  this.lastName = last;
4.  this.age = age;
5.  this.eyeColor = eyecolor;
6.}
7.
8.var minFar = new Person("John", "Doe", 50, "blå");
9. var minMor = new Person("Sally", "Rally", 48, "grøn");
10. console.log(minFar)
11. console.log(minMor)
output:
Person { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blå' }
Person { firstName: 'Sally',lastName: 'Rally',age: 48,eyeColor: 'grøn' }
```
---
## 12.	User-defined Callback Functions (writing your own functions that take a callback)
---

A Callback Function er en funktion, der skal udføres, efter at en anden funktion er færdiggjort - dermed navnet 'tilbagekald' (‘call back’). Funktioner der gør dette kaldes højere ordensfunktioner. 


ex .Det her er et callback med en parameter.
```
var names = ['lars', 'hans', 'jan', 'bob', 'bo']

function myFilterto3(element) {

    if (element.length > 3) {
        return element
    }
    return null;
}

function myFilter(array, callback) {
    let newarray = [];
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newarray.push(array[i]);
        }
    }
    return newarray;
}
console.log(myFilter(names, myFilterto3))

output: ['lars','hans']
```

ex: callback med innerline function.
```
var names = ["Lars", "Peter", "Jan", "Bo"];
function myFilter(array, callback) {
    //console.log("element: ", callback)

    newarray = [];
    for(var i = 0; i < array.length; i++)
    
    if (callback(array[i])) {
        newarray.push(array[i]);
    }
    return newarray;
}

var newArray = myFilter(names, function (name) {

    if(name.length > 2){
        return name;
    }
    return null;
});
console.log(newArray)
output: ['Lars', 'Peter, 'Jan']
```
---
## 13.	Explain the methods map, filter and reduce
---

ex. map og filter nå de køre igennem et array så lavet de et nyt array
filter: lavet en betingelse hvilke elementer der kan komme i det ny array de andre blev fjern
map: den køre function på alle elementer af resultet kommet ind i det ny array
reduce: den samler elementer til et resultat, så den kan lav største værdi mindst værdi sum af værdi
i reduce kan man også lavet et nyt hvis f.eks det eksemple jeg lagt med.
```
var names = ['lars', 'hans', 'jan', 'bob', 'bo']
var dav = names.filter((maps1) => {

    if (maps1.length >= 3) {
        namesarray.push(maps1)
        return namesarray;
    }

})
console.log(dav)
```
```
var names = ['lars', 'hans', 'jan', 'bob', 'bo']
var maps = names.map((maps1) => {

    var map = maps1.toUpperCase();
    return map
});
console.log(maps)
```
```
var votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None", "Dav"];


var s = votes.reduce(vot, {});


function vot(item, counter) {
   
    if (counter in item) {
       
        item[counter]++
    } else {

        item[counter] = 1;
    }
    return item;
}

console.log(s)
```


---
## 14.	Provide examples of user-defined reusable modules implemented in Node.js
---

ex. i den her fileprint genanvendelige module for den her fileprint
```
function fileprint(dirname, ext, callback) {
    fs.readdir(dirname, (err, data) => {
        if (err) {
            return callback(err)
        }
        const res = data.filter(fil => path.extname(fil) === '.'+ext)
        return callback(null, res);
    }

    );

}
module.exports = fileprint
```
```
const filterDire = require('./makeitmodular06')

const diretory2 = process.argv[2];
const ext = process.argv[3];

filterDire(diretory2,ext, (err,data) => {
    if(err){
    throw new Error("Uppps:" + err)
    }

    data.forEach(element => {
        console.log(element)
    });
})
```

# ES6,7,8... and TypeScript

---
## 15.	Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.
---

### Let
```
function Test(){
let x = "out"
  
  if(true){
  let x = "in"
  console.log(x); // in
  }
  console.log(x); // out
}

Test()
output: 
in
out
```
```
function Test(){
var x = "out"
  
  if(true){
  var x = "in"
  console.log(x); // in
  }
  console.log(x); // in
}

Test();
output: 
in
in
```


### Array function
```
var s = ["ko","gris","hund",kat"]

var s1 = s.map(element => element.length);
output: [2,4,4,3]
```

### This

```
ex.

```

### rest parameters


ex. Så man sætte så mange parameter i et array lavet den om til array. 
```
function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
  console.log(sumAll(1))
  console.log(sumAll(1,5))
  console.log(sumAll(1,3,4,5, 2))
  output: 
  1
  6
  15
```

### de-structuring assignments

ex. Det at nå få fandt på ting fra et array og pakke samme ting i array eller pakke ud.

```
var a, b, rest;
[a, b] = [10, 20];

console.log(a);
output: 10

console.log(b);
output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
output: [30,40,50]
```

### maps/sets

ex. i maps/sets key og value ligesom hashmap og den har nogle udtrykke som hedder set, map ,delete

ex. set ting samme i en list af ting dymaisk størrelse
```
var oof = 'sos';
let map = new Map();
console.log(map.set('oof', 321)); // 321
console.log(map.set('foo', 123)); //123
console.log(map.get('foo')) // true
 console.log(map.has('foo')) // true
console.log(map.delete('foo')) 
console.log(map.has('foo'))// false
console.log(map.has('sos') //true because oof === 'sos'; 
```
---
## 16.	Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS
---

ex: export hver ting der skal export  

Export
```
//------------dosomething-------
export function family(firstname, lastname) {
 return firstname + " "  + lastname;
}
export function tal(firstnumber, lastnumber) {
 return firstnumber / lastnumber;
}
```
Import
```
//-----------main--------
import{family, tal} from 'dosomething';
console.log(family("Jens","Hans"));
console.log(tal(10,5)
output: 
Jens Hans
2
```
---
## 17.	Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.
---

i form af prototype kan man lavet Inheritance.

```
class Dyr {
    constructor() {}
    static dyr() {
      return 'jeg har et dyr';
    }
  }
  
  class Hviketdyr extends Dyr {
    constructor() {}
    static hund() {
      return super.dyr() + ' som er en hund';
    }
    static kat() {
        return super.dyr() + ' som er en kat';
      }
  }
  
  console.log(Hviketdyr.hund()) 
  console.log(Hviketdyr.kat()) 
  
  output: 
  jeg har et dyr som er en hund
  jeg har et dyr som er en kat
```

---
## 18.	Provide examples with es-next, running in a browser, using Babel and Webpack
---




ES.next eksemple
```
import { memoize } from './point.js';

const upperCase = memoize(string => string.toUpperCase());


```

Nu skal vi have den import ind.

```
var memoize = require('./demoV3.js').memoize;

var upperCase = memoize(function(string) {
  return string.toUpperCase();
});


```

kort kodning er lette forstår.

---
## 19.	Provide a number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics
---

### including
```
{
  "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "outDir": "build",
      "sourceMap": true
  }
}
```
### Types

|Built-in Data| Type| Beskrivelse|
|-------------|-----|-------------|
|Number |	number |	It is used to represent both Integer as well as Floating-Point numbers|
|Boolean |	boolean |	Represents true and false|
|String |string |	It is used to represent a sequence of characters|
|Void |	void |	Generally used on function return-types|
|Null 	|null |	It is used when an object does not have any value|
|Undefined |	undefined |	Denotes value given to uninitialized variable|
|Any |any |	If variable is declared with any data-type then any type of value can be assigned to that variable|

### Interface 
```
IBook {title: string, author: string, published?: Date, pages?: number}
```

### Classes

```
class Car { 
    //field 
    engine:string; 
  
    //constructor 
    constructor(engine:string) { 
       this.engine = engine 
    }  
 
    //function 
    disp():void { 
       console.log("Engine is  :   "+this.engine) 
    } 
 }
 const ferrai = new Car("ferrai");
 ferrai.disp();
 output:
 Engine is  :   ferrai
```
```
class GenericLogger<T,U>{
log = (a:T,b:U) => console.log(`value 1 ${a}, value 2 ${b}`)
}
const ls = GenericLogger<String,String>();
console.log(ls.log("dav,"med dig"))
output: value 1 dav, value 2 med dig

```
