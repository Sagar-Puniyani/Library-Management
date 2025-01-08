import { LoginForm } from "../../features/auth/components/LoginForm/LoginForm"
import { User } from "../../models/user"

interface HomePageProps {
    displayLogin : Boolean
}


export default function HomePage(props : HomePageProps) : JSX.Element{
    return (
        <div className="Page" >
           Home Page
           {props.displayLogin ? <LoginForm/> : <></>}
        </div>
    )
}