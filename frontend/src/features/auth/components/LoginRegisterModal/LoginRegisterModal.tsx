import React, { useEffect } from "react";
import { Modal } from "../../../../components";
import './LoginRegisterModal.css'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/ReduxStore";
import { setDisplayLogin } from "../../../../redux/Slices/ModalSlices";
import { LoginForm } from "../LoginForm/LoginForm";


export const LoginRegisterModal: React.FC = () => {

    const authState = useSelector((state: RootState) => state.authentication);
    const dispatch : AppDispatch = useDispatch();

    const [login , setLogin ] = React.useState<boolean>(false);

    const closeModal = () => {
        dispatch(setDisplayLogin(false))
    }

    const toggleLogin = () => {
        setLogin(!login);
    }

    useEffect(() => {
        if ( authState.loggedInUser ) {
            closeModal();
        }

        return (() => {
            if (authState.loggedInUser){
                localStorage.setItem('userId' , authState.loggedInUser._id);
            }
        })
    }, [authState.loggedInUser])

    return (
        <Modal 
            toggleModal={() => {}} 
            content={login ? <LoginForm /> : <></>}
        />
    )
    
}