import styled from 'styled-components'
import { CgProfile } from 'react-icons/cg'

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

    input{
        display: none;
    }

    div:last-child{
        margin-left: 1.5rem;
    }

    div strong{
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--title);
    }

    div p{
        font-size: 1rem;
        margin-top: 0.5rem;
    }

    div p img{
        margin-right: 0.5rem;
    }
`

export const _CgProfile = styled(CgProfile)`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
`