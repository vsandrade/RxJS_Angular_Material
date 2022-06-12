import { from } from "rxjs";

let numbers = [1,5,10];
let source = from(numbers);

function component() {
  source.subscribe({
    next: (x) => console.log(x)
  })
}

component()