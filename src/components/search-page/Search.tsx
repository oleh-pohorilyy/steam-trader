import React, { useMemo, useState } from 'react'
import { dotaHeroes, ClassName } from 'src/constants'
import styles from './Search.module.css'
import { DotaHero, AppStateType } from 'src/types'
import HeroesSelectSection from './heroes-tab/hero-select-section/HeroesSelectSection'
import SearchInput from './search-input/SearchInput'
import SearchTabs from './search-tabs/SearchTabs'
import HeroesTab from './heroes-tab/HeroesTab'
import { connect, ConnectedProps } from 'react-redux'
import { searchItems } from 'src/redux/thunks'
import { TabSwitcher, Tab } from 'src/components/common/tabs'


const Search: React.FC<Props> = ({searchItems, items}) => {
    
    const [selectedHeroName, setSelectedHero] = useState<string | null>(null)
    const [selectedType, setSelectedType] = useState(null)
    const [selectedSlot, setSelectedSlot] = useState(null)
    const [selectedQuality, setSelectedQuality] = useState(null)
    const [selectedRarity, setSelectedRarity] = useState(null)
    const [queryText, setQueryText] = useState('')

    const selectHero = (heroName: string) => {
        setSelectedHero(selectedHeroName == heroName ? null : heroName)
    }

    const sortHeroesByClassName = () => {
        const map = new Map<ClassName, Array<DotaHero>>()
            .set(ClassName.strength, dotaHeroes.filter(h => h.className == ClassName.strength))
            .set(ClassName.agility, dotaHeroes.filter(h => h.className == ClassName.agility))
            .set(ClassName.intelligence, dotaHeroes.filter(h => h.className == ClassName.intelligence))
        return map
    }

    const sortedHeroes = useMemo(sortHeroesByClassName, [])

    const sendRequest = () => {
        searchItems({
            count: 10,
            start: 0,
            heroes: selectedHeroName ? [dotaHeroes.find(h => h.name===selectedHeroName)!.pseudonym] : undefined
        })
    }

    return (
        <>
            <SearchInput sendRequest={sendRequest} setQueryText={setQueryText} queryText={queryText} />
            
            <TabSwitcher>
            { setActiveTab => <>
                <SearchTabs setActiveTab={setActiveTab}/>
                <Tab 
                    id={1} 
                    render={() => <HeroesTab heroes={sortedHeroes} selectHero={selectHero} selectedHeroName={selectedHeroName}/>}/>
            </>}
            </TabSwitcher>

            {items.length && console.log(items)}
        </>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        items: state.items
    }
}

const connector = connect(mapStateToProps, {searchItems})
type Props = ConnectedProps<typeof connector>

export default connector(Search)