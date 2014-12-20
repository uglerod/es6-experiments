import {random, fromArray, range, repeat, Lazy} from './lazy';

export function main() {

  var r = random()
    .map((it) => it * 10)
    .map((it) => it + 1)
    .map(Math.floor)
    .take(10)
    .toArray();
  console.log(r);
  // console.log(r.next().value);
  // console.log(r.next().value);
  // console.log(r.next().value);

}