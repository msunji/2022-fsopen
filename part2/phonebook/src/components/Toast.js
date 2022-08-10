const Toast = ({ message }) => {
  if (message === null) return null;

  return (
    <div className="toast">
      {message}
    </div>
  )
}

export default Toast;