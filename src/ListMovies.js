import React from "react";

class ListMovies extends React.Component{
	render(){
    	return(
          <ol>
          {this.props.movies.map((movie) => (<li key={movie.id}>{movie.name}</li>))}
          </ol>
        );
    }
}

export default ListMovies