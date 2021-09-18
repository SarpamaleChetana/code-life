import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar/SearchBar';
import ImageList from './ImageList/ImageList';

class App extends React.Component {

     state = { images: [] };
     onSearchSubmit = async (term) => {
          // axios.get('https://api.unsplash.com/search/photos', {
          //      params: {query: term},
          //      headers: {
          //           Authorization: 'Client-ID SpmFdiBTxaNBldNrwKStXoq1J5oksnpLZEHolSmx0kI'
          //      }

          // }).then((result) => {
          //      console.log(result.data.results);
          // });
          const response = await unsplash.get('/search/photos', {
               params: { query: term }
          });
          this.setState({ images: response.data.results });
     }
     render() {
          return (
               <div className="ui container" style={{ marginTop: '10px' }}>
                    <SearchBar onSearchSubmit={this.onSearchSubmit} />
                    <ImageList images = {this.state.images}/>
               </div>
          )
     }
}

export default App;