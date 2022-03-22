import React, {InputHTMLAttributes} from 'react';
import {Container, Input} from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
}

const SearchBar: React.FC<Props> = ({...props}) => {
  return (
      <Container>
        <Input {...props} />
      </Container>
  );
};

export default SearchBar;
