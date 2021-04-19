import React, { useContext } from "react";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountDownProvider } from "../contexts/CountDownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { ThemeContext } from "styled-components";
import { ThemeContextCustom } from "../contexts/ThemeContext";

import {GetServerSideProps} from 'next'

import Head from 'next/head'

import * as Styled from '../styles/pages/Home.styles'


interface HomeProps{
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  const {toggleTheme} = useContext(ThemeContextCustom)
  const {colors, title} = useContext(ThemeContext)

  return (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience} 
      challengesCompleted={props.challengesCompleted}
    >   
      <Styled.Container>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <div>
          <strong>Tema</strong>
          <Styled._Switch 
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={15}
            width={40}
            handleDiameter={18}
            onColor={colors.blue}
          />
        </div>
        <ExperienceBar/>
        <CountDownProvider>
          <section>
            <div>
              <Profile/>
              <CompletedChallenges/>
              <CountDown/>
            </div>
            <div className="challengeBox">
              <ChallengeBox/>
            </div>
          </section>
        </CountDownProvider>
      </Styled.Container>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
