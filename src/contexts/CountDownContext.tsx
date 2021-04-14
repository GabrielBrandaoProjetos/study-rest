import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { ChallengesContext } from "./ChallengesContext"

interface CountDownContextData{
    minutes: () => number
    seconds: () => number
    hasFinished: boolean
    isActive: boolean
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
    const [timeRest, setTimeRest] = useState(0.1 * 60)
    const [isActive, setIsActive] = useState(false)
    const [isActiveRest, setIsActiveRest] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = () => {
        if(time > 0){
            return Math.floor(time/60)
        }else if(timeRest < 0){
            return Math.floor(timeRest/60)
        }
    }
    
    const seconds = () => {
        if(time > 0){
            return time % 60
        }else if(timeRest < 0){
            return timeRest % 60
        }
    } 
    console.log(typeof(minutes), seconds);
    
    function startCountdown(){
        setIsActive(true)
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setHasFinished(false)
        setTime(0.05 * 60)
    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }else if(isActive && time === 0){
            setIsActiveRest(true)
            setHasFinished(true)
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
            setHasFinished(true)
            setIsActiveRest(false)
            startNewChallenge()
        }
        
    }, [isActiveRest, timeRest])

    
    return(
        <CountDownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountDownContext.Provider>
    )
}