import React from 'react'
import { ClassName } from 'src/constants/ClassName'
import { DotaHero } from 'src/types/DotaHero'
import HeroesSelectSection from './hero-select-section/HeroesSelectSection'

interface OwnProps {
    heroes: Map<ClassName, Array<DotaHero>>;
    selectedHeroName: string | null;
    selectHero: (heroName: string) => void;
}

const HeroesTab: React.FC<OwnProps> = ({heroes, selectedHeroName, selectHero}) => {
    return(
        <>
            <HeroesSelectSection
                sectionClass={ClassName.strength}
                heroes={heroes.get(ClassName.strength)}
                selectedHeroName={selectedHeroName}
                selectHero={selectHero} />
            <HeroesSelectSection
                sectionClass={ClassName.agility}
                heroes={heroes.get(ClassName.agility)}
                selectedHeroName={selectedHeroName}
                selectHero={selectHero} />
            <HeroesSelectSection
                sectionClass={ClassName.intelligence}
                heroes={heroes.get(ClassName.intelligence)}
                selectedHeroName={selectedHeroName}
                selectHero={selectHero} />
        </>
    )
}

export default HeroesTab