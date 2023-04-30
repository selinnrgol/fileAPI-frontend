import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/user" component={User} />
        <Route path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
