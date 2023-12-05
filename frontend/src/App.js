import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import LoginForm from './users/LoginForm'
import CurrentUserProvider from './contexts/CurrentUser'

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <Route path="/" component={Error404} />
        </Routes>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;