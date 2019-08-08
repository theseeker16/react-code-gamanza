import React from 'react';
import './CharacterPost.css';

const characterPost = (props) => {
  return (
    <div className="col-4">
      <div className="card " style={{width: '18rem'}} >
        <img src={props.img} className="card-img-top imgPreview" alt="..."/>
        <div className="card-body">
          <p className="card-text">Name: {props.name}</p>
          <p className="card-text">Occupation: {props.occupation}</p>
          <p className="card-text">Status: {props.status}</p>
          <p className="card-text">Birthday: {props.birthday}</p>
          <p className="card-text">Portrayed: {props.portrayed}</p>
        </div>
      </div>
    </div>
  );
}
export default characterPost;