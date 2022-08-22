import React, { useState, useContext } from "react";
import Pagination from "../homepage/Pagination";
import RepoCard from "./RepoCard";
import styles from "../../../styles/UserRepositoriesStyles.module.css";
import Fetcher from "../../utils/Fetcher";
import { MyCtx } from "../../contexts";

type Props = {
    repoList: {
        id: number;
        name: string;
        description: string;
        topics: Array<string>;
    }[];
};

function UsersRepositories({ repoList }: Props) {
    return (
        <div className={styles.container}>
            {repoList?.map((repo) => (
                <RepoCard data={repo} />
            ))}
        </div>
    );
}

export default UsersRepositories;
