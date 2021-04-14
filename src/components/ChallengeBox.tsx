import {useContext} from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountDownContext } from '../contexts/CountDownContext'

import * as Styled from '../styles/components/ChallengeBox.styles'

export function ChallengeBox(){
    const {resetChallenge, activeChallenge, completedChallenge} = useContext(ChallengesContext)
    const {resetCountdown, isActiveRest} = useContext(CountDownContext)

    function handleChallengeSucceeded(){
        completedChallenge()
        !isActiveRest && resetCountdown()
    }

    function handleChallengeFailed(){
        resetChallenge()
        !isActiveRest && resetCountdown()
    }


    return(
        <Styled.ChallengeBoxContainer>
            {activeChallenge ? (
                <Styled.ChallengeActive>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt={`Challenge to ${activeChallenge.type}`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        {isActiveRest ? (
                            <button disabled type="button" className="challengeFailedButton">Falhei</button>
                        ): (
                            <button type="button" className="challengeFailedButton" onClick={handleChallengeFailed}>Falhei</button>
                        )}
                        
                        <button type="button" className="challengeSucceededButton" onClick={handleChallengeSucceeded}>Completei</button>
                    </footer>

                </Styled.ChallengeActive>
            ) : (
                <Styled.ChallengeNotActive>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios.
                    </p>
                </Styled.ChallengeNotActive>
            )}
            

        </Styled.ChallengeBoxContainer>
    )
}