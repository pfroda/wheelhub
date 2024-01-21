import { render, fireEvent } from '@testing-library/react';
import Button from '../../components/Button/Button';

test('Button calls function when clicked', () => {
  const onButtonClickMock = jest.fn();

  const { getByText } = render(
    <Button
      buttonText="Click me"
      buttonStyle="green-button"
      onButtonClick={onButtonClickMock}
    />,
  );

  const buttonElement = getByText('Click me');

  fireEvent.click(buttonElement);
  fireEvent.click(buttonElement);
  fireEvent.click(buttonElement);

  expect(onButtonClickMock).toHaveBeenCalledTimes(3);
});

test('Disabled buttons cant be clicked so they dont fire functions', () => {
  const buttonText = 'Siguiente';
  const buttonStyle = 'blue-button';
  const onButtonClickMock = jest.fn();
  const disabled = true;

  const { getByText } = render(
    <Button
      buttonText={buttonText}
      buttonStyle={buttonStyle}
      onButtonClick={onButtonClickMock}
      disabled={disabled}
    />,
  );

  const buttonElement = getByText(buttonText);

  fireEvent.click(buttonElement);

  expect(onButtonClickMock).not.toHaveBeenCalled();
});
