import Comment from 'components/Comment';
import { render, screen, cleanup } from 'test/test-utils';
import faker from 'faker';

const commentData: PostComment = {
  postId: faker.datatype.number(),
  id: faker.datatype.number(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  body: faker.lorem.paragraph(),
};

afterEach(cleanup);

it('displays correct data', () => {
  render(<Comment data={commentData} />);

  const name = screen.getByText(commentData.name);
  const email = screen.getByText(commentData.email);
  const body = screen.getByText(commentData.body);

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});
