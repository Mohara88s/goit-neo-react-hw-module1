import style from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
	return (
		<div className={style.friend}>
			<img
				className={style.friend_avatar}
				src={avatar}
				alt="Avatar"
				width="48"
			/>
			<p>{name}</p>
			{isOnline ? (
				<p className={style.friend_status_online}>Online</p>
			) : (
				<p className={style.friend_status_offline}>Offline</p>
			)}
		</div>
	);
}
