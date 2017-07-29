
#English version

## fullpath

A  node module to get full path of a directory and its nested directories or the full path of each file into each nested directory.

### release notes:

- fullpath now has support to exclude folders and select only files with a extension that you've specified. Please see examples 4 and 5 for more information about that how to use this new features.

[![Build Status](https://travis-ci.org/davidenq/fullpath.svg?branch=master)](https://travis-ci.org/davidenq/fullpath)
[![NPM](https://img.shields.io/npm/v/fullpath.svg)](https://www.npmjs.com/package/fullpath)
[![Downloads](https://img.shields.io/npm/dm/fullpath.svg)](http://npm-stat.com/charts.html?package=fullpath)

**_Coverage 99.02%_**

### Installation

```bash
$ [sudo] npm install fullpath --save
```
### How to use

The following example attaches fullpath to a simple node.js app

**_Directory structure:_**

```

├── example/
│   ├── empty /
│   ├── nested /
│   │   ├── nested-a/
│   │   │   ├── a1/
│   │   │   │   ├── empty.js
│   │   │   ├── a2/
│   │   │   │   ├── a21/
│   │   │   │   │   ├── a211/
│   │   │   │   │   │   ├── empty.js
│   │   │   │   │   │   ├── example.js
│   │   ├── nested-b/
│   │   │   ├── b1/
│   │   │   │   ├── b11/
│   │   │   │   │   ├── empty.js
│   │   │   │   │   ├── empty.json
│   │   │   │   ├── empty.js
├── index.js
```

### Example 1 - Full path of directories

index.js
```js
const fullPaths = new FullPath.Search({
    'path': '/example',
    'dirname': __dirname,
    'type': 'both', //optional. If you specified this value, by default is set with 'files'
    'allFiles': true //optional. If you specified this value, by default is set with false and the result was full path of files with .js and .json extension.
});

console.log(fullPaths);

```
Run the app:
```
node index.js
```
gives the following output
```
[ 'your_current_working_directory/example/empty',
  'your_current_working_directory/example/nested',
  'your_current_working_directory/example/nested/nested-a',
  'your_current_working_directory/example/nested/nested-b',
  'your_current_working_directory/example/nested/nested-a/a1',
  'your_current_working_directory/example/nested/nested-a/a2',
  'your_current_working_directory/example/nested/nested-b/b1',
  'your_current_working_directory/example/nested/nested-a/a2/a21',
  'your_current_working_directory/example/nested/nested-b/b1/b11',
  'your_current_working_directory/example/nested/nested-a/a2/a21/a211' ]


```

### Example 2 - Full path of files with any extension

index.js
```js

const fullPaths = new FullPath.Search({
    'path': '/example',
    'dirname': __dirname,
    'type': 'files', //optional. If you don't specified this value, by default is set with 'files'
    'allFiles': true //optional. If you don't specified this value, by default is set with false and the result was full path of files with .js and .json extension.
});

console.log(fullPaths);

```
Run the app:
```
node index.js
```
gives the following output
```
[ 'your_current_working_directory/example/nested/nested-a/a1/empty.js',
  'your_current_working_directory/example/nested/nested-b/b1/empty.js',
  'your_current_working_directory/example/nested/nested-b/b1/b11/empty.js',
  'your_current_working_directory/example/nested/nested-b/b1/b11/empty.json',
  'your_current_working_directory/example/nested/nested-b/b1/b11/empty.md', // .md
  'your_current_working_directory/example/nested/nested-a/a2/a21/a211/empty.js',
  'your_current_working_directory/example/nested/nested-a/a2/a21/a211/example.js' ]

```

### Example 3 - Full path of files with .json and .js extension.

index.js
```js
const fullPaths = new FullPath.Search({
    'path': '/example',
    'dirname': __dirname,
    'type': 'files', //optional. If you don't specified this value, by default is set with 'files'
    'allFiles': false //optional. If you don't specified this value, by default is set with false and the result was full path of files with .js and .json extension.
});

```
Run the app:
```
node index.js
```
gives the following output
```
[ 'your_current_working_directory/example/nested/nested-a/a1/empty.js',
  'your_current_working_directory/example/nested/nested-b/b1/empty.js',
  'your_current_working_directory/example/nested/nested-b/b1/b11/empty.js',
  'your_current_working_directory/example/nested/nested-b/b1/b11/empty.json',
  'your_current_working_directory/example/nested/nested-a/a2/a21/a211/empty.js',
  'your_current_working_directory/example/nested/nested-a/a2/a21/a211/example.js' ]

```

### Example 4 - Full path of files only with a specified extension

index.js
```js
const fullPaths = new FullPath.Search({
    'path': '/example',
    'dirname': __dirname,
    'ext': 'md'
});

```
Run the app:
```
node index.js
```
gives the following output
```
[ 'your_current_working_directory/example/nested/nested-a/a1/empty.md',
  'your_current_working_directory/example/nested/nested-b/b1/empty.md',
  'your_current_working_directory/example/nested/nested-b/b1/b11/empty.md',
  'your_current_working_directory/example/nested/nested-a/a2/a21/a211/empty.md' ]

```

### Example 5 - Exclude folders (also you can select with a extension or not)

index.js
```js
 const fullPaths = new FullPath.Search({
    'path': '/example',
    'dirname': __dirname,
    'ext': 'md', //it's not mandatory
    'exc': ['nested-b', 'a1']
});

```
Run the app:
```
node index.js
```
gives the following output
```
[ '/home/davidenq/Code/fullpath/test/example/nested/nested-a/empty.md',
  '/home/davidenq/Code/fullpath/test/example/nested/nested-a/a2/a21/a211/empty.md' ]

```

## Run test

```bash
$ npm test
```
## Support

If you need help using fullpath, or have found a bug, please create an issue on the
<a href='https://github.com/davidenq/fullpath/issues' target="_blank"> GitHub repo</a>.

## License

MIT Licence


#Versión Español

#fullpath


Un módulo para node.js que obtiene la ruta de acceso completa de una carpeta y sus carpetas anidadas o la ruta completa de todos los archivos contenidos en cada carpeta anidada.

### notas de la versión:

- el módulo fullpath ahora soporta dos nuevas caraceterísticas: excluir carpetas y seleccionar archivos con una extensión especificada. Por favor, ver los ejemplos 4 y 5 para mayor información acerca de como usar estas nuevas características.

###Instalación

```bash
$ [sudo] npm install fullpath --save
```

###¿Cómo usar?

A continuación se muestra un ejemplo sencillo de la ejecución del módulo.

**_Estructura de la carpeta (folder):_**

```

├── example/
│   ├── empty /
│   ├── nested /
│   │   ├── nested-a/
│   │   │   ├── a1/
│   │   │   │   ├── empty.js
│   │   │   ├── a2/
│   │   │   │   ├── a21/
│   │   │   │   │   ├── a211/
│   │   │   │   │   │   ├── empty.js
│   │   │   │   │   │   ├── example.js
│   │   ├── nested-b/
│   │   │   ├── b1/
│   │   │   │   ├── b11/
│   │   │   │   │   ├── empty.js
│   │   │   │   │   ├── empty.json
│   │   │   │   ├── empty.js
├── index.js
```

### Ejemplo 1 - Ruta completa de los directorios

index.js
```js
const fullPaths = new FullPath.Search({
    'path': '/example',
    'dirname': __dirname,
    'type': 'files',   //opcional. Si no especifica este valor, por defecto el valor será seteado con 'files'
    'allFiles': false //optional. Si no especifica este valor, por defecto dicho valor será seteado con false y obtendrá el resultado las rutas complestas únicamente de
                      // archivos con extensión .json y .js
});

```
Ejecutar la app:
```
node index.js
```
El resultado es:
```
[ 'your_current_working_directory/example/empty',
  'your_current_working_directory/example/nested',
  'your_current_working_directory/example/nested/nested-a',
  'your_current_working_directory/example/nested/nested-b',
  'your_current_working_directory/example/nested/nested-a/a1',
  'your_current_working_directory/example/nested/nested-a/a2',
  'your_current_working_directory/example/nested/nested-b/b1',
  'your_current_working_directory/example/nested/nested-a/a2/a21',
  'your_current_working_directory/example/nested/nested-b/b1/b11',
  'your_current_working_directory/example/nested/nested-a/a2/a21/a211' ]


```

### Ejemplo 2 - Ruta completa de archivos con cualquier extensión

index.js
```js
const fullPaths = new FullPath.Search({
    'path': '/example',
    'dirname': __dirname,
    'type': 'files',   //opcional. Si no especifica este valor, por defecto el valor será seteado con 'files'
    'allFiles': true //optional. Si no especifica este valor, por defecto dicho valor será seteado con false y obtendrá el resultado las rutas complestas únicamente de
                      // archivos con extensión .json y .js
});

```
Ejecutar la app:
```
node index.js
```
El resultado es:
```
[ 'your_current_working_directory/example/nested/nested-a/a1/empty.js',
  'your_current_working_directory/example/nested/nested-b/b1/empty.js',
  'your_current_working_directory/example/nested/nested-b/b1/b11/empty.js',
  'your_current_working_directory/example/nested/nested-b/b1/b11/empty.json',
  'your_current_working_directory/example/nested/nested-b/b1/b11/empty.md', // .md
  'your_current_working_directory/example/nested/nested-a/a2/a21/a211/empty.js',
  'your_current_working_directory/example/nested/nested-a/a2/a21/a211/example.js' ]

```

### Ejemplo 3 - Ruta completa de archivos únicamente con extensión .json y .js.

index.js
```js
const fullPaths = new FullPath.Search({
    'path': '/example',
    'dirname': __dirname,
    'type': 'files',   //opcional. Si no especifica este valor, por defecto el valor será seteado con 'files'
    'allFiles': false //optional. Si no especifica este valor, por defecto dicho valor será seteado con false y obtendrá el resultado las rutas complestas únicamente de
                      // archivos con extensión .json y .js
});

```
Ejecutar la app:
```
node index.js
```
El resultado es:
```
[ 'your_current_working_directory/example/nested/nested-a/a1/empty.js',
  'your_current_working_directory/example/nested/nested-b/b1/empty.js',
  'your_current_working_directory/example/nested/nested-b/b1/b11/empty.js',
  'your_current_working_directory/example/nested/nested-b/b1/b11/empty.json',
  'your_current_working_directory/example/nested/nested-a/a2/a21/a211/empty.js',
  'your_current_working_directory/example/nested/nested-a/a2/a21/a211/example.js' ]

```

### Ejemplo 4 - Ruta completa de archivos con una extensión especificada

index.js
```js
const fullPaths = new FullPath.Search({
    'path': '/example',
    'dirname': __dirname,
    'ext': 'md'
});

```
Ejecutar la app:
```
node index.js
```
gives the following output
```
[ 'your_current_working_directory/example/nested/nested-a/a1/empty.md',
  'your_current_working_directory/example/nested/nested-b/b1/empty.md',
  'your_current_working_directory/example/nested/nested-b/b1/b11/empty.md',
  'your_current_working_directory/example/nested/nested-a/a2/a21/a211/empty.md' ]

```

### Ejemplo 5 - Excluir carpetas (también puedes elegir o no archivos con una extensión especifica)

index.js
```js
 const fullPaths = new FullPath.Search({
    'path': '/example',
    'dirname': __dirname,
    'ext': 'md', //it's not mandatory
    'exc': ['nested-b', 'a1']
});

```
Ejecutar la app:
```
node index.js
```
gives the following output
```
[ '/home/davidenq/Code/fullpath/test/example/nested/nested-a/empty.md',
  '/home/davidenq/Code/fullpath/test/example/nested/nested-a/a2/a21/a211/empty.md' ]

```

## Ejecutar pruebtas

```bash
$ npm test
```
## Soporte

Si necesitas ayuda usando el módulo fullpath, o si encuentras un bug, por favor crea un issue en <a href="https://github.com/davidenq/fullpath/issues" target="_blank">GitHub repo</a>.

## Licencia

MIT Licence

