import type { NextPage } from 'next';
import Page from 'components/Page';
import NewPostTemplate from 'templates/NewPostTemplate';

const NewProduct: NextPage = () => {
  return (
    <Page title="React demo - New post" description="New post">
      <NewPostTemplate />
    </Page>
  );
};

export default NewProduct;
