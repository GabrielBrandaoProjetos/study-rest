import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:focus{outline: none;}

    :root{
        --white: ${props => props.theme.colors.white};
        --background: ${props => props.theme.colors.background};
        --gray-line: ${props => props.theme.colors.grayLine};
        --text: ${props => props.theme.colors.text};
        --text-button: ${props => props.theme.colors.textButton};
        --text-highlight: ${props => props.theme.colors.textHighlight};
        --title: ${props => props.theme.colors.title};
        --red: ${props => props.theme.colors.red};
        --green: ${props => props.theme.colors.green};
        --blue: ${props => props.theme.colors.blue};
        --blue-dark: ${props => props.theme.colors.blueDark};
        --blue-twitter: ${props => props.theme.colors.blueTwitter};
    }

    @media (max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background);
        color: var(--text);
    }

    body, input, textarea, button{
        font: 400 16px 'Inter', sans-serif;
    }

    button{
        cursor: pointer;
    }

    a{
        color: inherit;
        text-decoration: none;
    }
`


