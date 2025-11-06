import FriendListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css";

export default function FriendList({ friends }) {
	return (
		<ul className={style.friend_list}>
			{friends.map((friend, idx) => {
				return (
					<li key={idx}>
						<FriendListItem friend={friend} />
					</li>
				);
			})}
		</ul>
	);
}
