import styled from 'styled-components'
import Switch from 'react-switch'

export const Container = styled.div`
    height: 100vh;
    max-width: 70vw;
    margin: 0 auto;
    padding: 0rem 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > div{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 0.5rem;

        strong{
            margin-right: 1rem;
        }
    }

    section{
        flex: 1;

        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6.25rem;
        align-content: center;
    }

    @media (max-width: 400px) {
        max-width: 100vw;

        section{
            max-width: 100vw;
            height: 80vh;
            gap: 1rem;

            display: flex;
            flex-direction: column;
            align-content: center;

            div.challengeBox{
                padding-bottom: 2rem;
            }
        }

    }
`

export const _Switch = styled(Switch)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`