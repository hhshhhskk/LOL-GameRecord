import { useLocation } from "react-router";

function Search() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    searchParams.get("keyword");
    return null;

}
export default Search;