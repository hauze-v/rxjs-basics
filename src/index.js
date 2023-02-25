import { from, of, fromEvent, interval } from 'rxjs';
import { map, pluck, filter, reduce, take, scan, tap } from 'rxjs/operators'

const observable = interval(500).pipe(
  take(5),
  tap({
    next(val) {
      console.log(val);
    }
  }),
  reduce(
    (accumulator, value) => accumulator + value,
    0
  )
)

// Value is the data emitted by observable. Subscribe takes in an Observer obj and must implement next function
const subscription = observable.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('complete');
  }
});