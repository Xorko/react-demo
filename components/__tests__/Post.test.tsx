import Post from 'components/Post';
import { render, screen, cleanup } from 'test/test-utils';
import faker from 'faker';

const postData: Post = {
  userId: faker.datatype.number(),
  id: faker.datatype.number(),
  title: faker.lorem.words(),
  body: faker.lorem.paragraph(),
};

afterEach(cleanup);

it('displays correct data', () => {
  render(<Post data={postData} />);

  const title = screen.getByText(postData.title);
  const body = screen.getByText(postData.body);

  expect(title).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});
