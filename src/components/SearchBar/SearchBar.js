import React from 'react';

class SearchBar extends React.Component {

    state = { 
        term: ''
    }
    // onInputChange(event) {
    //     console.log(event.target.value);

    // }

    onFormSubmit =(e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" 
                            value = {this.state.term}
                            //onChange={this.onInputChange}>
                            onChange={(e) => {this.setState({ term: e.target.value})}}>
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar