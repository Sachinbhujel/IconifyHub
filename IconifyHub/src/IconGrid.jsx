import React, { useState } from "react";
import "./App.css";
import IconOpen from "./IconOpen";

const iconData = [
    { name: "home", title: "Home" },
    { name: "search", title: "Search" },
    { name: "menu", title: "menu" },
    { name: "close", title: "close" },
    { name: "settings", title: "Settings" },
    { name: "check_circle", title: "check_circle" },
    { name: "favorite", title: "favorite" },
    { name: "add", title: "add" },
    { name: "delete", title: "delete" },
    { name: "arrow_back", title: "arrow_back" },
    { name: "star", title: "star" },
    { name: "chevron_right", title: "chevron_right" },
    { name: "arrow_forward_ios", title: "arrow_forward_ios" },
    { name: "logout", title: "logout" },
    { name: "add_circle", title: "add_circle" },
    { name: "cancel", title: "cancel" },
    { name: "arrow_back_ios", title: "arrow_back_ios" },
    { name: "arrow_forward", title: "arrow_forward" },
    { name: "arrow_drop_down", title: "arrow_drop_down" },
    { name: "more_vert", title: "more_vert" },
    { name: "check", title: "check" },
    { name: "check_box", title: "check_box" },
    { name: "open_in_new", title: "open_in_new" },
    { name: "toggle_on", title: "toggle_on" },
    {name: "refresh", title: "refresh"},
    {name: "check_box_outline_blank", title: "check_box_outline_blank"},
    {name: "login", title: "login"},
    {name: "chevron_left", title: "chevron_left"},
    {name: "radio_button_unchecked", title: "radio_button_unchecked"},
    {name: "more_horiz", title: "more_horiz"},
    {name: "download", title: "download"},
];

const Icons = ({ searchQuery }) => {
    const [openIconName, setOpenIconName] = useState("");
    const [iconClick, setIconClick] = useState(false);
    const handleIconOpen = (iconName) => {
        setIconClick(true);
        setOpenIconName(iconName);
    };

    const filteredIcons = iconData.filter((icon) =>
        icon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            {iconClick ? (
                <IconOpen
                    openIconName={openIconName}
                    setIconClick={setIconClick}
                />
            ) : (
                <section className="icons">
                    <div className="icon-container">
                        <h2>Explore Icon Collections</h2>
                        <p className="desc">
                            Your go-to hub for sleek, modern, and scalable
                            Google Material icons.
                        </p>

                        <div className="icon-grid">
                            {filteredIcons.map((icon, index) => (
                                <div
                                    className="icon-card"
                                    key={index}
                                    onClick={() => handleIconOpen(icon.name)}
                                >
                                    <span className="material-symbols-outlined icon-symbol">
                                        {icon.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Icons;
