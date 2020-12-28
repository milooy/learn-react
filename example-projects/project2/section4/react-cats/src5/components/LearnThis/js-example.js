/**
 * this란?
 * 부모를 가리킨다. 단, 그 부모는 내 현재 상황에 따라 바뀐다
 */

/** 1. 제일 바깥에서의 this */
console.log(this); // {} (= 브라우저라면 Window)

/** 2. 객체 내부에서 this 부르기 */
var author = {
  name: "yurim",
  sayHi: function () {
    return this.name;
  },
};
// console.log(author.sayHi()); // yurim (this는 author)

// /** 3. 객체 내부가 아닌 곳에서 this 부르기 */
var sayHiToAuthorFail = author.sayHi; // 변수에 저장
// 변수에 저장된 함수를 밖에서 호출
console.log(sayHiToAuthorFail()); // undefined (this는 {}})

// /** 4. 변수 저장 시점에 원하는 상황(this)고정 */
var sayHiToAuthorSuccess = author.sayHi.bind(author);
console.log(sayHiToAuthorSuccess()); // yurim
