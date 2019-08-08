import React,{ Component } from 'react';
import Axios from 'axios';


class Character extends Component {

  componentDidMount() {
    const characters = Axios.get('https://breakingbadapi.com/api/characters').then(result => {
      console.log(result);
    })
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
             <button type="button" className="btn btn-primary">Primary</button>
          </div>
        </div>
      </div>
    )
  }

}

export default Character;