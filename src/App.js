import './App.css';
import AdminPage from './Components/AdminPage';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Sign_up from './Components/Sign_up';
import Login from './Components/Login';
import UserPage from './Components/UserPage';
import Admin_Login from './Components/Admin_login'

function App() {
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Sign_up} />
        <Route path='/login' exact Component={Login} />
        <Route path='/admin' exact Component={AdminPage} />
        <Route path='/users_portal' exact Component={UserPage} />
        <Route path='/admin_login' exact Component={Admin_Login} />
      </Routes >
      </BrowserRouter>
    
    </>
  );
}

export default App;
