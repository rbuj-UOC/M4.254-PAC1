# Preguntes de teoria
## Enunciat pregunta 1
> L'aparició de HTML5/CSS3/JS ha suposat el naixement del desenvolupament front-end modern. (0.75 punts)
>   1. Quin és l'avantatge d'utilitzar etiquetes semàntiques? Anomena i explica com a mínim 3 d'aquests avantatges.
>   2. Cita almenys 3 APIs HTML5 i explica breument la seva funcionalitat.
>   3. Cita quina opció ofereix CSS3 per aconseguir que s'apliquin diferents estils CSS sobre el mateix element en la visualització en diferents dispositius (diferents mides de pantalla).
>   4. Cita almenys 4 de les característiques principals de TypeScript (important superset de JavaScript que tractarem al següent capítol).

## Resposta pregunta 1

### 1.1
Una [etiqueta semàntica](https://www.w3schools.com/html/html5_semantic_elements.asp) és una etiqueta en què el nom de la pròpia etiqueta descriu clarament el seu propòsit i contingut. Les etiquetes semàntiques ajuden els motors de cerca i altres dispositius d'usuari a determinar la importància i el context de les pàgines web. Les pàgines fetes amb elements semàntics són molt més fàcils de llegir, tenen una major accessibilitat i ofereixen una millor experiència d'usuari.

- Exemples d'elements no semàntics: `<div>` i `<span>` - No ens diuen res del seu contingut.
- Exemples d'elements semàntics: `<form>`, `<table>`, i `<article>` - Defineixen clarament el seu contingut.

### 1.2

#### *[Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)*

Proporciona mecanismes per dibuixar gràfics mitjançant JavaScript i l'element HTML `<canvas>`. Entre altres coses, es pot utilitzar per a l'animació, els gràfics de jocs, la visualització de dades, la manipulació de fotografies i el processament de vídeo en temps real.

```html
<!DOCTYPE html>
<html>
<body>

<script>
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
</script>

<canvas id="canvas"></canvas>

</body>
</html>
```
Exemple extret de https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

####  *[HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)*

Permet a les aplicacions utilitzar funcionalitats d'arrossegar i deixar anar als navegadors. L'usuari pot seleccionar elements arrossegables amb el ratolí, arrossegar-los dins d'un element i deixant anar el botó del ratolí. Una representació semitransparent dels elements arrossegables segueix el punter durant l'operació d'arrossegament.

```html
<!DOCTYPE html>
<html>
<head>
<style>
body {
  /* Prevent the user from selecting text in the example */
  user-select: none;
}

#draggable {
  text-align: center;
  background: white;
}

.dropzone {
  width: 200px;
  height: 20px;
  background: blueviolet;
  margin: 10px;
  padding: 10px;
}
</style>
</head>
<body>
<script>
let dragged = null;

const source = document.getElementById("draggable");
source.addEventListener("dragstart", (event) => {
  // store a ref. on the dragged elem
  dragged = event.target;
});

const target = document.getElementById("droptarget");
target.addEventListener("dragover", (event) => {
  // prevent default to allow drop
  event.preventDefault();
});

target.addEventListener("drop", (event) => {
  // prevent default action (open as a link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  if (event.target.className === "dropzone") {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
});
</script>
<div class="dropzone">
  <div id="draggable" draggable="true">This div is draggable</div>
</div>
<div class="dropzone" id="droptarget"></div>
</body>
</html>
```

Exemple extret de https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event

#### *[Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API)*

L'estàndard d'emmagatzematge defineix un sistema d'emmagatzematge compartit, dissenyat per ser utilitzat per totes les API i tecnologies que els llocs web poden utilitzar per emmagatzemar dades al navegador d'un usuari. L'*Storage API* proporciona als llocs web la possibilitat d'esbrinar quan espai poden utilitzar, quan n'estan utilitzant i fins i tot controlar si han d'avisar o no abans que l'agent d'usuari disposi de les dades per fer espai per a altres coses.

```html
<!DOCTYPE html>
<html>
<body onload="myFunction()">
<script>
navigator.storage.estimate().then((estimate) => {
  document.getElementById("percent").value = (
    (estimate.usage / estimate.quota) *
    100
  ).toFixed(2);
  document.getElementById("quota").value =
    (estimate.quota / 1024 / 1024).toFixed(2) + "MB";
});
</script>
<label>
  You're currently using about <output id="percent"> </output>% of your
  estimated storage quota (<output id="quota"></output>).
</label>
</body>
</html>
```
Exemple extret de https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/estimate

[Més informació...](https://en.wikipedia.org/wiki/HTML5#New_APIs)

### 1.3
Les [Media Queries en CSS3](https://www.w3schools.com/css/css3_mediaqueries.asp), amplien la regla `@media` introduïda en CSS2, permeten el disseny responsiu tot aplicant estils CSS en funció de la capacitat del dispositiu.

La regla `@media`, introduïda a CSS2, va permetre definir diferents regles d'estil per a diferents tipus de suports.

Les Media Queries a CSS3 van ampliar la idea dels tipus de mitjans CSS2: en comptes de buscar un tipus de dispositiu, observen la capacitat del dispositiu.

Les Media Queries es poden utilitzar per comprovar moltes coses, com ara:
- amplada i alçada del viewport
- orientació del viewport
- resolució

L'ús de Media Queries és una tècnica popular per oferir un full d'estil personalitzat a ordinadors de sobretaula, ordinadors portàtils, tauletes i telèfons mòbils (com ara telèfons iPhone i Android).

```html
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: tan;
  color: black;
}

/* On screens that are 992px wide or less, the background color is blue */
@media screen and (max-width: 992px) {
  body {
    background-color: blue;
    color: white;
  }
}

/* On screens that are 600px wide or less, the background color is olive */
@media screen and (max-width: 600px) {
  body {
    background-color: olive;
    color: white;
  }
}
</style>
</head>
<body>

<h1>Resize the browser window to see the effect!</h1>
<p>By default, the background color of the document is "tan". If the screen size is 992px or less, the color will change to "blue". If it is 600px or less, it will change to "olive".</p>

</body>
</html>
```
Exemple extret de https://www.w3schools.com/css/css3_mediaqueries_ex.asp

### 1.4

#### Generics

TypeScript admet programació genèrica utilitzant una sintaxi similar a Java. Exemple: funció identitat

```typescript
function id<T>(x: T): T {
    return x;
}
```

#### Classes

TypeScript utilitza el mateix estil d'anotació per a mètodes i camps de la classe que per a funcions i variables. En comparació amb les classes de vainilla JavaScript, una classe TypeScript també pot implementar una interfície mitjançant la paraula clau `implements`, utilitzar paràmetres genèrics de manera similar a Java i especificar camps públics i privats.

```typescript
class Person {
    private name: string;
    private age: number;
    private salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    toString(): string {
        return `${this.name} (${this.age}) (${this.salary})`;
    }
}
```

#### Union types

La unió de tipus és compatible amb TypeScript. Els valors estan implícitament "etiquetats" amb un tipus pel llenguatge, i es poden recuperar mitjançant una crida a `typeof` per a valors primitius, i comparació amb `instanceof` per a tipus de dades complexos.

```typescript
function successor(n: number | bigint): number | bigint {
    // types that support the same operations don't need narrowing
    return ++n;
}

function dependsOnParameter(v: string | Array<string> | number) {
    // distinct types need narrowing
    if (v instanceof Array) {
        // do something
    } else if (typeof(v) === "string") {
        // do something else
    } else {
        // has to be a number
    }
}
```

#### Enumerated types

TypeScript afegeix un tipus de dades `enum` a JavaScript.

```typescript
enum Cardsuit {Clubs, Diamonds, Hearts, Spades};
var c: Cardsuit = Cardsuit.Diamonds;
```

Per defecte, les enumeracions comencen per 0; això es pot substituir establint el valor del primer:

```typescript
enum Cardsuit {Clubs = 1, Diamonds, Hearts, Spades};
var c: Cardsuit = Cardsuit.Diamonds;
```

Es poden establir tots els valors:

```typescript
enum Cardsuit {Clubs = 1, Diamonds = 2, Hearts = 4, Spades = 8};
var c: Cardsuit = Cardsuit.Diamonds;
```

TypeScript admet l'assignació de valor numèric al seu nom. En l'exemple es troba el nom del valor 2:

```typescript
enum Cardsuit {Clubs = 1, Diamonds, Hearts, Spades};
var suitName: string = Cardsuit[2];

alert(suitName);
```

[Més informació](https://en.wikipedia.org/wiki/TypeScript#Features)

## Enunciat pregunta 2
> El llenguatge CSS és molt rígid, poc pràctic i endreçat a l'hora de programar. Per evitar aquest problema s'han creat els preprocessadors CSS, que ofereixen avantatges evidents (0.5 punts)
>   1. Citeu almenys 2 d'aquests preprocessadors.
>   2. Cita almenys 4 avantatges que ofereixen aquests preprocessadors.
>   3. Explica breument en què consisteixen els sourcemaps.
>   4. Explica què és un transpilador.

## Resposta pregunta 2

### 2.1
#### [SASS (syntactically awesome style sheets)](https://sass-lang.com/)
   
És un llenguatge de guions de preprocessador que s'interpreta o compila en fulls d'estil en cascada (CSS). SASS va ser dissenyat inicialment per Hampton Catlin i desenvolupat per Natalie Weizenbaum. Després de les seves versions inicials, Weizenbaum i Chris Eppstein han continuat ampliant-lo. Actualment té dues sintaxis. La nova sintaxi, SCSS (Sassy CSS), utilitza el format de blocs com CSS, utilitza claus per delimitar els blocs de codi i utilitza punt i coma per separar les regles dins d'un bloc. Els fitxers que utilitzen sintaxi amb sagnat tenen l'extensió .sass i els fitxers SCSS tenen l'extensió .scss.

SASS
```
table.hl 
  margin: 2em 0
  td.ln 
    text-align: right
  
li 
  font: 
    family: serif
    weight: bold
    size: 1.3em
```

SCSS
```SCSS
table.hl {
  margin: 2em 0;
  td.ln {
    text-align: right;
  }
}

li {
  font: {
    family: serif;
    weight: bold;
    size: 1.3em;
  }
}
```

CSS
```CSS
table.hl {
  margin: 2em 0;
}
table.hl td.ln {
  text-align: right;
}

li {
  font-family: serif;
  font-weight: bold;
  font-size: 1.3em;
}
```

#### [LESS (leaner Style Sheets)](https://lesscss.org/)

És un llenguatge de fulls d'estil de preprocessador dinàmic que es pot compilar en fulls d'estil en cascada (CSS) i executar-se al costat del client o al costat del servidor. Dissenyat per Alexis Sellier, LESS està influenciat per la nova sintaxi SCSS de SASS. LESS és un projecte de codi obert. La seva primera versió va ser escrita en Ruby; tanmateix, en les versions posteriors, l'ús de Ruby ha estat en desús i substituït per JavaScript. LESS proporciona els següents mecanismes: variables, nidificació, mixins, operadors i funcions; la diferència principal entre LESS i els altres precompiladors CSS és que LESS permet la compilació en temps real mitjançant less.js pel navegador.

### 2.2
#### Variables

Permeten emmagatzemar i reutilitzar valors. El següent bloc de codi SASS:
```
$primary-color: #4caf50  
$regular-text: 16px

.card
    background-color: $primary-color
    font-size: $regular-text
```
compila a:
```CSS
.card {
    background-color: #4caf50;
    font-size: 16px;
}
```

#### Mixin

Permeten crear un grup de regles que es poden reutilitzar. El següent bloc de codi SASS:
```
@mixin bg-image($url)
    background-image: url($url)
    background-repeat: no-repeat
    background-cover: cover

.card
    @include bg-image("link-to-image")
```
compila a:
```CSS
.card {
    background-image: url("link-to-image");
    background-repeat: no-repeat;
    background-cover: cover;
}
```

#### Bucles

Permet iterar sobre variables mitjançant @for, @each i @while, que es poden utilitzar per aplicar diferents estils a elements amb classes o identificadors similars. El següent bloc de codi SASS:
```
$squareCount: 4
@for $i from 1 to $squareCount 
    #square-#{$i} 
        background-color: red
        width: 50px * $i
        height: 120px / $i
```
compila a:
```CSS
#square-1 {
    background-color: red;
    width: 50px;
    height: 120px;
}

#square-2 {
    background-color: red;
    width: 100px;
    height: 60px;
}

#square-3 {
    background-color: red;
    width: 150px;
    height: 40px;
}
```


#### Nidificació

Permet als desenvolupadors seguir la jerarquia de forma visual. El següent bloc de codi SASS:
```
header  
    width: 100vw
    
    .logo
        object-fit: contain
```
compila a:
```CSS
header {  
    width: 100vw; 
}

header .logo {
    object-fit: contain;
}
```

### 2.3

Els *sourcemaps* són com uns mapes que vinculen el codi font original amb el codi generat. La [versió 3 de l'especificació dels *sourcemaps*](https://sourcemaps.info/spec.html) utilitza el següent format de fitxer json:
```json
{
"version" : 3,
"file": "out.js",
"sourceRoot": "",
"sources": ["foo.js", "bar.js"],
"sourcesContent": [null, null],
"names": ["src", "maps", "are", "fun"],
"mappings": "A,AAAB;;ABCDE;"
}
```

Línia 2: la versió del fitxer (sempre ha de ser la primera entrada de l'objecte) i ha de ser un nombre enter positiu.

Línia 3: (opcional) un nom del codi generat al qual està associat aquest mapa de codi.

Línia 4: (opcional) una arrel del codi font, útil per reubicar fitxers de codi font en un servidor o eliminar valors repetits a l'entrada "sources". Aquest valor s'afegeix davant de les entrades del camp "sources".

Línia 5: una llista de fonts originals utilitzades per l'entrada "mappings".

Línia 6: (opcional) una llista de contingut de les fonts, útil quan no es poden allotjar les fonts ("sources"). Els continguts s'enumeren en el mateix ordre que les fonts a la línia 5. Es pot utilitzar `nul` si s'han de recuperar algunes fonts originals pel nom.

Línia 7: una llista de noms de símbols utilitzats per l'entrada "mappings".

Línia 8: una cadena amb les dades de mapatge codificades. Les dades dels "mappings" es desglossen de la següent manera:

- cada grup que representa una línia al fitxer generat està separat per un `;`
- cada segment està separat per una `,`
- cada segment està format per 1, 4 o 5 camps de longitud variable. Els camps de cada segment són:
  1. **Columna al fitxer generat**: La columna al codi generat, que comença a partir de 0, de la línia al codi generat que representa el segment. Si aquest és el primer camp del primer segment, o el primer segment que segueix una nova línia generada (";"), aquest camp conté tot el VLQ base 64. En cas contrari, aquest camp conté un VLQ base 64 relatiu a l'ocurrència anterior d'aquest camp. S'ha de tenir compte que això és diferent dels camps següents perquè el valor anterior es restableix després de cada línia generada.
  2. **Fitxer de codi al que correspon:** Si està present, un índex, que comença a partir de 0, del camp a la llista "sources". Aquest camp és un VLQ base 64 relatiu a l'ocurrència anterior d'aquest camp, tret que aquesta sigui la primera ocurrència d'aquest camp, en aquest cas es representa tot el valor.
  3. **Número de línia al codi original**: Si està present, representa la línia al codi font original, que comença a partir de 0. Aquest camp és un VLQ base 64 relatiu a l'ocurrència anterior d'aquest camp, tret que aquesta sigui la primera ocurrència d'aquest camp, en aquest cas es representa tot el valor. Sempre present si hi ha un camp font.
  4. **Número de columna al codi original**: Si està present, la columna de la línia del codi font representat, que comença a partir de 0. Aquest camp és un VLQ base 64 relatiu a l'ocurrència anterior d'aquest camp, tret que aquesta sigui la primera ocurrència d'aquest camp, en aquest cas es representa tot el valor. Sempre present si hi ha un camp font.
  5. **Nom associat**: Si està present, l'índex, que comença a partir de 0, a la llista "names" associada a aquest segment. Aquest camp és un VLQ base 64 relatiu a l'ocurrència anterior d'aquest camp, tret que aquesta sigui la primera ocurrència d'aquest camp, en aquest cas es representa tot el valor.

Exemple de sourcemap: `script-transpiled.js.map`

```sh
npx babel script.js --out-file script-transpiled.js --source-maps --presets=es2015
```

script.js
```js
const sayHello = name => `Hello $(name)`;
sayHello('sourcemap');
```

script-transpiled.js
```js
'use strict';

var sayHello = function sayHello(name) {
  return 'Hello $(name)';
};
sayHello('sourcemap');

//# sourceMappingURL=script-transpiled.js.map
```

script-transpiled.js.map
```json
{
    "version":3,
    "sources":["script.js"],
    "names":[],
    "mappings":";;AAAA,IAAM,WAAW,SAAX,QAAW;AAAA;AAAA,CAAjB;AACA,SAAS,WAAT",
    "file":"script-transpiled.js",
    "sourcesContent":["const sayHello = name => `Hello $(name)`;\nsayHello('sourcemap');\n"]
}
```

Exemple extret de https://medium.com/@trungutt/yet-another-explanation-on-sourcemap-669797e418ce

### 2.4

Un [transpilador](https://en.wikipedia.org/wiki/Source-to-source_compiler) és un tipus de traductor que pren el codi font d'un programa escrit en un llenguatge de programació com a entrada, i produeix un codi font equivalent en el mateix llenguatge de programació o en un diferent.

En l'exemple anterior es transpila el fitxer ES2005 `script.js` al fitxer JavaScript `script-transpiled.js`.

## Enunciat pregunta 3
> El flux de treball professional a front-end fa indispensable l'ús d'eines com a controls de versions i eines de gestió de mòduls (0.75 punts).
>   1. Cita almenys dos sistemes de control de versions i dues eines de gestió de mòduls.
>   2. Cita i explica almenys 3 ordres de Git.
>   3. Cita i explica breument les característiques més definitòries de WebPack.

## Resposta pregunta 3

### 3.1

#### Sistema de control de versions 1: [Mercurial](https://en.wikipedia.org/wiki/Mercurial)

Mercurial és un sistema de control de versions distribuït lliure, similar a Git o Bazaar. Els principals objectius de disseny de Mercurial inclouen rendiment i escalabilitat, descentralització, desenvolupament col·laboratiu totalment distribuït, gestió sòlida tant de fitxers binaris com de text pla, i capacitats avançades de ramificació i fusió, tot i que es manté conceptualment senzill. Inclou una interfície web integrada. Mercurial també ha pres mesures per facilitar la transició dels usuaris d'altres sistemes de control de versions, especialment Subversion.

Mercurial és principalment un programa basat en la línia d'ordres; no obstant això hi ha disponibles extensions d'interfície gràfica d'usuari, com ara TortoiseHg, a més diversos IDE proporcionen suport per al control de versions amb Mercurial. Totes les operacions de Mercurial s'invoquen com a arguments del seu programa controlador `hg` (una referència a Hg, el símbol químic de l'element mercuri).

#### Sistema de control de versions 2: [Apache Subversion (SVN)](https://en.wikipedia.org/wiki/Apache_Subversion)

Apache Subversion (sovint abreujat SVN, pel nom de la seva ordre `svn`) és un sistema de control de versions i revisions de programari, de codi obert, sota llicència Apache. Els desenvolupadors de programari utilitzen Subversion per mantenir les versions actuals i històriques dels fitxers, com ara el codi font, les pàgines web i la documentació. El seu objectiu és ser un successor majoritàriament compatible amb el sistema de versions simultànies (CVS) molt utilitzat.

La comunitat de codi obert ha utilitzat Subversion àmpliament: per exemple, en projectes com Apache Software Foundation, FreeBSD, SourceForge i del 2006 al 2019, GCC. CodePlex era anteriorment un amfitrió comú per als dipòsits de Subversion.

Subversion va ser creat per CollabNet Inc. l'any 2000, i ara és un projecte d'Apache de primer nivell, construït i utilitzat per una comunitat global de col·laboradors.

#### Eina de gestió de mòduls 1: [Webpack](https://webpack.js.org/)

Webpack és una eina de codi obert d'agrupament de mòduls (bundler) per a JavaScript. Està fet principalment per a JavaScript, però pot transformar actius de front-end com HTML, CSS i imatges si s'inclouen els carregadors corresponents. Webpack agafa mòduls amb dependències i genera actius estàtics que representen aquests mòduls.

Webpack agafa les dependències i genera un gràfic de dependències que permet als desenvolupadors web utilitzar un enfocament modular per al desenvolupament de les seves aplicacions web. Es pot utilitzar des de la línia d'ordres o es pot configurar mitjançant un fitxer de configuració anomenat `webpack.config.js`. Aquest fitxer defineix regles, connectors, etc., per a un projecte. (Webpack és molt extensible mitjançant regles que permeten als desenvolupadors escriure tasques personalitzades que volen realitzar quan s'agrupen fitxers.)

Webpack proporciona [codi sota demanda](https://webpack.js.org/guides/lazy-loading/) mitjançant la [divisió de codi](https://webpack.js.org/guides/code-splitting/). Webpack admet dues tècniques similars quan es tracta de dividir el [codi dinàmic](https://webpack.js.org/guides/code-splitting/#dynamic-imports). El primer enfocament recomanat és utilitzar la sintaxi [import()](https://webpack.js.org/api/module-methods/#import-1) que s'ajusta a la proposta d'ECMAScript per a les importacions dinàmiques. L'enfocament heretat específic de Webpack és utilitzar [require.ensure](https://webpack.js.org/api/module-methods/#requireensure).

#### Eina de gestió de mòduls 2: [esbuild](https://esbuild.github.io/)

esbuild és un una eina de codi obert d'agrupament (bundler) i de reducció de mòduls per a JavaScript escrit per Evan Wallace. Escrit a Go en comptes de JavaScript, esbuild afirma ser "de 10 a 100 vegades" més ràpid que altres paquets mitjançant el paral·lelisme i l'ús de memòria compartida. Admet TypeScript, JSX, tree-shaking i és pot ampliar mitjançant connectors.

esbuild s'utilitza a Vite (una eina de compilació front-end i un servidor de desenvolupament) i al Framework Phoenix. S'inclou com a eina d'agrupament per a Angular des de la v17, Ruby on Rails des de la v7, i per a les funcions de Netlify.

### 3.2

#### [git bisect](https://git-scm.com/docs/git-bisect): utilitza la cerca dicotòmica per trobar el commit que va introduir un error

Sintaxi
```sh
git bisect <subcommand> <options>
```

Aquesta ordre s'utilitza per trobar el commit que va introduir un error. Primer s'inicialitza la cerca amb `git bisect start`:
```sh
$ git bisect start
status: waiting for both good and bad commits
```

A continuació es defineixen els dos extrems de la cerca. Primer es marca el commit dolent amb `git bisect bad`. En aquest exemple es marca el HEAD (capçal) com a commit dolent, no cal especificar el id. `sha`, `branch` o `tag` del commit:
```sh
$ git bisect bad
status: waiting for good commit(s), bad commit known
```

Després es marca l'últim commit bo conegut, aquell que no produeix l'error al codi, amb l'id. `sha`, `tag` o `branch` del commit. P. ex. `git bisect good sha`:
```
$ git bisect good 44eed0e
Bisecting: 114 revisions left to test after this (roughly 7 steps)
[929408351cfb8e3a9373d12c26fb96781297ab5d] require gio-unix, drop python example
```

Que és equivalent a primer seleccionar el commit amb `git checkout sha` i després marcar-lo com a bo `git bisect good`.

En aquest moment ja s'ha mogut el capçal.

```
Bisecting: 114 revisions left to test after this (roughly 7 steps)
[929408351cfb8e3a9373d12c26fb96781297ab5d] require gio-unix, drop python example
```

Ara hem de comprovar si es continua produint l'error o no. Si es continua produint l'error hem de marcar el commit com a dolent `git bisect bad`, en cas contrari (no es produeix l'error) marcar-lo com a bo `git bisect good`. Es repeteix el procés de marcar com a bo o dolent el commit fins trobar l'error, ie no quedin més passos i ens digui el commit que va introduir l'error.

```sh
$ git bisect good
Bisecting: 57 revisions left to test after this (roughly 6 steps)
[b07507f7f3f4d523d0f8df8d058c3b1b81494e46] Travis CI: enable irc notifications with broken builds
$ git bisect bad
Bisecting: 28 revisions left to test after this (roughly 5 steps)
[d41c2f6933d216cb894312f4aed2f53c4a265f49] tx: sync with transifex
$ git bisect good
Bisecting: 14 revisions left to test after this (roughly 4 steps)
[a804a6ad51f10bce233351efd7f33d5bad480a1d] tx: sync with transifex
$ git bisect bad
Bisecting: 6 revisions left to test after this (roughly 3 steps)
[a3c9c6285471d941467921a663ac35eb42ee22b3] ci: add autopoint
$ git bisect bad
Bisecting: 3 revisions left to test after this (roughly 2 steps)
[1dbf02c894cd442c1376d2c00e4daa8d8aba2ab7] Travis CI: cppcheck with -D arguments
$ git bisect good
Bisecting: 1 revision left to test after this (roughly 1 step)
[e59bfcdfbf6adcab73523322e27fb3ca5ef6f0a3] Travis CI: use Debian "testing" instead "sid"
$ git bisect good
Bisecting: 0 revisions left to test after this (roughly 0 steps)
[acee1df17030892911000024620003ad2aa29843] migrate from intltools to gettext
$ git bisect good
a3c9c6285471d941467921a663ac35eb42ee22b3 is the first bad commit
commit a3c9c6285471d941467921a663ac35eb42ee22b3
Author: Wu Xiaotian <yetist@gmail.com>
Date:   Tue Oct 29 14:17:57 2019 +0800

    ci: add autopoint

 .travis.yml | 5 ++---
 1 file changed, 2 insertions(+), 3 deletions(-)
```

En aquest coment ja podem aturar la cerca:
```sh
$ git bisect reset
Previous HEAD position was acee1df migrate from intltools to gettext
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
```

#### [git grep](https://git-scm.com/docs/git-grep): com per cercar al contingut del dipòsit?

Git es distribueix amb una ordre anomenada `grep` que permet cercar fàcilment a través de qualsevol arbre de consignacions (commits), directori de treball o fins i tot l'índex d'una cadena o expressió regular. Per als exemples següents, se cerca al codi font del mateix git.

Per defecte, `git grep` buscarà els fitxers al directori de treball. Com a primera variació, es pot utilitzar qualsevol de les opcions `-n` o `--line-number` per imprimir els números de línia on Git ha trobat coincidències:

```sh
$ git grep -n gmtime_r
compat/gmtime.c:3:#undef gmtime_r
compat/gmtime.c:8:      return git_gmtime_r(timep, &result);
compat/gmtime.c:11:struct tm *git_gmtime_r(const time_t *timep, struct tm *result)
compat/gmtime.c:16:     ret = gmtime_r(timep, result);
compat/mingw.c:826:struct tm *gmtime_r(const time_t *timep, struct tm *result)
compat/mingw.h:206:struct tm *gmtime_r(const time_t *timep, struct tm *result);
date.c:482:             if (gmtime_r(&now, &now_tm))
date.c:545:             if (gmtime_r(&time, tm)) {
date.c:758:             /* gmtime_r() in match_digit() may have clobbered it */
git-compat-util.h:1138:struct tm *git_gmtime_r(const time_t *, struct tm *);
git-compat-util.h:1140:#define gmtime_r git_gmtime_r
```

A més de la cerca bàsica que es mostra a dalt, `git grep` admet una gran quantitat d'altres opcions interessants.

Per exemple, en lloc d'imprimir totes les coincidències, es pot demanar a `git grep` que resumeixi la sortida mostrant només quins fitxers contenien la cadena de cerca i quantes coincidències hi havia a cada fitxer amb l'opció `-c` o `--count`:

```sh
$ git grep --count gmtime_r
compat/gmtime.c:4
compat/mingw.c:1
compat/mingw.h:1
date.c:3
git-compat-util.h:2
```

Si estem interessats en el context d'una cadena de cerca, podem mostrar el mètode o funció que el recull per a cada cadena coincident amb qualsevol de les opcions `-p` o `--show-function`:

```sh
$ git grep -p gmtime_r *.c
date.c=static int match_multi_number(timestamp_t num, char c, const char *date,
date.c:         if (gmtime_r(&now, &now_tm))
date.c=static int match_digit(const char *date, struct tm *tm, int *offset, int *tm_gmt)
date.c:         if (gmtime_r(&time, tm)) {
date.c=int parse_date_basic(const char *date, timestamp_t *timestamp, int *offset)
date.c:         /* gmtime_r() in match_digit() may have clobbered it */
```

Com es pot veure, la rutina `gmtime_r` es crida des de les funcions `match_multi_number` i `match_digit` del fitxer `date.c` (la tercera coincidència que es mostra només representa la cadena que apareix en un comentari).

També podeu cercar combinacions complexes de cadenes amb l'indicador `--and`, que garanteix que s'hagin de produir diverses coincidències a la mateixa línia de text. Per exemple, busquem qualsevol línia que defineixi una constant el nom de la qual contingui qualsevol de les subcadenes "LINK" o "BUF_MAX", concretament en una versió anterior del codi base de Git representada per l'etiqueta `v1.8.0` (llançarem les opcions `--break` i `--heading` que ajuden a dividir la sortida en un format més llegible):

```sh
$ git grep --break --heading \
    -n -e '#define' --and \( -e LINK -e BUF_MAX \) v1.8.0
v1.8.0:builtin/index-pack.c
62:#define FLAG_LINK (1u<<20)

v1.8.0:cache.h
73:#define S_IFGITLINK  0160000
74:#define S_ISGITLINK(m)       (((m) & S_IFMT) == S_IFGITLINK)

v1.8.0:environment.c
54:#define OBJECT_CREATION_MODE OBJECT_CREATION_USES_HARDLINKS

v1.8.0:strbuf.c
326:#define STRBUF_MAXLINK (2*PATH_MAX)

v1.8.0:symlinks.c
53:#define FL_SYMLINK  (1 << 2)

v1.8.0:zlib.c
30:/* #define ZLIB_BUF_MAX ((uInt)-1) */
31:#define ZLIB_BUF_MAX ((uInt) 1024 * 1024 * 1024) /* 1GB */
```

L'ordre `git grep` té alguns avantatges respecte a les ordres de cerca normals com `grep` i `ack`. El primer és que és molt ràpid, el segon és que podeu cercar a través de qualsevol arbre de Git, no només al directori de treball. Com hem vist a l'exemple anterior, hem cercat termes en una versió anterior del codi font de Git, no en la versió que s'ha comprovat (checked out) actualment.

[Més informació](https://git-scm.com/book/en/v2/Git-Tools-Searching)

#### [git log](https://git-scm.com/docs/git-log): mostrar el registre i com fer-hi cerques

L'ordre `git log` mostra el registre de commits. El format de la sortida es pot modificar amb l'opció `--oneline` perquè només mostri una línia per a cada entrada del registre. A més es pot limitar l'abast establint les opcions `--until=<data>` o `--before=<data>` i `--since=<data>` o `--after=<data>`, filtrar per autor amb l'opció `--author=<patró>` o `--committer=<patró>`, limitar el nombre de sortides amb l'opció `-<número>`, `-n <número>` o `--max-count=<número>`

```sh
$ git log --oneline --since=2020-02-20 --until=2024-01-01 --committer="Ralf*" -n 3
ed8b3c3078 l10n: Update German translation
a1d7c65007 l10n: Update German translation
5eaa027972 l10n: Update German translation
```

També podem obtenir el llistat de canvis entre dos id. `sha`, etiquetes o branques:
```sh
$ git log --oneline v2.44.0-rc2..v2.44.0
3c2a3fdc38 (tag: v2.44.0) Git 2.44
0d464a4e6a (tag: v2.43.3, origin/maint) Git 2.43.3
5dc7366297 Merge branch 'la/trailer-cleanups' into maint-2.43
```

L'ordre `git log` té una sèrie d'eines potents per trobar commits específics pel contingut dels seus missatges o fins i tot pel contingut del `diff` que van introduir.

Si, per exemple, volem esbrinar quan es va introduir originalment la constant ZLIB_BUF_MAX, podem utilitzar l'opció `-S` (anomenada col·loquialment l'opció "pickaxe") per dir-li a Git que ens mostri només aquells commits que han canviat el nombre de coincidències amb aquesta cadena.

```sh
$ git log -S ZLIB_BUF_MAX --oneline
e01503b zlib: allow feeding more than 4GB in one go
ef49a7a zlib: zlib can only process 4GB at a time
```

Si mirem al `diff` d'aquests commits, podem veure que a `ef49a7a` es va introduir la constant i a `e01503b` es va modificar.

Si necessitem ser més específics, podem proporcionar una expressió regular per cercar amb l'opció `-G`.

Una altra cerca al registre força avançada que és increïblement útil és la cerca a les línies de l'historial. Simplement cal executar `git log` amb l'opció `-L` i es mostrarà l'historial d'una funció o línia de codi a la vostra base de codi.

Per exemple, si volem veure tots els canvis fets a la funció `git_deflate_bound` al fitxer `zlib.c`, podem executar `git log -L :git_deflate_bound:zlib.c`. Això intentarà esbrinar quins són els límits d'aquesta funció i després mirar l'historial i mostrar tots els canvis que es van fer a la funció com una sèrie de pedaços fins quan es va crear la funció per primera vegada.

```sh
$ git log -L :git_deflate_bound:zlib.c
commit ef49a7a0126d64359c974b4b3b71d7ad42ee3bca
Author: Junio C Hamano <gitster@pobox.com>
Date:   Fri Jun 10 11:52:15 2011 -0700

    zlib: zlib can only process 4GB at a time

diff --git a/zlib.c b/zlib.c
--- a/zlib.c
+++ b/zlib.c
@@ -85,5 +130,5 @@
-unsigned long git_deflate_bound(z_streamp strm, unsigned long size)
+unsigned long git_deflate_bound(git_zstream *strm, unsigned long size)
 {
-       return deflateBound(strm, size);
+       return deflateBound(&strm->z, size);
 }


commit 225a6f1068f71723a910e8565db4e252b3ca21fa
Author: Junio C Hamano <gitster@pobox.com>
Date:   Fri Jun 10 11:18:17 2011 -0700

    zlib: wrap deflateBound() too

diff --git a/zlib.c b/zlib.c
--- a/zlib.c
+++ b/zlib.c
@@ -81,0 +85,5 @@
+unsigned long git_deflate_bound(z_streamp strm, unsigned long size)
+{
+       return deflateBound(strm, size);
+}
+
```

Si Git no pot esbrinar com fer coincidir una funció o mètode al vostre llenguatge de programació, també podeu proporcionar-li una expressió regular. Per exemple, això hauria fet el mateix que l'exemple anterior: `git log -L '/unsigned long git_deflate_bound/',/^}/:zlib.c`. També podem donar-li un rang de línies o un sol número de línia i obtindrem el mateix tipus de sortida.

Per realitzar una cerca senzilla al registre es pot utilitzar l'opció `--grep` a l'ordre `git log`:
```
$ git log --all --grep='zlib-ng'
commit fbc6526ea651565889e437ce7b12c762ef858813
Author: René Scharfe <l.s.r@web.de>
Date:   Tue Dec 12 18:04:55 2023 +0100

    t6300: avoid hard-coding object sizes
    
    f4ee22b526 (ref-filter: add tests for objectsize:disk, 2018-12-24)
    hard-coded the expected object sizes.  Coincidentally the size of commit
    and tag is the same with zlib at the default compression level.
    
    1f5f8f3e85 (t6300: abstract away SHA-1-specific constants, 2020-02-22)
    encoded the sizes as a single value, which coincidentally also works
    with sha256.
    
    Different compression libraries like zlib-ng may arrive at different
    values.  Get them from the file system instead of hard-coding them to
    make switching the compression library (or changing the compression
    level) easier.
    
    Reported-by: Ondrej Pohorelsky <opohorel@redhat.com>
    Signed-off-by: René Scharfe <l.s.r@web.de>
    Signed-off-by: Junio C Hamano <gitster@pobox.com>
```

[Més informació](https://git-scm.com/book/en/v2/Git-Tools-Searching)


### 3.3 [Conceptes bàsics](https://webpack.js.org/concepts/) de webpack

#### Entry

Un punt d'entrada indica quin mòdul webpack s'hauria d'utilitzar per començar a construir el gràfic de dependències internes. Webpack esbrinarà quins altres mòduls i biblioteques depèn aquest punt d'entrada (directament i indirectament).

De manera predeterminada, el seu valor és ./src/index.js, però es pot especificar un punt d'entrada diferent (o diversos) establint una propietat `entry` a la configuració de webpack. Per exemple:

webpack.config.js
```
module.exports = {
  entry: './path/to/my/entry/file.js',
};
```

#### Output

La propietat `output` indica a webpack on ha d'emetre les agrupacions (bundles) que crea i com anomenar aquests fitxers. El valor predeterminat és `./dist/main.js` per al fitxer de sortida principal i la carpeta `./dist` per a qualsevol altre fitxer generat.

Podeu configurar aquesta part del procés especificant un camp `output` a la vostra configuració:

webpack.config.js
```
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
};
```

#### Loaders

Fora de la caixa, webpack només entén els fitxers JavaScript i JSON. Els carregadors permeten a webpack processar altres tipus de fitxers i els converteixi en mòduls vàlids que es puguin consumir a la vostra aplicació i afegir-ho al gràfic de dependències.

A un nivell alt, els carregadors tenen dues propietats a la vostra configuració de webpack:
- La propietat `test` identifica quin fitxer o fitxers s'han de transformar.
- La propietat `use` indica quin carregador s'ha d'utilitzar per fer la transformació.

webpack.config.js
```
const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
};
```

La configuració anterior ha definit una propietat `rules` per a un únic mòdul amb dues propietats requerides: `test` i `use`. Això indica al compilador de webpack el següent:

> "Hola, compilador de paquets web, quan trobeu un camí que es resol en un fitxer '.txt' dins d'una instrucció `require()/import`, utilitza `raw-loader` per transformar-lo abans d'afegir-lo a l'agruació (bundle)".

#### Plugins

Tot i que els carregadors s'utilitzen per transformar certs tipus de mòduls, els connectors es poden aprofitar per realitzar una gamma més àmplia de tasques com l'optimització de paquets, la gestió d'actius i la injecció de variables d'entorn.

Per utilitzar un connector, cal fer `require()` i afegir-lo a la matriu de connectors. La majoria dels connectors es poden personalitzar mitjançant opcions. Com que es pot utilitzar un connector diverses vegades en una configuració per a diferents propòsits, s'ha de crear una instància cridant-lo amb el nou operador.

webpack.config.js
```
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
```

A l'exemple anterior, `html-webpack-plugin` genera un fitxer HTML i injecta automàticament totes les agrupacions (bundles) generades a aquest fitxer.

#### Mode

En establir el paràmetre mode en `development`, `production` o `none`, es poden habilitar les optimitzacions integrades de webpack que corresponguin a cada entorn. El valor per defecte és `production`.

```
module.exports = {
  mode: 'production',
};
```

#### Browser Compatibility

Webpack admet tots els navegadors compatibles amb ES5 (no s'admeten ni IE8 i ni les versions anteriors). Webpack necessita `Promise` per a `import()` i `require.ensure()`. Si voleu admetre navegadors antics, haureu de carregar un `polyfill` abans d'utilitzar aquestes expressions.