import React, {ButtonHTMLAttributes} from 'react';
import {Container} from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  expand?: boolean;
  outline?: boolean;
}

const Button: React.FC<Props> = ({children, expand, outline, ...props}) => {

  return (
      <Container {...props} expand={expand} outline={outline}>
        {children}
      </Container>
  );
};

export default Button;
