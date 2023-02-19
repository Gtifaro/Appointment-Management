import React from "react";
import { Header } from "./components/header/Header";
import "./assets/styles/styles.scss";

export const App = () => {
    return (
        <React.Fragment>
            <div className="App">
                <Header/>
            </div>
        </React.Fragment>
    )
}