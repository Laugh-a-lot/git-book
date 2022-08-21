import { createContext, useState } from "react";

const initialState = {
    //Authenctication
    userName: "",
    isLoggedIn: false,

    //Snackbar
    refresh: false,
    openSnackbar: false,
    snackbarMessage: "",
    snackbarType: "",
    snackbarDuration: 5000,
};
type Props = {
    children: React.ReactNode;
};

interface ProviderState {
    userName: string;
    isLoggedIn: boolean;

    refresh: boolean;
    openSnackbar: boolean;
    snackbarMessage: string;
    snackbarType: string;
    snackbarDuration: number;
}

interface UpdateStateArg {
    key: keyof ProviderState;
    value: string | boolean;
}

interface ProviderStore {
    state: ProviderState;
    loginUser: Function;
    logoutUser: Function;
    update: (arg: UpdateStateArg) => void;
    showSnackbar: Function;
    closeSnackbar: Function;
}

export const MyCtx = createContext({} as ProviderStore);

export function Provider({ children }: Props) {
    const [state, setState] = useState(initialState);
    const loginUser = (userName: string) => {
        setState({ ...state, userName, isLoggedIn: true });
    };
    const logoutUser = () => {
        setState({ ...state, userName: "", isLoggedIn: false });
    };
    const showSnackbar = (snackbarType: string, snackbarMessage: string, snackbarDuration: number = 5000) => {
        setState({
            ...state,
            openSnackbar: true,
            snackbarType,
            snackbarMessage,
            snackbarDuration,
            refresh: state.openSnackbar ? !state.refresh : state.refresh,
        });
    };
    const closeSnackbar = () => {
        setState({ ...state, openSnackbar: false, snackbarType: "", snackbarMessage: "" });
    };
    const update = ({ key, value }: UpdateStateArg) => {
        setState({ ...state, [key]: value });
    };
    return (
        <MyCtx.Provider value={{ state, update, showSnackbar, closeSnackbar, loginUser, logoutUser }}>{children}</MyCtx.Provider>
    );
}
