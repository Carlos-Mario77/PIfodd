import React, { useEffect } from "react";

function InstagramWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="instagram-widget">
      <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CO2_kJEHSo3/" data-instgrm-version="13"></blockquote>
      <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CKFB6TOlNEE/" data-instgrm-version="13"></blockquote>
      <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CbWYMSJvP21/" data-instgrm-version="13"></blockquote>
    </div>
  );
}

export default InstagramWidget;