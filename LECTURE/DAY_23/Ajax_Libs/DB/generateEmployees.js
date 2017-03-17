<<<<<<< HEAD


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
=======
/*! generateEmployees.js © yamoo9.net, 2017 */

// 개발에 필요한 부품을 가지고 온다.
var faker = require('faker');

// faker API를 참고
// console.log(faker.internet.avatar());
// console.log(faker.internet.email());

// console.log({
//   name: faker.internet.userName(),
//   email: faker.internet.email(),
//   company: faker.company.companyName()
// });

// 랜덤 데이터를 통해 JSON 포멧을 만들어
// json-server 에 제공한다.

var total = 10;
var employees = [];

// 모듈 정의
function generateEmployees() {
  for ( var i=1; i<=total; ++i ) {
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
      'author': 'yamoo9@naver.com'
    },
    'employees': employees
  };
}

// 모듈 출력
module.exports = generateEmployees;
>>>>>>> f24105caa62396712ac0f413e42592f1a678216d
