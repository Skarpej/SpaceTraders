import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import UserCard from "../components/UserCard/UserCard";
import { getUser, getUserCord, getContracts } from "../lib/account/getUser";
import Nav from "../components/Nav/Nav";
import Contracts from "../components/Contracts/Contracts";

export const meta = () => {
    return [
        { title: "Spicy Traders" },
        { name: "description", content: "Welcome to Spicy Traders!" },
    ];
};

export const loader = async ({ request }) => {
    const token = process.env.TOKEN;
    const { pathname } = new URL(request.url)
    const rootData = await getUser(token);
    const {data: { headquarters }} = rootData;
    const userCord = await getUserCord(token, headquarters.match(/..-..../), headquarters);
    const contracts = await getContracts(token)
    return json({pathname, rootData, userCord, contracts});
}

export default function Index() {
    const {contracts, pathname, rootData: {data: { symbol, headquarters, credits, startingFaction}}} = useLoaderData();
    let ConditionalComponent;

    const sharedProps = { symbol, headquarters, credits, startingFaction };

    switch (pathname) {
        case "/dashboard":
            ConditionalComponent = () => <Dashboard {...sharedProps} />;
            break;
        case "/contracts":
            ConditionalComponent = () => <Contracts contracts={contracts} />;
            break;
        case "/marketplaces":
            ConditionalComponent = () => <Marketplaces {...sharedProps} />;
            break;
        default:
            ConditionalComponent = () => <UserCard {...sharedProps} />;
            break;
    }

    return (
        <div className="">
            <Nav />
            <ConditionalComponent />
        </div>
    );
}

