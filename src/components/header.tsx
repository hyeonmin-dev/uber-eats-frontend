import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useMe } from "../pages/hooks/useMe";



export const Header: React.FC = () => {
    const { data } = useMe();

    return (
        <>
            {!data?.me.verified && (
                <div className="bg-slate-400 p-3 text-center text-xs text-white">
                    <span>Please verify your email.</span>
                </div>
            )}
            <header className="py-4">
                <div className="w-full px-5 xl:px-0 max-w-screen-xl mx-auto flex justify-between items-center">
                    <img src="https://www.ubereats.com/_static/8b969d35d373b512664b78f912f19abc.svg" className="w-24" alt="Nuber Eats" />
                    <span className="text-xs">
                        <Link to="/edit-profile">
                            <FontAwesomeIcon icon={faUser} className="text-xl" />
                        </Link>
                    </span>
                </div>
            </header>
        </>
    );
};