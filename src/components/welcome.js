import Inferno from 'inferno'

export let Welcome = () => 
  <div>
    <h1>Welcome to Inferno Mobx ReMux Starter</h1>
    <h3>The boilerplate give you a minimum example to use Inferno with Mobx with the ES6 syntax</h3>
    <h3>Also, you have the minimum implementation of the 'ReMux' flux pattern</h3>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;ReMux stand for : <strong>Re</strong>solver <strong>M</strong>obx Fl<strong>ux</strong> pattern</div>
    <h4>With 'ReMux' you have a very simple way to implement the following pattern</h4>
    <h3>&nbsp;&nbsp;&nbsp;&nbsp;component => action => resolver => store => component</h3>
    <ul>
      <li>components receive a store as props (the state of the component)</li>
      <li>components use the store in read only mode</li>
      <li>components dispatch actions to apply modifications to the store (the state)</li>
      <li>resolvers resolve actions and call stores</li>
      <li>stores are observable with the Mobx @observable decorator</li>
      <li>Mobx refresh the components with the @observer decorator</li>
      <li>resolvers could be also middlewares to do something with the action before/after calling the stores</li>
      <li>TRY IT, IT'S VERY SIMPLE THIS WAY</li>
      <li></li>
      <li>For a more complete example see: https://github.com/vinej/react-portal</li>
    </ul>

    <h3>Use the 'Todos' link from the header to test the todos example</h3>
    <h3>Happy coding</h3>
  </div>