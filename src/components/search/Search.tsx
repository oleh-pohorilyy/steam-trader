import React, { useMemo, useState } from 'react'
import { heroes } from '../../heroes'
import styles from 'Search.module.css'
import { ClassName } from '../../types/ClassName'
import { Hero } from '../../types/Hero'
import HeroesSelectSection from './hero-select-section/HeroesSelectSection'

const Search: React.FC = () => {

    const [selectedHeroName, setSelectedHero] = useState<string | null>(null)

    const selectHero = (heroName: string) => {
        setSelectedHero(selectedHeroName == heroName ? null : heroName)
    }

    const sortHeroesByClassName = () => {
        const map = new Map<ClassName, Array<Hero>>()
            .set(ClassName.strength, heroes.filter(h => h.className == ClassName.strength))
            .set(ClassName.agility, heroes.filter(h => h.className == ClassName.agility))
            .set(ClassName.intelligence, heroes.filter(h => h.className == ClassName.intelligence))
        return map
    }

    const sortedHeroes = useMemo(sortHeroesByClassName, [])

    return (
        <>
            <input type="text" id="search" placeholder="Search..." />
            <HeroesSelectSection
                sectionClass={ClassName.strength}
                heroes={sortedHeroes.get(ClassName.strength)}
                selectedHeroName={selectedHeroName}
                selectHero={selectHero} />
            <HeroesSelectSection
                sectionClass={ClassName.agility}
                heroes={sortedHeroes.get(ClassName.agility)}
                selectedHeroName={selectedHeroName}
                selectHero={selectHero} />
            <HeroesSelectSection
                sectionClass={ClassName.intelligence}
                heroes={sortedHeroes.get(ClassName.intelligence)}
                selectedHeroName={selectedHeroName}
                selectHero={selectHero} />
        </>
    )
}

export default Search