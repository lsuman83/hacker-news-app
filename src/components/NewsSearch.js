import React from 'react';



class NewsSearch extends React.Component {

    state = {
        newsSearchValue: ''
    }

    handleChange = (event) => {
        this.setState({
            newsSearchValue: event.target.value
        })
    }

    handleSearch = (event) => {
        event.preventDefault();

        this.props.newsSearch(this.state.newsSearchValue)
    }

    render(){
        return(
            <form className="p-4" onSubmit={this.handleSearch}>
                <input 
                    className="outline-black x-4" 
                    type="text"  
                    name="searchCriteria" 
                    value={this.state.newsSearchValue}
                    placeholder="Search News..." 
                    onChange={this.handleChange}
                    />
                <button className="ml-4 px-4 opacity-200" type='submit'>
                    Search
                </button>
            </form>
        )
    }
}

export default NewsSearch