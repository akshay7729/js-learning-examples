const a = [1,2,3]

const b = [...a, 4];

console.log(b)

const obj1 = {
    x:1,
    y:2
}

const obj2 = {...obj1, z:3}

console.log(obj2)

const obj3 = {...a, s:4}

console.log(obj3)

const c = [...obj1]

console.log(c)