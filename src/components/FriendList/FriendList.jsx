import FriendListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css";

export default function FriendList({ friends }) {
	return (
		<ul className={style.friend_list}>
			{friends.map((friend) => {
				return (
					<li key={friend.id}>
						<FriendListItem friend={friend} />
					</li>
				);
			})}
		</ul>
	);
}
