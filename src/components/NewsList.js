import React from 'react';
import NewsArticle from '../components/NewsArticle.js'

class SearchList extends React.Component {
    render() {
        return(
            <div>
                <h1 className="p-4">
                    News List
                </h1>

                <ul className="p-4">
                    {this.props.newsList.map(story => 
                        <li className="py-5">
                            <NewsArticle article={story}/>
                        </li>
                        )
                    }

                </ul>
            </div>
        )
    }

}

export default SearchList;