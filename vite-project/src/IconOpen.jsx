import React from "react";

function IconOpen({openIconName}){
    return (
        <div className="open-icon-div">
            <span className="material-symbols-outlined">
                {openIconName}
            </span>
        </div>
    )
}

export default IconOpen;