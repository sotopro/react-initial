import React from "react";
import Spinner from "./spinner";
import "./styles.css";

const Loader = () => {
    return (
        <div className="loader-container">
            <Spinner />
        </div>
    )
}

export default Loader;