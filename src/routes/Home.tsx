import { UserProps } from "../Types/user";
import Search from "../componentes/Search/Search";
import { useState } from 'react';
import User from "../componentes/User/User";
import Error from "../componentes/Error/Error";



const Home = () => {

  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    if (res.status === 404) {
      setError(true);
      return;
    }

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    };

    setUser(userData);

  }

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User{...user} />}
      {error && <Error />}
    </div>
  )
}

Home.propTypes = {}

export default Home