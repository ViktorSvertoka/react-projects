import { useContext } from 'react';
import UserContext from '../context/UserContext';

function ChangeUser() {
  const { user, setUser } = useContext(UserContext);
  return (
    <button onClick={() => setUser(user === 'Evan' ? 'Alice' : 'Evan')}>
      Change User
    </button>
  );
}

export default ChangeUser;
