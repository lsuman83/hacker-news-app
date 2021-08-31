


export default function HistoryList({ searchHistory }) {
    return(
        <div>
            <h1 className="p-4 font-bold">
                Search History
            </h1>
            <ul className="p-4 italic">
                {searchHistory.map(searchItem => 
                    <li>
                        {searchItem}
                    </li>)}
            </ul>
        </div>
    )
}

