import {Redirect} from 'react-router-dom';

const GuestGuard = ({children}) => {
    // if authentication verification is required
    // if (isAuth) {
    //   return <Redirect to="/" />;
    // }
    return (
        <>
            {children}
        </>
    );
};

export default GuestGuard;
