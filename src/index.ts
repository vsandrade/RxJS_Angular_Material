import { fromEvent, Observable } from "rxjs";
import { delay, map, filter, switchMap } from "rxjs/operators";

interface IMovie {
  title: string;
}

let button = document.getElementById('button');
let output = document.getElementById('output');

let click = fromEvent(button, 'click');

function load(url: string): Observable<any> {
    return new Observable((subscriber) => {
        let xhr = new XMLHttpRequest();
        output.innerHTML = '';
        
        xhr.addEventListener('load', () => {
            let data = JSON.parse(xhr.responseText);
            subscriber.next(data);
            subscriber.complete();
        });

        xhr.open('GET', url);
        xhr.send();
    });
}

function renderMovie(movies: IMovie[]) {
    movies.forEach((movie: IMovie) => {
        let div = document.createElement('div');
        div.innerText = movie.title;
        output.appendChild(div);
    });
}

click.pipe(
  switchMap(() => load('../movies.json'))
).subscribe({
    next: renderMovie,
    error: (e: Error) => console.log(e),
    complete: () => console.log(),
});