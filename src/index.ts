import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";

let numbers = [1,5,10,15,20,25,30];

let source = new Observable(subscriber => {
  let index = 0;
  let produceValue = () => {
    subscriber.next(numbers[index++])
    if (index < numbers.length) {
      setTimeout(produceValue, 500);
    } else {
      subscriber.complete();
    }
  }

  produceValue();
})

source.pipe(
  map((n: number) => n * 2)
).subscribe({
  next: (x: number) => { 
    console.log(x) 
  },
  error: (e: Error) => console.log(e),
  complete: () => console.log('Complete'),
});

source.pipe(
  filter((n: number) => n > 5)
).subscribe({
  next: (x: number) => { 
    console.log(`filter: ${x}`) 
  },
  error: (e: Error) => console.log(e),
  complete: () => console.log('Complete'),
});