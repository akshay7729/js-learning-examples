function *inifiniteNumbers(){
    let n = 1;
    while (true){
        yield n++
    }
}

const numbers = inifiniteNumbers();

numbers.next();