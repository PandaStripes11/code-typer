const themeColors = [
    {
        name: "Default",
        cost: 0,
        displayColors: ["#154360", "#EEEEEE", "#CCCCCC", "#DCDCDC"],
        colors: {
            colors: {
                primary: "#FFFFFF",
                secondary: "#FFFFFF"
            },
            body: {
                background: "#FFFFFF",
                textColor: "#000000"
            },
            header: {
                headerStyles: {
                    background: "#FFFFFF",
                    color: "#000000"
                },
                timerStyles: {
                    background: "#FFFFFF",
                    color: "#000000"
                }
            },
            typingBox: {
                background: "#dcdcdc"
            },
            typingInput: {
                backgroundColor: "#ebebeb"
            },
            customize: {
                color: "#000000"
            },
            credits: {
                background: "#154360"
            },
            customizeDisplay: {
                background: "#FFFFFF"
            },
            icons: {
                background: "#FFFFFF",
                color: "#000000"
            },
            battlePass: {
                background: "#FFFFFF"
            },
            shop: {
                shopStyles: {
                    background: "#FFFFFF",
                    color: "#000000"
                },
                footNavStyles: {
                    background: "#FFFFFF",
                    color: "#000000",
                }
            },
            images: {
                timer: "/clock_icon.png",
                close: "/close.png",
                shop: "/shopping-cart.png"
            }
        }
    },
    {
        name: "Dark",
        cost: 1000,
        displayColors: ["#222222", "#454545", "#566573", "#ABB2B9"],
        colors: {
            colors: {
                primary: "#222222",
                secondary: "#333333"
            },
            body: {
                background: "#222222",
                textColor: "#EEEEEE"
            },
            header: {
                headerStyles: {
                    background: "#333333",
                    color: "#EEEEEE"
                },
                timerStyles: {
                    background: "#333333",
                    color: "#EEEEEE"
                } 
            },
            typingBox: {
                background: "#444444"
            },
            typingInput: {
                backgroundColor: "#CCCCCC"
            },
            customize: {
                color: "#EEEEEE"
            },
            credits: {
                background: "#333333"
            },
            customizeDisplay: {
                background: "#343434"
            },
            icons: {
                background: "#454545",
                color: "#EEEEEE"
            },
            battlePass: {
                background: "#222222"
            },
            shop: {
                shopStyles: {
                    background: "#222222",
                    color: "#EEEEEE"
                },
                footNavStyles: {
                    color: "#EEEEEE", 
                    background: "#333333"
                }
            },
            images: {
                timer: "/light_clock_icon.png",
                close: "/light_close.png",
                shop: "/light-shopping-cart.png"
            }
        }  
    }
]
export {themeColors}
