import React,{ Component } from 'react';
import Axios from 'axios';
import CharacterPost from '../../components/character-post/CharacterPost';

class Character extends Component {
  state = {
    characters: []
  }

  componentDidMount() {

    Axios.get('https://breakingbadapi.com/api/characters')
      .then(result => {
          console.log(result.data);
          this.setState({characters: result.data});
      })
  }

  render () {
    const characters = this.state.characters.map(character => {
      return <CharacterPost key={character.char_id}
        img={character.img}
        name={character.name}
        occupation={character.occupation}
        status={character.status}
        birthday={character.birthday}
        portrayed={character.portrayed}/>
    })
    return (
      <div className="container-fluid">
        <div className="row">
          {characters}
        </div>
      </div>
    )
  }

}

export default Character;