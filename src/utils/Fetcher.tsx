import React from "react";

const Fetcher = async (path: string, method: string = "GET", configs: object = {}) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_GITHUB_API + path}`, { method, ...configs })
        // .then((response) => { response.json(); return { data: response.body,status: response.status} })
        // .catch((err) => err.json());
    const data = await response.json();
    const { status } = response;
    return { data, status };
};

export default Fetcher;
