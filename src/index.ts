import { UpdatableReference } from 'glimmer-object-reference';
import { TestEnvironment, TestDynamicScope } from 'glimmer-test-helpers';

let env = new TestEnvironment();

env.registerEmberishGlimmerComponent(
  'hello-world',
  null,
  `<h1>Hello my name is {{@name}}</h1>`
 );

let app = env.compile(`
  <div>
    <hello-world @name={{name}} />
  </div>
`);

let basicRef;
let result;

export default function init() {
  let output = document.getElementById('output');
  env.begin();

  basicRef = new UpdatableReference({
    name: 'THIS IS A STANDALONE GLIMMER COMPONENT'
  });

  result = app.render(basicRef, output, new TestDynamicScope());

  env.commit();
}
