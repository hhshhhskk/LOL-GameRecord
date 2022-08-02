import { useQuery } from "react-query";
import { useLocation } from "react-router";
import { getSummonerId } from "../api";

function Search() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const Sname = searchParams.get("keyword");
    const { data, isLoading } = useQuery(["lol", "summoner", "v4", "summoners", "by-name"], getSummonerId);
    console.log(data, isLoading);
    return (
        <>
            <h2>{Sname}</h2>
        </>
    )

}
export default Search;