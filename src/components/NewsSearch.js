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
                    className="px-2 border-black border x-4" 
                    type="text"  
                    name="searchCriteria" 
                    value={this.state.newsSearchValue}
                    placeholder="Search News..." 
                    onChange={this.handleChange}
                    />
                <button className="ml-4 px-4 bg-black text-white" type='submit'>
                    Search
                </button>
            </form>
        )
    }
}

export default NewsSearch