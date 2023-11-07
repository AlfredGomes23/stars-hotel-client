import { useContext } from "react";
import { MyContext } from "../providers/MyProvider";

const useMyContext = () => {
    const all = useContext(MyContext);
    return all;
};

export default useMyContext;