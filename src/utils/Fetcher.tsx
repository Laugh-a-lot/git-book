import { Octokit } from "octokit";
const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN,
});

const Fetcher = async (path: string, method: string = "GET", configs: object = {}) => {
    try {
        const response = await octokit.request(`${method} /${path}`, { ...configs });
        const { status, data } = response;
        return { data, status };
    } catch (err) {
        console.error(err);
        let data = {};
        let status = 404;
        return { data, status };
    }
};

export default Fetcher;
