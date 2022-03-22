import React from 'react';
import {Card, Special, Text, Title} from "./styles";

interface Props {
    title: string;
    text: string;
    specialText?: string;
    highlight?: boolean;
}

const InfoCard: React.FC<Props> = ({title, text, specialText, highlight}) => {
  return (
      <Card>
          <Title highlight={highlight}>{title}</Title>
          <Text>
              {specialText && <Special>{specialText}{' '}</Special>}
              {text}
          </Text>
      </Card>
  );
};

export default InfoCard;
