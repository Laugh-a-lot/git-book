import React from "react";
import styles from "../../../styles/UserProfileStyles.module.css";
import Image from "next/image";
import { GoLocation } from "react-icons/go";
import { BsLink } from "react-icons/bs";

type Props = {
    profileDetails: {
        data: {
            avatar_url: string;
            name: string;
            bio: string;
            location: string;
            twitter_username: string;
            html_url: string;
        };
    };
};

function UserProfileDetails({ profileDetails }: Props) {
    const { data } = profileDetails;
    return (
        <div className={styles.container}>
            <Image
                src={data.avatar_url}
                height={200}
                width={200}
                className={styles.avatar}
                alt={data.name + "'s github profile picture"}
            />
            <div className={styles.details}>
                <h3>{data.name}</h3>
                <p>{data.bio}</p>
                {data.location && (
                    <p>
                        <GoLocation />
                        {data.location}
                    </p>
                )}
                {data.twitter_username && (
                    <p>
                        Twitter:
                        <a href={"https://twitter.com/" + data.twitter_username} target="_blank">
                            https://twitter.com/{data.twitter_username}
                        </a>
                    </p>
                )}
            </div>
            <a href={data.html_url} className={styles.link}>
                <BsLink /> {data.html_url}{" "}
            </a>
        </div>
    );
}

export default UserProfileDetails;