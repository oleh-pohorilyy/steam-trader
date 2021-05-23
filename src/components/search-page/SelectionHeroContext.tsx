import React, { useState } from 'react'
import { ClassName } from 'src/constants'
import { DotaHero } from 'src/types'

export type SelectionHeroContextData = {
    selectedHeroName: string | null
    selectHero: (heroName: string) => void
    heroes: Map<ClassName, Array<DotaHero>>
}

export const SelectionHeroContext = React.createContext<SelectionHeroContextData | undefined>(undefined)