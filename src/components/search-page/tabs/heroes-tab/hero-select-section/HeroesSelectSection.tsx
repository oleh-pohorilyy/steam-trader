import React, { useContext } from 'react'
import { ClassName } from 'src/constants/ClassName'
import { DotaHero } from 'src/types/DotaHero'
import HeroIcon from 'src/components/common/hero-icon/HeroIcon'
import styles from './HeroesSelectSection.module.css'
import { SelectionHeroContext } from 'src/components/search-page/SelectionHeroContext'

type OwnProps = {
    sectionClass: ClassName
}

const HeroesSelectSection: React.FC<OwnProps> = ({sectionClass}) => {
    const dataContext = useContext(SelectionHeroContext)
    if(dataContext === undefined) throw new Error("SelectionContext must be used within provider")
    const { heroes, selectedHeroName, selectHero } = dataContext
    
    return(
        <div className="d-flex my-4">
            <div className={styles["class-icon"]}>
                <img src={require(`src/assets/hero_${ClassName[sectionClass]}.png`).default} />
            </div>
            <div className="row gx-0">
            {
                heroes && 
                    heroes.get(sectionClass)!.map(h => 
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