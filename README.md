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
	

Eksemple i from af java type 

i java har statik type så skal man angive hvilket slags type man f.eks(integer,String,double mv.)

```
Java:
String hej = "Hej";
int i = 1;

```
i javascript har vi dynmaisk type så derfor behøver vi ikke at angive typer af en oprettet variabel 
```
JavaScript:
var hej = "hej";
var i = 1;
```

![javascript-java](https://user-images.githubusercontent.com/32638165/53271927-25753500-36f0-11e9-812b-50984724a685.jpg)


---
## 2.Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers
---


I form af Typescript TS) er det bygget op ved det ny JavaScript(JS) function og er nyt udgangspunkt er at det har typer med som f.eks String Number boolean mv. Noget som er smart ved TS er, at det ligesom Java har den et fejl setup som gøre at nå man skrive noget forkert kodning komme den op med en fejl og det instedet for i JS er det først i runtime eller når man kører projekt, at man kan se fejlen.
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
---
##  3.Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.
---

Node er bygget op omkring cloud med JS, så det er let at bygge netværksapplikationer. Den bruger single-theaded, noneblocking, asynchronous programmering. Node er blevet, lavet så JS kan køre i backend med de samme JS-fordele. 

Node er en slags ”virtual” maskine som ligner Java. Node kører på multi-platform. 

Vil man gerne køre Node, skal man installere de forskellige Node pakker. Det udtryk man bruger på Node.js er udtrykket npm kort sagt betyder Node.js: node package management, som er brugt til JS programmet.


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

Formålet med "use strict" er at angive, at koden skal udføres i "strict mode" og her kan du f.eks. ikke bruge undeclared variables. Declared i begyndelsen af et script har globalt anvendelsesområde (al kode i scriptet vil udføres i ”strict mode”):


```
1.console.log(s);
2. var s = 10;
3. output: undefined
```
undefined: eftersom console.log(s); køre før af den s variable ikke defineret

```
1.var s;
2. console.log(s);
3.s = 10;
output: undefined
```
undefined: eftersom nu er variable s og nå colsole.log(s); så nå den køre ved den intet hvad den eftersom det først på 3 linje
at vi defineret at s = 10.

```
var s = 10; 
console.log(s);
output: 10
```

Linters som JSLint eller JSHint kan registrere potentielle bugs/fejl samt kodning, som er svært at vedligeholde. Kode linting er en måde at øge kodekvaliteten på.
ESLint er et værktøj til at identificere og rapportere om mønstre, der findes i ECMAScript / JavaScript-kode. På mange måder ligner det JSLint og JSHint med nogle få undtagelser:
•	ESLint bruger Espree til JavaScript parsing.
•	ESLint bruger en AST til at evaluere mønstre i kode.
•	ESLint er helt plugget, hver enkelt regel er et plugin, og du kan tilføje flere ved kørsel.


