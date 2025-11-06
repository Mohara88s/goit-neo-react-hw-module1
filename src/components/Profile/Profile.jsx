import style from "./Profile.module.css";

export default function Profile({
	name,
	tag,
	location,
	image,
	stats: { followers, views, likes },
}) {
	return (
		<div className={style.profile}>
			<div className={style.profile_info}>
				<img className={style.profile_picture} src={image} alt="User avatar" />
				<p className={style.profile_name}>{name}</p>
				<p className={style.profile_tag}>@{tag}</p>
				<p className={style.profile_location}>{location}</p>
			</div>

			<ul className={style.profile_stats}>
				<li>
					<span>Followers</span>
					<span>{followers}</span>
				</li>
				<li>
					<span>Views</span>
					<span>{views}</span>
				</li>
				<li>
					<span>Likes</span>
					<span>{likes}</span>
				</li>
			</ul>
		</div>
	);
}
