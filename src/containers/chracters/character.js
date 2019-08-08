import React,{ Component } from 'react';
import Axios from 'axios';
import CharacterPost from '../../components/character-post/CharacterPost';
import './character.css';

class Character extends Component {
  constructor(props){
    super(props);

    this.state = {
      characters: [],
      offset: 0,
      visible: 6,
    }

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore = async () => {
    await this.setState((prev) => {
      console.log(prev);
      return {offset: prev.offset + 6, visible: prev.visible + 6}
    })
    this.getData();

  }

  componentDidMount() {
    this.getData();
  }

  getData(){
    let visitble = this.state.visible;
    let offsetChar = this.state.offset;
    Axios.get('https://breakingbadapi.com/api/characters',{
      params: {
        limit:visitble,offset:offsetChar
      }
    })
    .then(result => {
      console.log(result);
        this.setState({characters: result.data});
    })
  }

  render () {
    const characters = this.state.characters.map(character => {
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
        {this.state.offset < this.state.characters.length &&
        <button onClick={this.loadMore} type="button" className="load-more">Load more</button>}
      </div>

    );
  }
}


  export default Character;




