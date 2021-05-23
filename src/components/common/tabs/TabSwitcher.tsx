import React, { useState } from 'react'

interface Props {
    children: (setActiveTab: React.Dispatch<React.SetStateAction<number>>) => React.ReactNode;
}

type ContextData = {
    activeTab: number
    setActiveTab: (tab: number) => void
}

export const TabsContext = React.createContext<ContextData | undefined>(undefined)

export const TabSwitcher: React.FC<Props> = ({ children }) => {
    const [activeTab, setActiveTab] = useState<number>(1)

    return(
        <TabsContext.Provider value={{activeTab, setActiveTab}}>
            {children(setActiveTab)}
        </TabsContext.Provider>
    )
}