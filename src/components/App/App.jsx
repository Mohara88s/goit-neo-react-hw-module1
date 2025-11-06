import Section from "../Section/Section";
import Container from "../Container/Container";
import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import userData from "../../data/userData.json";
import friends from "../../data/friends.json";
import transactions from "../../data/transactions.json";

export default function App() {
	return (
		<>
			<Section>
				<Container>
					<Profile
						name={userData.username}
						tag={userData.tag}
						location={userData.location}
						image={userData.avatar}
						stats={userData.stats}
					/>
				</Container>
			</Section>
			<Section>
				<Container>
					<FriendList friends={friends} />
				</Container>
			</Section>
			<Section>
				<Container>
					<TransactionHistory items={transactions} />
				</Container>
			</Section>
		</>
	);
}
