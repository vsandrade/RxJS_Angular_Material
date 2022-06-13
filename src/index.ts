import { from, Observable } from "rxjs";

let numbers = [1,5,10];
let source = from(numbers);


let sourceInstance = new Observable(subscriber => {
  for (let n of numbers) {
    if (n > 5) {
      subscriber.error('Aconteceu um erro esperado!');
    }

    subscriber.next(n);
    subscriber.complete();
  }
  subscriber.complete();
})


const myObserver = {
  next: (x: number) => { 
    console.log(x) 
  },
  error: (e: Error) => console.log(e),
  complete: () => console.log('Complete'),
}

function component() {
  source.subscribe(myObserver)

  sourceInstance.subscribe(myObserver)
}

component()