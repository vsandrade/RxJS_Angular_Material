import { from } from "rxjs";

let numbers = [1,5,10];
let source = from(numbers);

class myObserver {
  next(x: number) {
    console.log(x)
  }
  error(e: Error) {
    console.log(e)
  }
  complete() {
    console.log('Complete')
  }
}

const myObserverJson = {
  next: (x: number) => console.log(x),
  error: (e: Error) => console.log(e),
  complete: () => console.log('Complete'),
}

function component() {
  source.subscribe(new myObserver)
}

component()