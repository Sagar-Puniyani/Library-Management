import { LoginForm } from "../../features/auth/components/LoginForm/LoginForm"
import { useSelector } from "react-redux";
import { RootState } from "../../redux/ReduxStore";
// import { User } from "../../models/user"




export default function HomePage() : JSX.Element{

    const displayLogin = useSelector((state : RootState) => state.modal.displayLogin);

    return (
        <div className="Page" >
           Home Page
           Text 1 of Home Page 
           {displayLogin ? <LoginForm/> : <></>}
        </div>
    )
}