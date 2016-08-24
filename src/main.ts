import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}
let test2 = 'test';
console.log(test2);
showHello("greeting", "TypeScript");