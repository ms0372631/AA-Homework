function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping5() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    let x = 'out of block again';
    console.log(x);
}

function madLib(verb, adjective, noun) {
    let string = "We shall" + verb.toUpperCase() + "the" + adjective.toUpperCase() + noun.toUpperCase()
    console.log(string)
}

function isSubstring(searchString, subString) {
   return searchString.includes(subString)
}

function FizzBuzz(array) {
    const fizzBuzzArr = [];
    array.forEach(el => {
        if ((el % 3 == 0) ^ (el % 5 == 0)) {
            fizzBuzzArr.push(el);
        }
    });
    return fizzBuzzArr;
}

function isPrime(n) {
    if (n < 2) { return false; }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function sumofPrimes(n) {
    let sum = 0;
    let countPrimes = 0;
    let i = 2;
     
    while (countPrimes < 2) {
        if (isPrime(i)) {
            sum += 1;
            countPrimes++;
        }
        i++;
    }
    return sum;
}