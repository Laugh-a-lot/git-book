import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/layoutStyles.module.css";

type Props = {
    children: React.ReactNode;
};
interface AuthContextInterface {
    userName: string;
    isLoggedIn: boolean;
}

const Layout = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default Layout;
