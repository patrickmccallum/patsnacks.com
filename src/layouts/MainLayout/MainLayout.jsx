import React from "react"
import SEO from "../../components/seo"
import { createGlobalStyle, ThemeProvider } from "styled-components"

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

export const MainLayout = ({ children }) => {
    return (
        <ThemeProvider theme={LightTheme}>
            <div>
                <GlobalStyles />
                <div>{children}</div>
            </div>
        </ThemeProvider>
    )
}
