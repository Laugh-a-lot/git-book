import React from "react";
import RepoCard from "./RepoCard";
import styles from "../../../styles/UserRepositoriesStyles.module.css";

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
            {repoList?.map((repo, idx) => (
                <RepoCard data={repo} key={idx} />
            ))}
        </div>
    );
}

export default UsersRepositories;
