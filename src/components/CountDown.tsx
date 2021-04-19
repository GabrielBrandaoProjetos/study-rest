import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountDownContext } from '../contexts/CountDownContext'

import * as Styled from '../styles/components/CountDown.styles.js'

export function CountDown(){
    const {
        minutes,
        seconds,  
        isActive, 
        startCountdown, 
        resetCountdown,
        isActiveRest
    } = useContext(CountDownContext)

    const {resetChallenge} = useContext(ChallengesContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    function resetRest(){
        resetCountdown()
        resetChallenge()
    }

    return(
        <Styled.Container>
            <Styled.CountdownContainer>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>

            </Styled.CountdownContainer>
            {isActive ? (
                <Styled.CountdownButtonActive onClick={resetCountdown} type="button">
                    Abandonar ciclo
                </Styled.CountdownButtonActive>
            ) : (
                <>
                    {isActiveRest ? (
                        <Styled.CountdownButtonActive onClick={resetRest} type="button">
                            Abandonar descanso
                        </Styled.CountdownButtonActive>
                    ) : (
                        <Styled.CountdownButton onClick={startCountdown} type="button" >
                            Iniciar ciclo
                        </Styled.CountdownButton>
                    )}
                </>
            )}
        </Styled.Container>
    )
}