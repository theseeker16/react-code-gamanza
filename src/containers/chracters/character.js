import React,{ Component } from 'react';
import Axios from 'axios';
import CharacterPost from '../../components/character-post/CharacterPost';
import './character.css';

class Character extends Component {
  constructor(props){
    super(props);

    this.state = {
      characters: [],
      visible: 6,
    }

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore = () => {
    this.setState((prev) => {
      console.log(prev);
      return {visible: prev.visible + 6}
    })
  }

  componentDidMount() {

    Axios.get('https://breakingbadapi.com/api/characters')
      .then(result => {
          this.setState({characters: result.data});
      })
  }

  render () {
    const characters = this.state.characters.slice(0,this.state.visible).map(character => {
      return (<CharacterPost key={character.char_id}
        img={character.img}
        name={character.name}
        occupation={character.occupation}
        status={character.status}
        birthday={character.birthday}
       portrayed={character.portrayed}/>
      )
    });
    return (
      <div className="container-fluid">
        <div className="row">
          {characters}
        </div>
        {this.state.visible < this.state.characters.length &&
        <button onClick={this.loadMore} type="button" className="load-more">Load more</button>}
      </div>

    );
  }
}


  export default Character;




