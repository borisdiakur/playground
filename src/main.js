import './style.css'

/** @type {Record<string|symbol, unknown>} */
const innerState = {}
const state = new Proxy(innerState, {
  set(target, p, newValue) {
    target[p] = newValue
    render()
    return true
  },
})
state.message = 'Hi'

function render() {
  document.querySelector('#app').innerHTML = `
    <div class="container">
      <h1>${state.message}</h1>
    </div>
  `
}
