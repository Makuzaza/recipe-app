import { useRouteError } from "react-router-dom";
import "../App.css";

export default function ErrorPage () {
    const error = useRouteError(); 
    return (
        <main>
        <h2 className="back">Ups, something went wrong</h2>
        <p>{error.statusText || error.message}</p>
        <p className="back"><a href='/'><div>TO HOME PAGE</div></a></p>
        </main>
    )
};
