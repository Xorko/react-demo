import Page from 'components/Page';
import CounterTemplate from 'templates/CounterTemplate';

function Counter(): React.ReactElement {
  return (
    <Page title="React demo - Counter" description="Counter">
      <CounterTemplate />
    </Page>
  );
}

export default Counter;
