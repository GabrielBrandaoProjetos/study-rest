import 'styled-components'

declare module 'styled-components'{
    export interface DefaultTheme{
        title: string,

        colors: {
            primary: string,
            secondary: string,
            
            white: string, 
            background: string, 
            grayLine: string, 
            text: string,
            textButton: string,
            textHighlight: string, 
            title: string, 
            red: string, 
            green: string, 
            blue: string, 
            blueDark: string, 
            blueTwitter: string, 
        }
    }
}