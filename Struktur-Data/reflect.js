const person =  {}

Reflect.set(person, 'firstname', 'kahfi')
Reflect.set(person, 'lastname', 'smith')

console.log(person)

console.log(Reflect.get(person, 'firstname'))
console.log(Reflect.get(person, 'lastname'))

console.log(Reflect.has(person, 'firstname'))
console.log(Reflect.has(person, 'middlename'))
console.log(Reflect.has(person, 'latname'))

