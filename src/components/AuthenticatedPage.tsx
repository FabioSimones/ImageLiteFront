import Login from '@/app/login/page';
import {userAuth} from '@/resources'

interface AuthenticatedPageProps{
    children: React.ReactNode
}

export const AuthenticatedPage: React.FC<AuthenticatedPageProps> = ({
    children
}) => {

    const auth = userAuth();
    if(!auth.isSessionValid()){
        return <Login/>
    }

    return(
        <>
            {children}
        </>
    )
}