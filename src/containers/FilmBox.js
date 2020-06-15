import React, {Component} from 'react';
import FilmList from '../components/FilmList.js';

class FilmBox extends Component {


  render(){
    return (
      <div>
        <h2>This is FilmBox</h2>
        <FilmList/>
      </div>
    )
  }
}


export default FilmBox
