import React, {Component} from 'react';

const FilmItem = (props) => {


    return (
      <div class="film-item">
        <a href={props.film.url}>{props.film.name}</a>
      </div>
    )

}

export default FilmItem;
