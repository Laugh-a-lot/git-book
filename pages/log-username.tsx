import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { MyCtx } from "../src/contexts";
import Fetcher from "../src/utils/Fetcher";
import styles from "../styles/logUsernameStyles.module.css";

const logUsername: NextPage = () => {
    const [userName, setUserName] = useState("");
    const router = useRouter();
    const { showSnackbar, loginUser } = useContext(MyCtx);
    const handleUserNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        setUserName(event.currentTarget.value);
    };
    const submitUserName = async () => {
        const { data, status } = await Fetcher(`users/${userName}`);
        if (status === 200) {
            localStorage.setItem("userName", userName);
            await loginUser(userName);
            router.push(`/user/${userName}`);
        } else {
            showSnackbar("error", data.message || "No user found with that username. Please try again.", 10000);
        }
        // console.log(state);
    };
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h1 style={{ margin: 0 }}>Github </h1>
                <h4>Please enter your github username to view github stats.</h4>
                <input
                    type="text"
                    className={styles.input}
                    value={userName}
                    onChange={handleUserNameChange}
                    placeholder="Username"
                />
                <button type="button" className={styles.submitBtn} onClick={submitUserName}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default logUsername;
