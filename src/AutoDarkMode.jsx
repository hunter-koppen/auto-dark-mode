import { createElement } from "react";

import { DarkReader } from "./components/DarkReader";

export function AutoDarkMode({ darkEnabled }) {
    return <DarkReader darkEnabled={darkEnabled} />;
}
