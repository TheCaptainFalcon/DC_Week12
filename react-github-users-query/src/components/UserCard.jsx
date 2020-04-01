import React from 'react';
import './UserCard.css';

const UserCard = (props) => {
    const { userCard } = props;

    return (  
        <div className="UserCard">
            <img src={userCard.avatar_url} alt={userCard.login}/>
        </div>
    );
}
 
export default UserCard;