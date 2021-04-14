import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import * as Styled from '../styles/components/LevelUpModal.styles.js'

export function LevelUpModal(){
    const {level, closeLevelUpModal} = useContext(ChallengesContext)
    return(
        <Styled.Overlay>
            <Styled.Container>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>
                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal"/>
                </button>
            </Styled.Container>
        </Styled.Overlay>
    )
}