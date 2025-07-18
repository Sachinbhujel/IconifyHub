import React, { useEffect } from "react";

function NewsLetters() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://subscribe-forms.beehiiv.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="beehiiv-form"
      data-form-id="101e5bf8-f921-4cc6-88d5-2381fd3ffdbd" 
    ></div>
  );
}

export default NewsLetters;
