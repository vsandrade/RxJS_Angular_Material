import { EMPTY, fromEvent, Observable, of, throwError } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";

interface IMovie {
  id: number;
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
            if (xhr.status == 200) {
                let data = JSON.parse(xhr.responseText) as IMovie[];
                data.forEach((movie: IMovie) => {
                    subscriber.next(movie);
                });
                subscriber.complete();
            } else {
                subscriber.error(xhr.statusText);
            }
        });

        xhr.open('GET', url);
        xhr.send();
    })
}

function renderMovie(movie: IMovie) {
    let div = document.createElement('div');
    div.innerText = movie.title;
    output.appendChild(div);
}

click.pipe(
  mergeMap(() => load('../movies.json').pipe(
    map((movie: IMovie) => {
        if (movie.id === 3)
            throw 'O id 3 É maligno';
        return movie;
    }),
    catchError((err: Error) => {
        // return of({id: 25, title: 'Matrix'})
        // throw new Error(`${err}`)
        return throwError(() => `${err}`)
        // return EMPTY;
    })
))
).subscribe({
    next: renderMovie,
    error: (e: Error) => console.log(`Error: ${e}`),
    complete: () => console.log('Complete'),
});