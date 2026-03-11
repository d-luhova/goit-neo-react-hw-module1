import userData from "./userData.json";
import { Profile } from "./components/Profile/Profile.jsx";
import friends from "./components/Friends/friends.json";
import { FriendList } from "./components/Friends/FriendList"
import transactions from "./components/TransactionHistory/transactions.json";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory.jsx";


function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App
