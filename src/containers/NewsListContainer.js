import React from 'react';
import { connect } from 'react-redux';

import NewsList from '../../src/components/NewsList';
import NewsSearch from '../../src/components/NewsSearch';

class NewsListContainer extends React.Component {

    state={
        newsList: []
    }

    handleSearch = (query) => {
    
        const url = `http://hn.algolia.com/api/v1/search?query=${query}&tags=story`;

        fetch(url)
            .then(resp => resp.json())
            .then(searchData => {
                const newsList = searchData.hits
                this.setState({newsList})
            })
            
            this.props.dispatch({type: 'ADD_SEARCH', query: query})

    }

    
    render() {
        return(
            <div>
                <NewsSearch newsSearch={this.handleSearch} />
                <NewsList newsList={this.state.newsList} />
            </div>
        )
    }

}

export default connect()(NewsListContainer);