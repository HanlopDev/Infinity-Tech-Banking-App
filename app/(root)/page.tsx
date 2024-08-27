import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = {firstName: "Creator", lastName:"JSM", email:"ceator@bank.com"};

  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={2130.32}
          />
        </header>
        {/* Recent transactions */}
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[{},{}]}/>
    </section>
  )
}

export default Home
