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
                shop: "/shopping-cart.png",
                noSpeaker: "/no_speaker.png",
                speaker: "/speaker.png"
            }
        }
    },
    {
        name: "Blue",
        cost: 500,
        displayColors: ["#2874A6", "#2E86C1", "#3498DB", "#5DADE2"],
        colors: {
            colors: {
                primary: "#2874A6",
                secondary: "#5DADE2"
            },
            body: {
                background: "#2874A6",
                textColor: "#000000"
            },
            header: {
                headerStyles: {
                    background: "#5DADE2",
                    color: "#000000"
                },
                timerStyles: {
                    background: "#5DADE2",
                    color: "#000000"
                } 
            },
            typingBox: {
                background: "#85C1E9"
            },
            typingInput: {
                backgroundColor: "#EEEEEE"
            },
            customize: {
                color: "#000000"
            },
            credits: {
                background: "#85C1E9"
            },
            customizeDisplay: {
                background: "#5DADE2"
            },
            icons: {
                background: "#5DADE2",
                color: "#000000"
            },
            battlePass: {
                background: "#5DADE2"
            },
            shop: {
                shopStyles: {
                    background: "#2874A6",
                    color: "#EEEEEE"
                },
                footNavStyles: {
                    color: "#EEEEEE", 
                    background: "#21618C"
                }
            },
            images: {
                timer: "/clock_icon.png",
                close: "/light_close.png",
                shop: "/shopping-cart.png",
                noSpeaker: "/light_no_speaker.png",
                speaker: "/light_speaker.png"
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
                shop: "/light-shopping-cart.png",
                noSpeaker: "/light_no_speaker.png",
                speaker: "/light_speaker.png"
            }
        }  
    },
    {
        name: "Thanos",
        cost: 10000,
        displayColors: ["#2a3d66", "#5d54a4", "#9d65c9", "#d789d7"],
        colors: {
            colors: {
                primary: "#5d54a4",
                secondary: "#9d65c9"
            },
            body: {
                background: "#5d54a4",
                textColor: "#EEEEEE"
            },
            header: {
                headerStyles: {
                    background: "#9d65c9",
                    color: "#EEEEEE"
                },
                timerStyles: {
                    background: "#9d65c9",
                    color: "#EEEEEE"
                } 
            },
            typingBox: {
                background: "#2a3d66"
            },
            typingInput: {
                backgroundColor: "#CCCCCC"
            },
            customize: {
                color: "#EEEEEE"
            },
            credits: {
                background: "#9d65c9"
            },
            customizeDisplay: {
                background: "#8675a9"
            },
            icons: {
                background: "#8675a9",
                color: "#EEEEEE"
            },
            battlePass: {
                background: "#5d54a4"
            },
            shop: {
                shopStyles: {
                    background: "#5d54a4",
                    color: "#EEEEEE"
                },
                footNavStyles: {
                    color: "#EEEEEE", 
                    background: "#9d65c9"
                }
            },
            images: {
                timer: "/light_clock_icon.png",
                close: "/light_close.png",
                shop: "/light-shopping-cart.png",
                noSpeaker: "/light_no_speaker.png",
                speaker: "/light_speaker.png"
            }
        }  
    },
    {
        name: "The Theme",
        cost: 1000000,
        displayColors: ["#000000", "#000000"],
        colors: {
            colors: {
                primary: "#FFFFFF",
                secondary: "#FFFFFF"
            },
            body: {
                background: "url('https://cdn.discordapp.com/attachments/768855517648912406/814264563754860594/Sedge_Theme_Image.png') no-repeat top center / cover",
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
                shop: "/shopping-cart.png",
                noSpeaker: "/no_speaker.png",
                speaker: "/speaker.png"
            }
        }  
    },
]
export {themeColors}
