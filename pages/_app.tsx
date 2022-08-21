import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import PrivateRoute from "../src/components/PrivateRoute";
import { Provider } from "../src/contexts";
import Snackbar from "../src/utils/Snackbar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider>
            <PrivateRoute>
                <Snackbar />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PrivateRoute>
        </Provider>
    );
}

export default MyApp;
