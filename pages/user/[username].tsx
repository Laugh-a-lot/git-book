import React, { useState, useContext } from "react";
import UserProfileDetails from "../../src/components/homepage/UserProfileDetails";
import UserRepositories from "../../src/components/homepage/UserRepositories";
import Pagination from "../../src/components/homepage/Pagination";
import Fetcher from "../../src/utils/Fetcher";
import { GetServerSideProps } from "next";
import { MyCtx } from "../../src/contexts";

const totalReposPerPage = 10;

type Props = {
    profileDetails: {
        data: {
            avatar_url: string;
            name: string;
            bio: string;
            location: string;
            twitter_username: string;
            html_url: string;
            public_repos: number;
        };
    };
    repoDetails: {
        data: { id: number; name: string; description: string; topics: Array<string> }[];
    };
};

const userDetails = ({ profileDetails, repoDetails }: Props) => {
    const [reposList, setRepoList] = useState(repoDetails.data);
    const { state } = useContext(MyCtx);
    const handlePageChange = async (page: Number) => {
        const repoDetails = await Fetcher(`users/${state?.userName}/repos`, "GET", { per_page: totalReposPerPage, page });
        setRepoList(repoDetails?.data);
        console.log(repoDetails.data);
    };
    return (
        <>
            <UserProfileDetails profileDetails={profileDetails} />
            <UserRepositories repoList={reposList} />
            <Pagination
                handlePageChange={handlePageChange}
                totalPages={Math.ceil(profileDetails.data.public_repos / totalReposPerPage)}
            />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const profileDetails = await Fetcher(`users/${context?.params?.username}`);
    const repoDetails = await Fetcher(`users/${context?.params?.username}/repos`, "GET", { per_page: totalReposPerPage });
    return {
        props: { profileDetails, repoDetails }, // will be passed to the page component as props
    };
};
export default userDetails;
