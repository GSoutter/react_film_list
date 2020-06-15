import React, {Component, Fragment} from 'react';
import FilmItem from './FilmItem.js'

const FilmList = (props) => {

  const filmNodes = props.films.map((film) => {
    return <FilmItem film= {film} key={film.id} />
  });

  return (
    <Fragment>
      {filmNodes}
      <footer> <a href="https://www.imdb.com/calendar/?region=gb">View More Upcoming Films</a></footer>
    </Fragment>
  )

}

export default FilmList;
