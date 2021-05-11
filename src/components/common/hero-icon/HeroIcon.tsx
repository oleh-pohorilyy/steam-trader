import React from 'react'
import { ClassName } from '../../../types/ClassName'
import { Hero } from '../../../types/Hero'
import styles from './HeroIcon.module.css'

type OwnProps = {
    hero: Hero
    selectHero: (heroName: string) => void
    selected: boolean
}

const HeroIcon: React.FC<OwnProps> = ({hero, selectHero, selected}) => {
    return(
        <div className={`my-1 ${selected ? styles.selected : ''} gx-2 col-1 ${styles.container}`} onClick={() => selectHero(hero.name)}>
            <img className={styles.img} src={require(`../../../assets/heroes/${hero.img}`).default}  />
            <div className={styles.name}>
                {hero.name}
            </div>
        </div>
    )
}

export default HeroIcon