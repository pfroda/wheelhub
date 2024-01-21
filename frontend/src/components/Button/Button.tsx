interface ButtonProps {
  buttonText: string;
  buttonStyle: string;
  onButtonClick: () => void;
  disabled?: boolean | undefined;
}

function Button({
  buttonText,
  buttonStyle,
  disabled,
  onButtonClick,
}: ButtonProps) {
  return (
    <button
      className={buttonStyle}
      disabled={disabled}
      onClick={onButtonClick}
      type="button"
    >
      {buttonText}
    </button>
  );
}

export default Button;
