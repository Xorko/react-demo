import type { NextPage } from 'next';
import Page from 'components/Page';
import LandingPageTemplate from 'templates/LandingPageTemplate';

const Home: NextPage = () => {
  return (
    <Page title="React demo" description="React demo">
      <LandingPageTemplate />
    </Page>
  );
};

export default Home;
