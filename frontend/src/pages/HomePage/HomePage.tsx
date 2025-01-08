interface HomePageProps {
    displayLogin : boolean
}


export default function HomePage(props : HomePageProps) : JSX.Element{
    return (
        <div className="Page" >
           Home Page
           {props.displayLogin ? <p> Login Form </p> : <p> Register Form </p>}
        </div>
    )
}