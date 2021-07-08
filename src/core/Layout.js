import React from "react";
import Menu from "./Menu";
import "../styles.css";

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
        <Menu />
        <div className="jumbotron ">
            <h2 className="p-4">{title}</h2>
            <p className="lead m-3">{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;
