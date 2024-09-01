function ResetBtn({ count, onClick }) {
  return (
    <div>
      {count > 0 && (
        <div>
          <button onClick={onClick} style={{ backgroundColor: 'lightgreen' }}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default ResetBtn;
