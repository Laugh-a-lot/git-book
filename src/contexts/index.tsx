import { createContext } from "react";

interface AuthContextInterface {
    userName: string,
    isLoggedIn: boolean
}

export const AuthCtx = createContext<AuthContextInterface | null>({userName:"", isLoggedIn: false});
