import TheNav from '../../components/NavBar';
import {Button } from 'antd';
import {Link} from 'react-router-dom';

function Abutton(){
    return (
        <>
        <Button ><Link to="/add">Add Recipe</Link></Button>
        </>
    )
};
function Home () {
 
    return(
      <>
        <TheNav
          add ={<Abutton/>}
        
          />
      </>
    )
};

export default Home;