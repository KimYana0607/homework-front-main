import {CurrentUser} from './CurrentUser';
import {UsersObjectType} from './HW2';

export type UserList2PropsType = {
	users: usersType // пропиши типизацию
	filterUsers: any // пропиши типизацию
};

export type usersType = {
    myFriends: myFriendsType[]
}

export type myFriendsType = {
    id: string
    name: string
    age: number
    address: addressType
}

type addressType = {
    street: string
    city: string
}


export const UserList2 = (props: UserList2PropsType) => {
	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={() => props.filterUsers()}>SHOW ME FRIENDS FROM LA</button>

			<ul>
			  {props.users.myFriends.map((user) => (
                  <CurrentUser user={user} />
			    // <ВЫЗЫВАЕМ КОМПОНЕНТУ CurrentUser />
			  ))}
			</ul>
		</div>
	);
};
