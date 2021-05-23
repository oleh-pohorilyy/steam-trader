import React from 'react'

type OwnProps = {
    setQueryText: React.Dispatch<React.SetStateAction<string>>
    queryText: string
    sendRequest: () => void
}

const SearchInputField: React.FC<OwnProps> = ({ queryText, setQueryText, sendRequest }) => {

    return(
        <div className="d-flex">
            <input 
                onChange={(e) => setQueryText(e.target.value)} 
                className="flex-grow"
                value={queryText} 
                type="text" 
                id="search" 
                placeholder="Search..." />
            <button className="btn btn-primary" onClick={sendRequest}>Search</button>
        </div>
    )
}

export default SearchInputField