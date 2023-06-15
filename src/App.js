import Navbar from './components/navbar'
import Home from './components/home'
import Nav2 from './components/nav2'
import Electrical from './components/electrical'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './scss/app.scss'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Nav2 />,
      children: [
        {
          path: '/home',
          element: <Electrical />
        },
        {
          path: '',
          element: <Home />
        },
      ] ,
    },
  ])

  return (
    <div className="">
    {/* <Router>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      </Switch>
    </Router> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
