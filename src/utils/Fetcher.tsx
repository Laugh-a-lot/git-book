import { Octokit } from "octokit";
const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN,
});

const Fetcher = async (path: string, method: string = "GET", configs: object = {}) => {
    const response = await octokit.request(`${method} /${path}`, {...configs});
    const { status, data } = response;
    return { data, status };
};

export default Fetcher;
