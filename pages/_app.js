import 'antd/dist/antd.css';
import Head from 'next/head';

import wrapper from '../store/configureStore';

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

export default wrapper.withRedux(App);
