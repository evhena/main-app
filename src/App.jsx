import './App.css';
import Button from 'platform/Button';
import AccountsApp from 'accounts/AccountsApp';

function App() {
  return (
    <div className="App">
      <h1>Main Application</h1>
      <Button />
      <AccountsApp />

      <div className="card">here should be links to pages</div>
    </div>
  );
}

export default App;
