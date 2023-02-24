import React from "react";
import { assets } from "../../../constants";

export const AppLayout: React.FC = () => {
    return <div>
        <header className="App-header">
        <img src={assets.LogoPath} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
    </header>
    </div>
}