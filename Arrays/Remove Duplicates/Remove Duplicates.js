var arr = [1,2,4,5,1,2,4];


var unique = arr
            .map((e, i, final) => final.indexOf(e) === i && e)
            .filter(e => e);

console.log(unique)