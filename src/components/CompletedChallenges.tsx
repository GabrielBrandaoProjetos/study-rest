import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import * as Styled from '../styles/components/CompletedChallenges.styles.js'

export function CompletedChallenges(){
    const {challengesCompleted} = useContext(ChallengesContext)
    return(
        <Styled.CompletedChallengesContainer>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </Styled.CompletedChallengesContainer>
    )
}