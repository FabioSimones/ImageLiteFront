import { error } from 'console';
import {AccessToken, Credentials, UserSessionToken, User} from './user.resource'

class AuthService{
    baseURL: string = 'https://localhost:8080/v1/users';
    static Auth_Param: string = "_auth";

    async authenticate(credentials : Credentials) : Promise<AccessToken>{
        const response = await fetch(this.baseURL + "/auth", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(response.status == 401){
            throw new Error("User or password are incorrent!")
        }

        return await response.json();
    }
}

export const userAuth = () => new AuthService();