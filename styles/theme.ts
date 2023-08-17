export const defaultTheme: Theme = {
    colors: {
        secondary: { main: "rgba(252, 186, 3)" },
        error: { main: "#EE4521" },
        success: { main: "#00A86B" },
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
        h4: {
            fontSize: "28px",
            fontFamily: "'Kanit', serif",
            fontWeight: "600",
        },
        h5: {
            fontSize: "24px",
            fontFamily: "'Kanit', serif",
            fontWeight: "600",
        },
        h6: {
            fontSize: "20px",
            fontFamily: "'Kanit', serif",
            fontWeight: "600",
        },
        body1: {
            fontSize: "18px",
            fontFamily: "'Kanit', serif",
            fontWeight: "400",
        },
        body2: {
            fontSize: "16px",
            fontFamily: "'Kanit', serif",
            fontWeight: "400",
        },
        body3: {
            fontSize: "14px",
            fontFamily: "'Kanit', serif",
            fontWeight: "400",
        }
    },
    borderRadius: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        10: "40px",
    },
    spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        12: "48px",
    },
    boxShadow: {
        100: "rgba(0, 0, 0, 0.18) 0px 2px 4px"
    },
    fontFamily: {
        kanit: "'Kanit', serif",
        merriweather: "'Merriweather', serif",
        inter: "'Inter', sans-serif"
    }
}

export const darkTheme: Theme = {
    colors: {
        secondary: { main: "rgba(252, 186, 3)" },
        error: { main: "#EE4521" },
        success: { main: "#00A86B" },
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
        h4: {
            fontSize: "28px",
            fontFamily: "'Kanit', serif",
            fontWeight: "600",
        },
        h5: {
            fontSize: "24px",
            fontFamily: "'Kanit', serif",
            fontWeight: "600",
        },
        h6: {
            fontSize: "20px",
            fontFamily: "'Kanit', serif",
            fontWeight: "600",
        },
        body1: {
            fontSize: "18px",
            fontFamily: "'Kanit', serif",
            fontWeight: "400",
        },
        body2: {
            fontSize: "16px",
            fontFamily: "'Kanit', serif",
            fontWeight: "400",
        },
        body3: {
            fontSize: "14px",
            fontFamily: "'Kanit', serif",
            fontWeight: "400",
        }
    },
    borderRadius: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        10: "40px",
    },
    spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        12: "48px",
    },
    boxShadow: {
        100: "rgba(0, 0, 0, 0.18) 0px 2px 4px"
    },
    fontFamily: {
        kanit: "'Kanit', serif",
        merriweather: "'Merriweather', serif",
        inter: "'Inter', sans-serif"
    }
}

export type Theme = {
    colors: {
        secondary: {
            main: string;
        };
        success: {
            main: string;
        };
        error: {
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
        h4: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
        },
        h5: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
        },
        h6: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
        },
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
        body3: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
        };
    },
    spacing: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        12: string;
    },
    borderRadius: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        10: string;
    },
    boxShadow: {
        100: string;
    },
    fontFamily: {
        kanit: string;
        merriweather: string;
        inter: string;
    }
}
