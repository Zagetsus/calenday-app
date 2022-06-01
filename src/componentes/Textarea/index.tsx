import React, {TextareaHTMLAttributes} from 'react';
import {Container} from "./styles";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

const Textarea: React.FC<Props> = (props) => {
  return <Container {...props} />;
};

export default Textarea;
