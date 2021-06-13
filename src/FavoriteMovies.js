import React, { Component } from 'react';

class FavoriteMovies extends Component {
    render() {
        const { profiles, users, movies } = this.props;
        
        return (
            <div>
                <ul>
                    { profiles.map((profile) => {
                        const userName = users[profile.userID].name;
                        const movieName = movies[profile.favoriteMovieID].name;

                        return(
                            <li key={ profile.id }>
                                <p>{`${userName}'s favotite movie is "${movieName}".`}</p>
                            </li>
                        );
                    }) }
                </ul>
            </div>
        );
    }
}

export default FavoriteMovies;