import React, {useState} from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { useEffect } from "react";

const GlobalStyles = createGlobalStyle`
    body {
        background: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.textColor};
        font-family: Public Sans!important;
    }
`;

const LightTheme = {
    backgroundColor: '#f8f5f1',
    textColor: '#333',
    lineColor: '#777',
    contrastBackColor: '#333',
    contrastForeColor: "#FFF",
};

const DarkTheme = {
    backgroundColor: '#333',
    textColor: '#F7F7F7',
    lineColor: '#000',
    contrastBackColor: '#F7F7F7',
    contrastForeColor: "#333",
};

export const MainLayout = ({ children }) => {
    const [theme, setTheme] = useState(LightTheme);

    useEffect(() => {
        if (Math.random()*100<10) setTheme(DarkTheme)
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <div>
                <GlobalStyles />
                <div>{children}</div>
            </div>
        </ThemeProvider>
    )
}
