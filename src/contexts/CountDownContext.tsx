import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { ChallengesContext } from "./ChallengesContext"

interface CountDownContextData{
    minutes: number
    seconds: number
    isActive: boolean
    isActiveRest: boolean
    startCountdown: () => void
    resetCountdown: () => void
}

interface ChildrenProviderProps{
    children: ReactNode
}

export const CountDownContext = createContext({} as CountDownContextData)

let countdownTimeout: NodeJS.Timeout

export function CountDownProvider({children}: ChildrenProviderProps){
    const {startNewChallenge} = useContext(ChallengesContext)

    const [time, setTime] = useState(0.05 * 60)
    const [timeRest, setTimeRest] = useState(5 * 60)
    const [isActive, setIsActive] = useState(false)
    const [isActiveRest, setIsActiveRest] = useState(false)

    var minutes = 0
    var seconds = 0

    if(time > 0){
        minutes = Math.floor(time/60)
        seconds = time % 60
    }else if(timeRest > 0){
        minutes = Math.floor(timeRest/60)
        seconds = timeRest % 60
    }
    
    function startCountdown(){
        setIsActive(true)
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setIsActiveRest(false)
        setTime(25 * 60)
        setTimeRest(5 * 60)
    }

    function finalTimeRest(){
        new Audio('/notification.mp3').play()
        if(Notification.permission === 'granted'){
            new Notification('Acabou o descanso', {
                body: "Vamos trabalhar?"
            })
        }
    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }else if(isActive && time === 0){
            setIsActiveRest(true)
            setIsActive(false)
            startNewChallenge()
        }
        
    }, [isActive, time])

    useEffect(() => {
        if(isActiveRest && timeRest > 0){
            countdownTimeout = setTimeout(() => {
                setTimeRest(timeRest - 1)
            }, 1000)
        }else if(isActiveRest && timeRest === 0){
            setIsActiveRest(false)
            resetCountdown()
            finalTimeRest()
        }
    }, [isActiveRest, timeRest])

    
    return(
        <CountDownContext.Provider value={{
            minutes,
            seconds,
            isActive,
            startCountdown,
            resetCountdown,
            isActiveRest,
        }}>
            {children}
        </CountDownContext.Provider>
    )
}