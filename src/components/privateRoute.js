import {useAuth} from '../context/AuthContext';
// import {Route } from 'react-router-dom'
export default function PrivateRoute({children}) {
  const {currentUser} = useAuth();
    return (
        currentUser ? children : <h1>404! Not Found</h1>
  )
}
