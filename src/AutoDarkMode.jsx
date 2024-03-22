import { createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/AutoDarkMode.css";

export function AutoDarkMode({ sampleText }) {
    return <HelloWorldSample sampleText={sampleText} />;
}
