import React from 'react'

type OwnProps = {
    setQueryText: React.Dispatch<React.SetStateAction<string>>
    queryText: string
    sendRequest: () => void
}

const SearchInput: React.FC<OwnProps> = ({ queryText, setQueryText, sendRequest }) => {

    return(
        <>
        <input 
            onChange={(e) => setQueryText(e.target.value)} 
            value={queryText} 
            type="text" 
            id="search" 
            placeholder="Search..." />
        <button onClick={sendRequest}>GO!</button>
        </>
    )
}

export default SearchInput