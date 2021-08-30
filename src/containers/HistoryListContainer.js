import React from 'react';
import { connect } from 'react-redux';
import HistoryList from '../components/HistoryList';

class HistoryListContainer extends React.Component {
    render(){
        return(
            <div>
                <HistoryList searchHistory={this.props.searchHistory} />
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        searchHistory: state.searchHistory
    }
}

export default connect(mapStateToProps)(HistoryListContainer)