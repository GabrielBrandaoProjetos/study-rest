import styled from 'styled-components'
import { CgProfile } from 'react-icons/cg'
import { MdEdit } from 'react-icons/md'

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;

    > div{
        margin-left: 0;
        position: relative;

        > img{
            width: 5rem;
            height: 5rem;
            border-radius: 5px;
            margin-left: 0;
            cursor: pointer;
        }

        div.boxEditImage{
            position: absolute;
            left: -2.5rem;
            bottom: -5.5rem;

            width: 10rem;
            height: 5rem;

            display: flex;
            flex-direction: column;
            justify-content: center;

            background: #fff;
            margin-left: 0;
            border-radius: 5px;
            padding: 0.5rem;

            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

            label{
                color: black;
                font-weight: 600;
                padding: 5px;
                border-radius: 5px;
                cursor: pointer;

                :hover{
                    background: #e6dddd;
                }
            }
        }
    }

    div.input{
        width: 5rem;
        height: 5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 5px;
        background: var(--white);
        margin-left: 0;

        form{
            font-size: 0;
        }
    }

    input#imageProfile{
        display: none;
    }

    div:last-child{
        margin-left: 1.5rem;

        input{
            width: 100%;
            height: 2rem;

            border-radius: 5px;
            border: none;
            padding-left: 10px;
        }

        span{
            padding-left: 10px;
            font-size: 0.8rem;
            font-weight: bold;
            color: var(--text)
        }

        strong{
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--title);
        }
    }

    div p{
        font-size: 1rem;
        margin-top: 0.5rem;
    }

    div p img{
        margin-right: 0.5rem;
    }

    @media (max-width: 400px) {
        > div{ 
            > img{
                width: 4rem;
                height: 4rem;
            }

            div.boxEditImage{
                width: 6rem;
                height: 4rem;

                position: absolute;
                left: -1rem;
                bottom: -4.5rem;

                label{
                    font-size: 0.6rem;
                    font-weight: 600;
                    padding: 5px;
                    border-radius: 5px;
                    cursor: pointer;

                    
                }
            }
        }
    }
`

export const _CgProfile = styled(CgProfile)`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
`

export const _MdEdit = styled(MdEdit)`
    width: 1rem;
    height: 1rem;

    margin-left: 10px;
    font-size: 0;
    cursor: pointer;
`