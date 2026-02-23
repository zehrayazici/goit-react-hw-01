import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css.app}>
      <header className={css.header}>
      </header>

      <main className={css.main}>
        <section className={css.section}>
          <h2 className={css.sectionTitle}>Profile</h2>
          <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats}
          />
        </section>

        <section className={css.section}>
          <h2 className={css.sectionTitle}>Friends</h2>
          <FriendList friends={friends} />
        </section>

        <section className={css.section}>
          <h2 className={css.sectionTitle}>Transaction History</h2>
          <TransactionHistory items={transactions} />
        </section>
      </main>
    </div>
  );
};

export default App;
