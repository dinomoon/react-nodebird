import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Profile = () => {
  return (
    <>
      <Head>
        <title>profile | NodeBird</title>
      </Head>
      <AppLayout>
        <h1>Profile Page</h1>
      </AppLayout>
    </>
  );
};

export default Profile;
