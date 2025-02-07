import { fixture, Selector, test } from "testcafe";


fixture`A set of tests for our Siteoly site`
  .page`https://id24test5.siteoly.com/`;

const elementSelector = Selector('#subscribe-form') //# for searching via ID
const emailForm = elementSelector.find('#email');
const submitForm = emailForm.find('#submit');

//Tests
test(`select an element`, async t => {
    await t.typeText(emailForm, 'karl.l.hmg@gmail.com');
    await t.click(emailForm); 
  })