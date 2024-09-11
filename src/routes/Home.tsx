import { UserProps } from "../Types/user";
import Search from "../componentes/Search/Search";
import { useState } from 'react';
import User from "../componentes/User/User";
import { Error } from "../componentes/Error/Error";
import { ifError } from "assert";


const Home = () => {

  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    if (res.status === 400) {
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
    </div>
  )
}

Home.propTypes = {}

export default Home