import { Outlet } from 'react-router-dom';
import background from "./img/bgcontainer.webp";
import classes from "./App.module.css";



const styles = {
  header: {
    backgroundImage: `url(${background})`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },

}


function App() {
  return (
    <div style={styles.header}>
      <div className={classes.app}>
        <h1 className={classes.app_title}>Github Finder</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
