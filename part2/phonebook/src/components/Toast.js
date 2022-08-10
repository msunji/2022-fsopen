const Toast = ({ message, errorState }) => {
  if (message === null) return null;

  return (
    <div className={`toast ${errorState ? 'toast-error' : 'toast-success'}`}>
      {message}
    </div>
  )
}

export default Toast;