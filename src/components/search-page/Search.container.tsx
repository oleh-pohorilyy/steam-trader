import React, { useContext, useMemo, useState } from 'react'
import { dotaHeroes, ClassName } from 'src/constants'
import styles from './Search.module.css'
import { DotaHero, AppStateType, DotaItem, DotaSearchQuery } from 'src/types'
import SearchInputField from './search-input-field/SearchInputField'
import TabsControl from './tabs-control/TabsControl'
import { connect, ConnectedProps } from 'react-redux'
import { searchItems } from 'src/redux/thunks'
import { TabSwitcher, Tab } from 'src/components/common/tabs'
import { SelectionHeroContext, SelectionHeroContextData } from './SelectionHeroContext'
import { DotaItemQuality } from 'src/constants'
import {HeroesTab, RarityTab, SlotTab, TypeTab, QualityTab} from './tabs'


interface StateProps {
    items: Array<DotaItem>
}

interface DispatchProps {
    searchItems: (options: DotaSearchQuery) => void
}

type Props = StateProps & DispatchProps



const SearchContainer: React.FC<Props> = ({searchItems, items}) => {
    
    const [selectedHeroName, setSelectedHero] = useState<string | null>(null)
    //const [selectedType, setSelectedType] = useState(null)
    //const [selectedSlot, setSelectedSlot] = useState(null)
    const [selectedQualities, setSelectedQualities] = useState<Set<DotaItemQuality>>(new Set())
    //const [selectedRarity, setSelectedRarity] = useState(null)
    const [queryText, setQueryText] = useState('')

    const selectHero = (heroName: string) => {
        setSelectedHero(selectedHeroName == heroName ? null : heroName)
    }
    const selectQuality = (quality: DotaItemQuality) => {
        if(selectedQualities.has(quality)){
            selectedQualities.delete(quality)
        }else{
            selectedQualities.add(quality)
        }
        setSelectedQualities(new Set(selectedQualities))
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
        // searchItems({
        //     count: 10,
        //     start: 0,
        //     heroes: selectedHeroName ? [dotaHeroes.find(h => h.name===selectedHeroName)!.pseudonym] : undefined
        // })
    }

    const selectionContextData: SelectionHeroContextData = {
        heroes: sortedHeroes,
        selectedHeroName,
        selectHero
    }

    return (
        <>
            <SearchInputField sendRequest={sendRequest} setQueryText={setQueryText} queryText={queryText} />
            
            <TabSwitcher>
            { setActiveTab => <>
                <TabsControl setActiveTab={setActiveTab}/>
                <Tab id={1}>
                    <SelectionHeroContext.Provider value={selectionContextData}>
                        <HeroesTab />
                    </SelectionHeroContext.Provider>
                </Tab>
                <Tab id={2}>
                    <QualityTab selectQuality={selectQuality} selectedQualities={selectedQualities}/>
                </Tab>
                <Tab id={3}>
                    <RarityTab />
                </Tab>
                <Tab id={4}>
                    <SlotTab />
                </Tab>
                <Tab id={5}>
                    <TypeTab />
                </Tab>
            </>}
            </TabSwitcher>
        </>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, {searchItems})(SearchContainer)