import React from 'react';
import './UserCardList.css';
import UserCard from './UserCard';

const UserCardList = (props) => {
    const { userCardList } = props;
    return (  
        <div className="UserCardList">
            {userCardList.map(userData => (
                <li key={userData.id}>
                    <UserCard userCard={userData}/> 
                </li>
            ))}
        </div>
    );
}
 
export default UserCardList