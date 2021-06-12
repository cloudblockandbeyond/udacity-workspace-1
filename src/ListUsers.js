import React from "react";

class ListUsers extends React.Component{
	render(){
      return(
        <ol>
        {this.props.users.map((user) => (<li key={user.id}>{user.name}</li>))}
        </ol>
      );
    }
}

export default ListUsers;