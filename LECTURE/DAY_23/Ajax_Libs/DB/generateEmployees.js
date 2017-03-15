

// 개발에 필요한 부품을 가져온다.
var faker = require('faker');

// 랜덤 데이터를 통해 JSON 포멧을 만들어
// json-server에 제공한다.

var total = 20;
var employees = [];

// 모듈 정의
function generateEmployees () {
    for ( var i=1; i<=total; ++i) {
        employees.push({
            id: i,
            name: faker.internet.userName(),
            email: faker.internet.email(),
            company: faker.company.companyName()
        });
    }
    return {
        'info': {
            'version': '0.0.1',
            'author': 'junehaaaa@gmail.com'
        },
        'employees': employees
    };
}

// 현재 독립된 공간에서 해당 모듈을 내보낸다.
module.exports = generateEmployees;