import styled from 'styled-components'

export const ExperienceBar = styled.header`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    padding-top: 1rem;

    span{
        font-size: 1rem;
    }

    > div{
        flex: 1;
        height: 4px;
        border-radius: 4px;
        background: var(--gray-line);
        margin: 0 1.5rem;
        position: relative;
    }

    > div > div{
        height: 4px;
        border-radius: 4px;
        background: var(--green);
    }

    span.currentExperience{
        position: absolute;
        top: 12px;
        transform: translate(-50%);
    }
    
`