import React from 'react'
import { ClassName } from 'src/constants/ClassName'
import { DotaHero } from 'src/types/DotaHero'
import HeroIcon from 'src/components/common/hero-icon/HeroIcon'
import styles from './HeroesSelectSection.module.css'

type OwnProps = {
    heroes: Array<DotaHero>|undefined
    sectionClass: ClassName
    selectedHeroName: string|null
    selectHero: (heroName: string) => void
}

const HeroesSelectSection: React.FC<OwnProps> = ({heroes, selectedHeroName, sectionClass, selectHero}) => {
    return(
        <div className="d-flex my-4">
            <div className={styles.classIcon}>
                <img src={require(`../../../../assets/hero_${ClassName[sectionClass]}.png`).default} />
            </div>
            <div className="row gx-0">
            {
                heroes && 
                    heroes.map(h => 
                        <HeroIcon 
                            selected={selectedHeroName==h.name} 
                            hero={h} 
                            selectHero={selectHero}/>)
            }
            </div>
        </div>
    )
}

export default HeroesSelectSection