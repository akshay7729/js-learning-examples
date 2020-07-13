const isGreater = (a,b) => {
    return new Promise((resolve, reject) => {
        a > b ? resolve(true) : reject(false)
    })
}

isGreater(1,2)
.then(result => console.log('greater'))
.catch(error => console.log('smaller'))