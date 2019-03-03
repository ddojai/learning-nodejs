const operator = require('../src/operator');
const sum = operator.sum;

describe('operator.js Test', () => {
    describe('sum 함수 테스트', () => {
        before(() => {
            console.log('before')
        });
        beforeEach(() => {
            console.log('beforeEach')
        });
        it ('10 + 20 = 30', done => {
            const result = sum(10, 20);
            if (result === 30) {
                done();
            } else {
                throw Error('결과 값이 30이 아니다');
            }
        });
        after(() => {
            console.log('after')
        });
        afterEach(() => {
            console.log('afterEach')
        });
    })
});
