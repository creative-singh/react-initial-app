const Button = (props) => {

  return (
    <button onClick={props.functionName}>{props.symbol}</button>
  )
}

export default Button;