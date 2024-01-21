import './bar.scss';

interface BarProps {
  contentIndex: number;
}

function Bar({ contentIndex }: BarProps) {
  return (
    <div className="Bar">
      <div className={`bar-num ${contentIndex === 0 ? 'bar-active' : ''}`}>
        {contentIndex > 0 ? '✔' : '1'}
      </div>
      <div className={`bar-num ${contentIndex === 1 ? 'bar-active' : ''}`}>
        {contentIndex > 1 ? '✔' : '2'}
      </div>
      <div className={`bar-num ${contentIndex === 2 ? 'bar-active' : ''}`}>
        {contentIndex > 2 ? '✔' : '3'}
      </div>
    </div>
  );
}

export default Bar;
