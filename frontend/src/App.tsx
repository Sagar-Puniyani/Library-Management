
import { useEffect } from 'react';
import './App.css'
import HomePage from './pages/HomePage/HomePage';
import { useSelector } from 'react-redux';
import { RootState } from './redux/ReduxStore';
// import { User } from './models/user';

function App() {

  // const [displayLogin , setDisplayLogin ] = useState<boolean>(true);
  // const [loggedInUser , setLoggedInUser ] = useState<User>();

  // const upadateLoggedInUser = (user : User) => {
  //   setLoggedInUser(user)
  // }

  const loggedInUser = useSelector((state : RootState) => state.authentication.loggedInUser);

  useEffect(()=>{
    console.log("loggedInUser : " , loggedInUser);
  }, [loggedInUser])

  return (
    <>
    <div>
      <HomePage   />
    </div>
    </>
  )
}

export default App
