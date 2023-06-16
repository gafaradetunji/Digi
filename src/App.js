import Navbar from './components/navbar'
import Home from './components/home'
// import Nav2 from './components/nav2'
import Electrical from './components/electrical'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './scss/app.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '',
          element: <Home />
        },
        {
          path: '/eletrical',
          element: <Electrical />
        }
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
