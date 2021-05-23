import React, { useContext } from 'react'
import { TabsContext } from './TabSwitcher'

interface Props {
    id: number
    children: React.ReactNode
}

export const Tab: React.FC<Props> = ({children, id}) => {
    const tabContext = useContext(TabsContext)

    if(tabContext === undefined) throw new Error("Tab must be used within a TabSwitcher!")

    return tabContext.activeTab === id ? <>{children}</> : null
}