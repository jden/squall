# squall
cluster boilerplate

## usage
```js
var squall = require('squall')

squall({
  init: function () { console.log('init') },
  worker: function () {
    console.log('hi', process.pid);
    setTimeout(process.exit, 1000)
  },
  end: function () { console.log('end') }
})
```


## api

```jsig
sqaull : (config : Config) => void`

Config : {
  worker: Function,
  init?: Function,
  leader?: Function,
  logger?: { log: Function, warn: Function, error: Function},
  end?: Function
}
```

At minimum, just declare a `worker` function to be executed. Example:

```js
require('squall')({
  worker: function () {
    console.log('hi from ', process.pid)
  }
})
```

### `Config.init`
Optional. A function to be called in the main process before starting
and workers.

### `Config.leader`
Optional. A function to control worker lifecycles. See Leader Strategies.
Defaults to squall.maxCpusStrategy.

### `Config.logger`
Optional. Defaults to `console`.

### `Config.end`
Optional. A function to be called after all workers have exited.


## leader strategies

Strategies control worker lifecycles - when they're launched, how many there
are, and how errors are handled.

### squall.maxCpusStrategy (default)
Starts as many workers as there are CPU cores.

### squall.maxCpusRestartStrategy
Starts as many workers as there are CPU cores. If workers die, attempts to
restart them as long as main process is running.


## installation

    $ npm install squall


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license

ISC. (c) MMXV jden <jason@denizac.org>. See LICENSE.md
