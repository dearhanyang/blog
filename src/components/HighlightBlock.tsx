const HighlightBlock = ({ children, color }) => (
  <div
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </div>
);

export default HighlightBlock;