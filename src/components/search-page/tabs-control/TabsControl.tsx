import React from 'react'

type OwnProps = {
    setActiveTab: React.Dispatch<React.SetStateAction<number>>
}

const TabsControl: React.FC<OwnProps> = ({setActiveTab}) => {

    return(
        <>
            <button onClick={setActiveTab.bind(null, 1)}>Heroes</button>
            <button onClick={setActiveTab.bind(null, 2)}>Quality</button>
            <button onClick={setActiveTab.bind(null, 3)}>Rarity</button>
            <button onClick={setActiveTab.bind(null, 4)}>Slot</button>
            <button onClick={setActiveTab.bind(null, 5)}>Type</button>
        </>
    )
}

export default TabsControl