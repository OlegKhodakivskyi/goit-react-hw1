import React from "react";
import Profile from "./Profile/Profile";
import user from "../Data/user.json";
import Statistics from "./Statistics/Statistics"
import statisticalData from '../Data/statisticalData.json'
import FriendList from './FriendList/FriendList'
import friends from '../Data/friends.json'
import TransactionHistory from '../Components/TransactionHistory/TransactionHistory'
import transactions from '../Data/transactions.json'


const App = () => {
  return (
    <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      
    <Statistics
      title="Upload stats"
      stats={statisticalData}
      />

    <FriendList
        friends={friends}
      />

      <TransactionHistory
        items={transactions}
      />
      </>
  )
};

export default App;
