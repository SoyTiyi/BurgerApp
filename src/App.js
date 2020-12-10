import './App.css';
import Layout from './components/Layout/Layout';
import BurguerBuilder from './containers/BurguerBuilder';
import {Container} from './style/componentsStyle';
function App() {
  return (
    <Container>
      <Layout>
        <BurguerBuilder/>
      </Layout>
    </Container>
  );
}

export default App;
