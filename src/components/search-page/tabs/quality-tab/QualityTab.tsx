import React, { useCallback } from 'react'
import { DotaItemQuality } from 'src/constants/ItemQuality'

interface Props {
    selectedQualities: Set<DotaItemQuality>;
    selectQuality: (quality: DotaItemQuality) => void
}

interface QualityButtonProps {
    quality: DotaItemQuality;
    onSelect: (quality: DotaItemQuality) => void;
    isSelected: boolean;
}

const QualityButton: React.FC<QualityButtonProps> = ({quality, isSelected, onSelect}) => {

    const getClassName = useCallback(() => {
        switch(quality){
            case DotaItemQuality.Standard: return isSelected ? "btn-secondary" : "btn-outline-secondary"
            case DotaItemQuality.Inscribed: return isSelected ? "btn-warning" : "btn-outline-warning"
            case DotaItemQuality.Autographed: return isSelected ? "btn-success" : "btn-outline-success"
        }
    }, [isSelected])

    return(
        <button onClick={() => onSelect(quality)} className={`btn ${getClassName()}`}>
            {quality}
        </button>
    )
}

export const QualityTab: React.FC<Props> = ({selectedQualities, selectQuality}) => {

    return(
        <div>
            {
            Object.values(DotaItemQuality)
                .map(q => <QualityButton 
                            quality={q} 
                            isSelected={selectedQualities.has(q)} 
                            onSelect={selectQuality}/>)
            }
        </div>
    )
}