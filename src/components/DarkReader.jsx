import { useEffect, createElement } from "react";
import { useDarkreader } from "react-darkreader";

export function DarkReader({ darkEnabled }) {
    const [isDark, { toggle }] = useDarkreader(false);

    useEffect(() => {
        if (darkEnabled.status === "available") {
            if (isDark !== darkEnabled.value) {
                toggle();
            }
        }
    }, [darkEnabled, isDark, toggle]);

    return null;
}
