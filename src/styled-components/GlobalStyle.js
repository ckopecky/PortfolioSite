import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        background-image: ${(props) => {
			return `url(${props.theme.body.backgroundImage})`;
		}};
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        color: ${(props) => {
			return props.theme.body.color;
		}};

    .nav-bar-portfolio {
        background-color: ${(props) => {
			return props.theme.navBarPortfolio.backgroundColor;
		}};
        a {
            color: ${(props) => {
				console.log(props.theme.navBarPortfolio);
				return props.theme.navBarPortfolio.a.color;
			}};
            &:hover {
                color: ${(props) => {
                    console.log(props.theme.navBarPortfolio);
                    return props.theme.navBarPortfolio.a.hover;
                }}}
            };

        .switch {
            background-color: ${(props) => {
				console.log(props);
				return props.theme.navBarPortfolio.switch.backgroundColor;
			}}
        };
    };
    .main-content {
        background-color: ${props => {
            return props.theme.buttonLabel === "dark" ? "rgba(218, 200, 175, 0.8)" : "rgba(0, 0, 102, 0.8);"
        }};
        .banner-button-container {
            button {
                background: ${props => {
                    return props.theme.button.backgroundColor;
                }};
                color: ${props => {
                    return props.theme.button.color;
                }};
                &:hover {
                background-color: ${props => {
                return props.theme.button.hover;
                }};
            }
            }
            
        }
        .career-urls {
            a {
                
            color: ${props => props.theme.buttonLabel === "dark" ?  "black" : "white"};
            }
        }
    }

};
    
`;
