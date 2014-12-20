export function fromArray(list) {
  return Lazy(function*() {

    for (let i = 0; i < list.length; i++) {
      yield list[i];
    }

  }());
}

export function random() {
  return Lazy(function*() {

    for (;;) {
      yield Math.random();
    }

  }());
}

export function range(start, end = null) {
  return Lazy(function*() {

    for (let i = start; i <= end || end === null; i++) {
      yield i;
    }

  }());
}

export function repeat(a) {
  return Lazy(function*() {

    for(;;) {
      yield a;
    }

  }());
}

export function Lazy(gen) {
  return {
    take: function(n) {
      return Lazy(function*() {

        let i = 1;
        for (let it of gen) {
          yield it;
          if (++i >= n) {
            break;
          }
        }

      }());
    },

    map: function(f) {
      return Lazy(function*() {

        for (let it of gen) {
          yield f(it);
        }

      }());
    },

    toArray: function() {
      var a = [];
      for (let it of gen) {
        a.push(it);
      }
      return a;
    },

    toString: function() {
      var a = [];
      for (let it of gen) {
        a.push(it);
      }
      return a.join('');
    },
  };
}
