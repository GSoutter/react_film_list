import React, {Component} from 'react';
import FilmItem from './FilmItem.js'

class FilmList extends Component {


  render(){
    return (
      <div>
        <h2>FilmList</h2>
        <FilmItem/>
        <FilmItem/>
        <FilmItem/>
        <FilmItem/>

        <footer> <a href="https://www.imdb.com/calendar/?region=gb">View More Upcoming Films</a></footer>
      </div>
    )
  }
}

export default FilmList;
