import { fixture, Selector, test } from "testcafe";


fixture`A set of tests for our Siteoly site`
  .page`https://id24test5.siteoly.com/`;


//Variables for Body card selector tests
  const bodyCardSelector = Selector('#bodyCards');
  const seoButton = Selector('.Span').find('Seo');
  //const seoButton = bodyCardSelector.filter('span');
//Variables for Email form test
  const subscribeSelector = Selector('#subscribe-form') //# for searching via ID
  const emailForm = subscribeSelector.find('#email');
  const submitForm = subscribeSelector.find('button').withText('Subscribe Now');
  //const submitForm = Selector('button').withText('Subscribe Now'); //ChatGPT has suggested this for elements without id, doesn't work

//Tests
test(`try and locate and click the body card buttons`, async t => {
  await t.click(seoButton); //its hard to trouble shoot this test as the element we want doesn't have a ID we can easily grab
});

test(`select and fill in Email`, async t => {
    await t.typeText(emailForm, 'karl.l.hmg@gmail.com');
    //await t.expect(emailForm.innerText).contains('karl.l.hmg@gmail.com'); // this finds the button which we couldn't find before
    await t.click(submitForm); //Again we want to click the sumbit button here but can't find the right element/ID
  })