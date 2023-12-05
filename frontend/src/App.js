import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import LoginForm from './users/LoginForm'
import CurrentUserProvider from './contexts/CurrentUser'

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <Route path="/" component={Error404} />
        </Switch>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;