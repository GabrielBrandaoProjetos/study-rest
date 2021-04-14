import { useContext } from 'react'
import { CountDownContext } from '../contexts/CountDownContext'

import * as Styled from '../styles/components/CountDown.styles.js'

export function CountDown(){
    const {
        minutes,
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown
    } = useContext(CountDownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    return(
        <>
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

            {hasFinished ? (
                <Styled.CountdownButton disabled type="button" >
                    Ciclo encerrado
                </Styled.CountdownButton>
            ): (
                <>
                {isActive ? (
                <Styled.CountdownButtonActive onClick={resetCountdown} type="button">
                    Abandonar ciclo
                </Styled.CountdownButtonActive>
            ) : (
                <Styled.CountdownButton onClick={startCountdown} type="button" >
                    Iniciar ciclo
                </Styled.CountdownButton>
            )}
                </>
            )}
        
        </>
    )
}