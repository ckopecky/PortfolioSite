import LightBackground from '../img/WebsiteAssets/Screenshot-light.png';
import DarkBackground from '../img/WebsiteAssets/Screenshot-dark.png';




    export const light = {
        buttonLabel: "dark",
        body: {
            backgroundImage: LightBackground,
            color: "#212529",
        },
        navBarPortfolio: {
            backgroundColor: "#fff",
            a: {
                color: "#212529",
                hover: "#00afaf"
            },
            switch: {
                backgroundColor: "#74407a",
                color: "#fff"
            }
        },
        mainContent: {
            hover: "#007c7c",
            links: "#fff"
        },
        button: {
            backgroundColor: "#74404a",
            color: "#fff",
            hover: "#212529"
        },
    }

    export const dark =  {
        buttonLabel: "light",
        body: {
            backgroundImage: DarkBackground,
            color: "#a9a9b3",
        },
        navBarPortfolio: {
            backgroundColor: "#000",
            color: "#a9a9b3",
            hover: "#00b3b3",
            switch: {
                backgroundColor: "#80ffff",
                color: "#212529"
            }
        },
        mainContent: {
            hover: "#004d4d",
            links: "#8e8e9b"
        },
        button: {
            backgroundColor: "#000",
            color: "#212529",
            hover: "#414348"
        },
    }
