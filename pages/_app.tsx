import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import PrivateRoute from "../src/components/PrivateRoute";
import { MyCtx, Provider } from "../src/contexts";


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider>
            <PrivateRoute>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PrivateRoute>
        </Provider>
    );
}

export default MyApp;
