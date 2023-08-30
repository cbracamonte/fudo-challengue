# Fudo News Challengue

Una app de noticias consumiendo el API <https://newsapi.org/>

## Tabla de Contenidos

- [Introducción](#introducción)
- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura de Archivos](#estructura-de-archivos)
- [Contribución](#contribución)

## Introducción

Aplicación de noticias usando el API <https://newsapi.org/> mostrando las noticias en un card

## Características

- Diseño responsive
- Angular 16
- Standalone Components
- Patron 7-1 Sass
- BEM
- Husky
- git-cz
- prettier & eslint

## Requisitos

Deben tener instalado:

- Node.js (LTS) y npm instalados <https://nodejs.org/es/download>
- Angular CLI instalado  <https://angular.io/cli>
- Descargar su editor de código de preferencia, en este caso usaremos Visual Studio Code: <https://code.visualstudio.com/download>

## Instalación

1. Clona este repositorio `git clone https://github.com/cbracamonte/fudo-challengue` o descárgalo como archivo ZIP.
2. Abre una terminal y navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.

## Uso

```bash
npm run start
```

## Estructura de Archivos

src/
|-- app/
|   |-- core/
        | -- http
        | -- interceptor
|   |-- features/
        | -- home
        | -- news
|   |-- shared/
        | -- components
|-- assets/
|-- environments/
|-- styles
    |-- abstracts
    |-- base
    |-- components
    |-- layout
    |-- pages
    |-- themes
    |-- vendors

## Contribución

1. Haz un fork de este repositorio.
2. Crea una rama nueva para tus cambios: `git checkout -b feature/nueva-caracteristica`.
3. Haz tus cambios y realiza commits: `git commit -m 'Agrega nueva característica'`.
4. Sube tus cambios a tu fork: `git push origin feature/nueva-caracteristica`.
5. Abre un pull request en este repositorio.
