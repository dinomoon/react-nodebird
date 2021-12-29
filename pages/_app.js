import 'antd/dist/antd.css';
import Head from 'next/head';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

export default App;
