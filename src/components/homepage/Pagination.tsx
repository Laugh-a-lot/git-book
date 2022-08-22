import React, { useState } from "react";
import styles from "../../../styles/PaginationStyles.module.css";
type Props = {
    handlePageChange: (pageNumber: Number) => void;
    totalPages: number;
};

function Pagination({ handlePageChange, totalPages }: Props) {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className={styles.container}>
            {/* PREVIOUS PREVIOUS PAGE */}
            {currentPage - 2 > 0 && (
                <button
                    onClick={() => {
                        setCurrentPage(currentPage - 2);
                        handlePageChange(currentPage - 2);
                    }}
                    className={styles.btn}
                >
                    {currentPage - 2}
                </button>
            )}

            {/* PREVIOUS PAGE */}
            {currentPage - 1 > 0 && (
                <button
                    className={styles.btn}
                    onClick={() => {
                        setCurrentPage(currentPage - 1);
                        handlePageChange(currentPage - 1);
                    }}
                >
                    {currentPage - 1}
                </button>
            )}
            {/* ACTIVE PAGE */}
            <button className={styles.btn + " " + styles.activeBtn}>{currentPage}</button>

            {/* NEXT PAGE */}
            {currentPage + 1 <= totalPages && (
                <button
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                        handlePageChange(currentPage + 1);
                    }}
                    className={styles.btn}
                >
                    {currentPage + 1}
                </button>
            )}
            {/* NEXT NEXT PAGE */}
            {currentPage + 2 <= totalPages && (
                <button
                    onClick={() => {
                        setCurrentPage(currentPage + 2);
                        handlePageChange(currentPage + 2);
                    }}
                    className={styles.btn}
                >
                    {currentPage + 2}
                </button>
            )}

        <div style={{ flexBasis: "100%", display:"flex", justifyContent: "space-around" }}>
                <button>Older </button>
                <button>Newer</button>
            </div>
        </div>
    );
}

export default Pagination;
