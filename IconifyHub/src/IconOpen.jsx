import React from "react";
import "./App.css";

function IconOpen({ openIconName, setIconClick }) {
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert("Copied to clipboard!");
        });
    };

    return (
        <div className="open-icon-div">
            <span
                className="material-symbols-outlined back-button"
                onClick={() => setIconClick(false)}
            >
                arrow_back
            </span>

            <div className="click-icon-div">
                <span className="material-symbols-outlined">
                    {openIconName}
                </span>
            </div>

            <div className="instruction-div">
                <h2>Instructions</h2>
                <p>
                    Check the{" "}
                    <a href="https://developers.google.com/fonts/docs/material_symbols">
                        Material Symbols guide
                    </a>{" "}
                    for advanced examples such as animations and font loading
                    optimization.
                </p>

                <h2>Variable icon font</h2>
                <p>
                    Add the variable font stylesheet request to your head tag
                    and the current variable axes configuration to icons using
                    CSS.
                </p>

                <div className="copy-code">
                    <pre className="copy-link">
                        {`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=${openIconName}" />`}
                    </pre>
                    <div
                        className="copy-icon"
                        onClick={() =>
                            handleCopy(`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=${openIconName}" />`)
                        }
                    >
                        <span className="material-symbols-outlined">
                            content_copy
                        </span>
                        <p>Copy code</p>
                    </div>
                </div>

                <div className="copy-code">
                    <pre className="copy-link">
{`<style>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
</style>`}
                    </pre>
                    <div
                        className="copy-icon"
                        onClick={() =>
                            handleCopy(`<style>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
</style>`)
                        }
                    >
                        <span className="material-symbols-outlined">
                            content_copy
                        </span>
                        <p>Copy code</p>
                    </div>
                </div>

                <h2>Inserting the icon</h2>
                <div className="copy-code">
                    <pre className="copy-link">
{`<span class="material-symbols-outlined">
${openIconName}
</span>`}
                    </pre>
                    <div
                        className="copy-icon"
                        onClick={() =>
                            handleCopy(`<span class="material-symbols-outlined">
${openIconName}
</span>`)
                        }
                    >
                        <span className="material-symbols-outlined">
                            content_copy
                        </span>
                        <p>Copy code</p>
                    </div>
                </div>

                <h2>Icon name</h2>
                <div className="copy-code">
                    <pre className="copy-link">
                        {openIconName}
                    </pre>
                    <div
                        className="copy-icon"
                        onClick={() => handleCopy(openIconName)}
                    >
                        <span className="material-symbols-outlined">
                            content_copy
                        </span>
                        <p>Copy code</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IconOpen;