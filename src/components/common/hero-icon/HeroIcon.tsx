import React from 'react'
import { DotaHero } from 'src/types'
import styles from './HeroIcon.module.css'

interface OwnProps {
    hero: DotaHero;
    selectHero: (heroName: string) => void;
    selected: boolean;
}

const HeroIcon: React.FC<OwnProps> = ({hero, selectHero, selected}) => {
    return(
        <div className={`my-1 ${selected ? styles.selected : ''} gx-2 col-1 ${styles.container}`} onClick={() => selectHero(hero.name)}>
            <img className={styles.img} src={require(`../../../assets/heroes/${hero.imgName}`).default}  />
            <div className={styles.name}>
                {hero.name}
            </div>
        </div>
    )
}

export default HeroIcon