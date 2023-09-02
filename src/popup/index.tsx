import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/css/tailwindcss.css";
import Popup from "./Popup";

var init = () => {
    const appContainer = document.createElement("div");
    document.body.appendChild(appContainer);

    if (!appContainer) {
        throw new Error("App container not found");
    }

    const root = createRoot(appContainer);
    root.render(<Popup />);
}

init();
