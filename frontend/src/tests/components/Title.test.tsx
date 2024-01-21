import { render } from '@testing-library/react';
import Title from '../../components/Title/Title';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

test('Title component renders correct title and has class', () => {
  const { getByText, container } = render(<Title />);

  const titleElement = getByText('Test Frontend Wheel Hub');
  expect(titleElement).toBeInTheDocument();

  const titleContainer = container.querySelector('.Title');
  expect(titleContainer).toHaveClass('Title');
});
