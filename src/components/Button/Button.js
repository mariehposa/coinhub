import { StyledButton } from "./styles";

const Button = ( props ) => {
	return <StyledButton {...props} >{props.children}</StyledButton>;
};

export default Button;
