import React from "react";
import styles from "../../../styles/UserRepositoriesStyles.module.css";

type Props = {
    data: {
        id: number;
        name: string;
        description: string;
        topics: Array<string>;
    };
};

function RepoCard({ data }: Props) {
    return (
        <div className={styles.card} key={data.id}>
            <h3>{data.name}</h3>
            <p>{data.description}</p>
            <div>
                {data.topics?.map((topic) => (
                    <span className={styles.chip}>{topic}</span>
                ))}
            </div>
        </div>
    );
}

export default RepoCard;
