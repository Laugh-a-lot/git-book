import React, { useState, useContext } from "react";
import Pagination from "../homepage/Pagination";
import RepoCard from "./RepoCard";
import styles from "../../../styles/UserRepositoriesStyles.module.css";
import Fetcher from "../../utils/Fetcher";
import { MyCtx } from "../../contexts";

type Props = {
    repoDetails: {
        data: {
            id: number;
            name: string;
            description: string;
            topics: Array<string>;
        }[];
    };
};

function UsersRepositories({ repoDetails }: Props) {
    const [reposList, setRepoList] = useState(repoDetails.data);
    const { state } = useContext(MyCtx);
    const handlePageChange = async (pageNumber: Number) => {
        const repoDetails = await Fetcher(`users/${state?.userName}/repos`, "GET", { per_page: 6, pageNumber });
        setRepoList(repoDetails?.data);
    };
    return (
        <div className={styles.container}>
            {reposList?.map((repo) => (
                <RepoCard data={repo} />
            ))}
        <Pagination handlePageChange={handlePageChange}  />
        </div>
    );
}

export default UsersRepositories;
