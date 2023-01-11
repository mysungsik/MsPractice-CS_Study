function* generatorFn() {
  // * 을 붙이는 것을 잊지 말자.
  console.log("안녕");
  console.log("하이");
  yield 1;
  console.log("명식");
  yield 0;
}

const generator = generatorFn();

generator.next();
generator.next();
