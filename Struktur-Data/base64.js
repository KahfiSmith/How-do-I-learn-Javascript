const original = 'kahfi el smith'

const encoded = btoa(original)
console.log(encoded)

const decoded = atob(encoded)
console.log(decoded)