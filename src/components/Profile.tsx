import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'


import * as Styled from '../styles/components/Profile.styles.js'

export function Profile(){
    const {level} = useContext(ChallengesContext)
    const [imageProfile, setImageProfile] = useState(null)
    const [isActive, setIsActive] = useState(false)
    const [name, setName] = useState<string>()

    useEffect(() => {
        const storageImage = localStorage.getItem('imageProfile')
        const storageName = localStorage.getItem('name')
        
        storageImage && setImageProfile(JSON.parse(storageImage))
        storageName && setName(storageName)
    }, [])
    
    function handleImageProfile(e: File){
        var reader = new FileReader( );
        reader.onload = function ( evt ) { 
            setImageProfile(evt.target.result)
            localStorage.setItem('imageProfile', JSON.stringify(evt.target.result))
        };
        reader.readAsDataURL(e)
    }

    const toggleImageProfile = () => {
        setIsActive(isActive ? false : true)
    }

    const removeImageProfile = () => {
        localStorage.removeItem('imageProfile')
        setImageProfile(null)
    }

    function handleUserName({name}){
        setName(name)
        localStorage.setItem("name", name)
    }
    
    return(
        <Styled.ProfileContainer>
            {imageProfile ? (
                <div>
                    <img src={imageProfile} alt="Foto do perfil" onClick={toggleImageProfile}/>
                    {isActive && (
                        <div className="boxEditImage">
                            <label htmlFor="imageProfile">Atualizar foto</label>
                            <form>
                                <input type="file" id="imageProfile" accept="image/*" 
                                    onChange={(e) => {handleImageProfile(e.target.files[0])}}
                                />
                            </form>
                            <label onClick={removeImageProfile}>Excluir foto</label>
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
                {!name ? (
                    <Formik 
                        initialValues={{name: ''}}
                        validationSchema={Yup.object().shape({name: Yup.string().required()})}
                        onSubmit={handleUserName}
                    >
                        {formik => (
                            <Form>
                            <Field id="name" name="name" type="search/submit" placeholder="Ex: Gabriel Brandão" />
                                {formik.errors && <ErrorMessage component="span" name="name" />}
                            </Form>
                        )}
                    </Formik>
                ) : (
                    <>
                        <strong>{name}</strong>
                        <Styled._MdEdit onClick={() => setName(null)}/>
                    </>
                )}
                
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </Styled.ProfileContainer>
    )
}