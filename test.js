const lookup = require('./index');

const hash = {
  option1: (arg1, arg2) => {
    console.log('arg1', arg1);
    console.log('arg2', arg2);
    console.log('option 1');
  },
  option2: () => console.log('option 2'),
  option3: () => console.log('strings work too!'),
  default: () => 'Default value'
};

const action = lookup(hash);

action('option1', ['arg1 text', 'arg2 text']);
action('option2');
action('option3');

const defaultResults = action();

console.log(defaultResults);
