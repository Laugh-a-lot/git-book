import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/snackbarStyles.module.css";
import { MdClose } from "react-icons/md";
import { MyCtx } from "../contexts";

const Snackbar = () => {
    const { state, closeSnackbar } = useContext(MyCtx);
    var timeout = setTimeout(() => {
        closeSnackbar();
    }, state.snackbarDuration);
    
    useEffect(() => {
        if (state.openSnackbar === true) {
            clearTimeout(timeout);
        }
    }, [state.openSnackbar]);

    return state?.openSnackbar ? (
        <div
            className={styles.box}
            style={{ background: { error: "#cf6679", success: "green", info: "blue" }[state?.snackbarType] }}
        >
            <p className={styles.text}>{state?.snackbarMessage}</p>
            <button onClick={() => closeSnackbar()} className={styles.close}>
                <MdClose style={{ height: 24, width: 24 }} />
            </button>
        </div>
    ) : (
        <></>
    );
};

export default Snackbar;
