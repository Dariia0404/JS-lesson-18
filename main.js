function sumArrayPromise(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let sum = numbers.reduce((acc, num) => acc + num, 0);
            resolve(sum);
        }, 3000);
    });
}

sumArrayPromise([1, 2, 3, 4, 5]).then(console.log);




/*
async function concurrentPromises(promises, maxConcurrent) {
    let results = [];
    let executing = [];

    for (let promise of promises) {
        let prom = Promise.resolve().then(() => promise);
        results.push(prom);

        if (maxConcurrent <= promises.length) {
            let e = prom.then(() => executing.splice(executing.indexOf(e)));
            executing.push(e);
            if (executing.length >= maxConcurrent) {
                await Promise.race(executing);
            }
        }
    }

    return Promise.all(results);
}

concurrentPromises([
	new Promise(resolve => setTimeout(() => resolve('Promise 1'), 1000)),
	new Promise(resolve => setTimeout(() => resolve('Promise 2'), 500)),
	new Promise(resolve => setTimeout(() =>resolve('Promise 3'), 800))
], 2).then(console.log);
*/


/*
async function sequenceAsync(asyncFunctions) {
    let result;
    for (let func of asyncFunctions) {
        result = await func(result);
    }
    return result;
}

let asyncFunctions = [
    async (prevResult) => {
        console.log('Проміс 1, попередній результат:', prevResult, 0);
        return new Promise(resolve => setTimeout(() => resolve(1), 1000));
    },
    async (prevResult) => {
        console.log('Проміс 2, попередній результат:', prevResult);
        return new Promise(resolve => setTimeout(() => resolve(prevResult + 2), 1000));
    },
    async (prevResult) => {
        console.log('Проміс 3, попередній результат:', prevResult);
        return new Promise(resolve => setTimeout(() => resolve(prevResult + 3), 1000));
    }
];

sequenceAsync(asyncFunctions).then((finalResult) => {
    console.log('Кінцевий результат:', finalResult); 
});
*/