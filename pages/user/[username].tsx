import React from "react";
import UserProfileDetails from "../../src/components/homepage/UserProfileDetails";
import UserRepositories from "../../src/components/homepage/UserRepositories";
import Pagination from "../../src/components/homepage/Pagination";
import Fetcher from "../../src/utils/Fetcher";
import { GetServerSideProps } from "next";

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
    repoDetails: {
        data: { id: number; name: string; description: string; topics: Array<string> }[];
    };
};

const userDetails = ({ profileDetails, repoDetails }: Props) => {
    console.log(profileDetails, repoDetails);
    return (
        <>
            <UserProfileDetails profileDetails={profileDetails} />
            <UserRepositories repoDetails={repoDetails} public_repos />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const profileDetails = await Fetcher(`users/${context?.params?.username}`);
    const repoDetails = await Fetcher(`users/${context?.params?.username}/repos`, "GET", { per_page: 6 });
    return {
        props: { profileDetails, repoDetails }, // will be passed to the page component as props
    };
};
export default userDetails;
