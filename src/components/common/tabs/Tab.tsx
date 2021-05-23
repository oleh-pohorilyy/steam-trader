import React, { useContext } from 'react'
import { TabsContext } from './TabSwitcher'

interface Props {
    id: number
    component?: React.ReactNode
    render?: () => React.ReactNode
}

export const Tab: React.FC<Props> = ({render, component, id}) => {
    const tabContext = useContext(TabsContext)

    if(render === undefined && component === undefined) throw new Error("Nothing to render!")
    if(tabContext === undefined) throw new Error("Tab must be used within a TabSwitcher!")

    const componentToRender: React.ReactNode = component ?? render!()

    return tabContext.activeTab === id ? <>{componentToRender}</> : null
}