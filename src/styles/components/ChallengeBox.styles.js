import styled from 'styled-components'

export const ChallengeBoxContainer = styled.div`
    height: 100%;

    background: var(--white);
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    padding: 1.5rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    text-align: center;

    @media(max-width: 400px){
       
    }
`

export const ChallengeActive = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;

    header{
        color: var(--green);
        font-weight: 600;
        font-size: 1.25rem;
        padding: 0 2rem 1.5rem;
        border-bottom: 1px solid var(--gray-line);
    }

    main{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    main strong{
        font-size: 2rem;
        font-weight: 600;
        color: var(--title);
        margin: 1.5rem 0 1rem;
    }

    main p{
        line-height: 1.5;
    }

    footer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    footer button{
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border: 0;
        border-radius: 5px;

        color: var(--text-button);
        font-size: 1rem;
        font-weight: 600;

        transition: filter 0.2s;
    }

    footer button.challengeFailedButton:disabled{
        background: var(--red);
        cursor: not-allowed;
    }

    footer button.challengeFailedButton{
        background: var(--red);
    }

    footer button.challengeSucceededButton{
        background: var(--green);
    }

    footer button:hover{
        filter: brightness(0.8);
    }

    @media (max-width: 400px) {
        header{
            font-size: 1.1rem;
            padding: 0 2rem 0.5rem;
        }
        main img {
            display: none;
        }

        main strong{
            font-size: 1.5rem;
            margin: 0.5rem 0 0.5rem;
        }

        main p{
            font-size: 1rem;
            line-height: 1.4;
            margin-bottom: 0.5rem;
        }

        footer button{
            height: 2.5rem;
        }
    }

`

export const ChallengeNotActive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    strong{
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.4;
    }

    p{
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1.4;
        max-width: 70%;
        margin-top: 3rem;
    }

    p img{
        margin-bottom: 1rem;
    }

    @media (max-width: 400px) {
        img{
            width: 3rem;
            height: 5rem;
        }

        strong{
            font-size: 1.1rem;
        }
        p{
            font-size: 1rem;
            margin-top: 1rem;
        }
        p img{
            margin-bottom: 0.5rem;
        }
    }

`

