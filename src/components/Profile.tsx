import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import * as Styled from '../styles/components/Profile.styles.js'

export function Profile(){
    const {level} = useContext(ChallengesContext)
    const [imageProfile, setImageProfile] = useState(null)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const storage = localStorage.getItem('imageProfile')
        storage && setImageProfile(JSON.parse(storage))
    }, [])
    
    function handleImageProfile(e: File){
        var reader = new FileReader( );
        reader.onload = function ( evt ) { 
            setImageProfile(evt.target.result)
            localStorage.setItem('imageProfile', JSON.stringify(evt.target.result))
        };
        reader.readAsDataURL(e)
    }
    
    return(
        <Styled.ProfileContainer>
            {imageProfile ? (
                <div>
                    <img src={imageProfile} alt="Foto do perfil" onClick={() => setIsActive(isActive ? false : true)}/>
                    {isActive && (
                        <div className="boxEditImage">
                            <label htmlFor="imageProfile">Atualizar foto</label>
                            <form>
                                <input type="file" id="imageProfile" accept="image/*" 
                                    onChange={(e) => {handleImageProfile(e.target.files[0])}}
                                />
                            </form>
                            <label onClick={() => {
                                localStorage.removeItem('imageProfile')
                                setImageProfile(null)
                            }}>Excluir foto</label>
                        </div>
                    )}
                </div>
                ) : (
                <div className="input">
                    <form>
                        <label htmlFor="imageProfile"><Styled._CgProfile/></label>
                        <input type="file" id="imageProfile" accept="image/*" 
                            onChange={(e) => {handleImageProfile(e.target.files[0]);
                            }}
                        />
                    </form>
                </div>
            )}
            <div>
                <strong>Gabriel Brandão</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </Styled.ProfileContainer>
    )
}