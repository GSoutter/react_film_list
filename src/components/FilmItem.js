import React, {Component} from 'react';

const FilmItem = (props) => {


    return (
      <div>
        <li><a href={props.film.url}>{props.film.name}</a></li>
      </div>
    )

}

export default FilmItem;
