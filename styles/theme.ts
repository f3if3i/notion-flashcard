export const defaultTheme: Theme = {
    colors: {
        secondary: { main: "rgba(252, 186, 3)" },
        caution: { main: "#EE4521" },
        white: "#FFFFFF",
        black: {
            main: "#1B1C1E",
            dark: "#000000"
        },
        grey: {
            100: "#F5F5F5",
            200: "#EEEBE4",
            300: "#EAEAEA",
            400: "#B0B0B0"
        },
        shadow: {
            100: "rgba(0, 0, 0, 0.18)",
            200: "rgba(0, 0, 0, 0.8)"
        },
        accentShadow: {
            100: "rgba(245, 188, 0, 0.05)",
            200: "rgba(245, 188, 0, 0.1)",
            300: "rgba(252, 186, 3, 0.2)",
            400: "rgba(252, 186, 3, 0.3)",
            500: "rgba(252, 186, 3, 0.4)"
        }
    },
    typography: {
        body1: {
            fontSize: "18px",
            fontFamily: "'Kanit', serif",
            fontWeight: "600",
        },
        body2: {
            fontSize: "16px",
            fontFamily: "'Kanit', serif",
            fontWeight: "600",
        }
    }
}

export const darkTheme: Theme = {
    colors: {
        secondary: { main: "#EE4521" },
        caution: { main: "#EE4521" },
        white: "#FFFFFF",
        black: {
            main: "#1B1C1E",
            dark: "#000000"
        },
        grey: {
            100: "#F5F5F5",
            200: "#EEEBE4",
            300: "#EAEAEA",
            400: "#B0B0B0"
        },
        shadow: {
            100: "rgba(0, 0, 0, 0.18)",
            200: "rgba(0, 0, 0, 0.8)"
        },
        accentShadow: {
            100: "rgba(245, 188, 0, 0.05)",
            200: "rgba(245, 188, 0, 0.1)",
            300: "rgba(252, 186, 3, 0.2)",
            400: "rgba(252, 186, 3, 0.3)",
            500: "rgba(252, 186, 3, 0.4)"
        }
    },
    typography: {
        body1: {
            fontSize: "18px",
            fontFamily: "'Kanit', serif",
            fontWeight: "600",
        },
        body2: {
            fontSize: "16px",
            fontFamily: "'Kanit', serif",
            fontWeight: "600",
        }
    }
}

export type Theme = {
    colors: {
        secondary: {
            main: string;
        };
        caution: {
            main: string;
        };
        white: string;
        black: {
            main: string;
            dark: string;
        };
        grey: {
            100: string;
            200: string;
            300: string;
            400: string;
        };
        shadow: {
            100: string;
            200: string;
        };
        accentShadow: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
        }
    };
    typography: {
        body1: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
        }
        body2: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
        };
    }
}
