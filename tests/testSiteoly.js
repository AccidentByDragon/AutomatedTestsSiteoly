import { fixture, Selector, test } from "testcafe";


fixture`A set of tests for our Siteoly site`
  .page`https://id24test5.siteoly.com/`;

const subscribeSelector = Selector('#subscribe-form') //# for searching via ID
const emailForm = subscribeSelector.find('#email');
const submitForm = emailForm.find('#submit');

test(`select and fill in Email`, async t => {
    await t.typeText(emailForm, 'karl.l.hmg@gmail.com');
    await t.click(emailForm); //We want to click the sumbit button here but can't find the right element/ID
  })