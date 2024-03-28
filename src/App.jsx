import Profile from "./components/profile/Profile";
import FriendList from "./components/friendList/FriendList";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import userData from "./assets/userData.json"
import friends from "./assets/friends.json"
import transactions from "./assets/transactions.json"
import "modern-normalize"
import "./index.css"




const App = () => {

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends}
      />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App
