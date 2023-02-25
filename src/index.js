import { from, of, fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap, concatMap, pluck, filter, reduce, take, scan, exhaustMap, tap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax';

const button = document.querySelector('#btn');
const observable = fromEvent(
  button, 'click' 
).pipe(
  exhaustMap(() => {
    return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(
      take(5),
      tap({
        complete() {
          console.log('inner observable completed');
        }
      }),
    )
  })
)

// Value is the data emitted by observable. Subscribe takes in an Observer obj and must implement next function
const subscription = observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log('complete');
  }
});