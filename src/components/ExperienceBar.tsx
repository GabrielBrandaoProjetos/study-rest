import {useContext} from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import * as Styled from '../styles/components/ExperienceBar.styles.js'

export function ExperienceBar(){
    
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext)

    const percentBar = (currentExperience/experienceToNextLevel) * 100

    return (
        <Styled.ExperienceBar>
            <span>0 xp</span>
            <div>
                <div style={{width: `${percentBar}%`}} />
                <span className="currentExperience" style={{left: `${percentBar}%`}}> {currentExperience} px</span>
            </div>
            <span>{experienceToNextLevel} xp</span>

        </Styled.ExperienceBar>
    )
}