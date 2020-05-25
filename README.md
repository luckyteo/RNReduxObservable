## Redux-saga effect
- Fork: perform a non-blocking operation on the function passed to it.
- Take: pause until action is received
- Race: run multiple effects simultaneously, then cancel all if one of them ends.
- Call: call function. If it returns a promise, pause the saga until the promise is resolved.
- Put: dispatch an action.
- Select: run a function selector to get data from state.
- takeLatest: means that if we perform a series of actions, it will only execute and return the result of the last action.
- takeEvery: executes and returns the result of every action called.