import React from "react";

class ListProfiles extends React.Component{
	render(){
    	return(
        	<ol>
              {this.props.profiles.map((profile) => (<li key={profile.id}>UserId: {profile.userID}
					FavoriteMovieID: {profile.favoriteMovieID}</li>))}
          	</ol>
        );
    }
}

export default ListProfiles;