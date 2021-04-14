import {useEffect, useState, Dispatch, SetStateAction} from 'react'

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>
]

function usePersistedState<T>(key: string, initialState: T): Response<T>{
    const [state, setState] = useState(initialState)
    
    useEffect(() => {
        const storage = localStorage.getItem(key)
        storage && setState(JSON.parse(storage))
        
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])
    
    return [state, setState]
}

export default usePersistedState