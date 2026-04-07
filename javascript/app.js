// main app element {variable}
const app = document.getElementById('app');

// components {object}
import { Home } from './components/home.mjs';
import { Counter } from './components/counter.mjs';
import { Theme } from './components/theme.mjs';

// main app container {function}
function appContainer() {
    return (
        `
        ${Theme().template}
        ${Home().template}
        `
    )
}

// app render function {function}
function appRender() {
    app.innerHTML = appContainer();
}
// initial render {call}
appRender();

// App Functionality
Counter().init();
Theme().inif();