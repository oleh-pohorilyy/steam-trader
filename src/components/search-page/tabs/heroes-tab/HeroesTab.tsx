import React from 'react'
import { ClassName } from 'src/constants/ClassName'
import { DotaHero } from 'src/types/DotaHero'
import HeroesSelectSection from './hero-select-section/HeroesSelectSection'

export const HeroesTab: React.FC = () => {
    return(
        <>
            <HeroesSelectSection
                sectionClass={ClassName.strength}/>
            <HeroesSelectSection
                sectionClass={ClassName.agility}/>
            <HeroesSelectSection
                sectionClass={ClassName.intelligence}/>
        </>
    )
}