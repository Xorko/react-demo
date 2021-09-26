import Head from 'next/head';
import WithDefaultGlobalStyles from 'components/WithDefaultGlobalStyles';
import Navbar from 'components/Navbar';

type PageProps = PropsWithChildren & {
  title: string;
  description: string;
};

function Page({ title, description, children }: PageProps): React.ReactElement {
  return (
    <WithDefaultGlobalStyles>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      {children}
    </WithDefaultGlobalStyles>
  );
}

export default Page;
