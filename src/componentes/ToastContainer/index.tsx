import React from 'react';
import { useTransition } from 'react-spring';
import { ToastMessage } from '../../hooks/useToast';

import Toast from './Toast';

import { Container } from './styles';

interface ToastContainerProps {
    messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { bottom: '-50px', opacity: 0 },
      enter: { bottom: '0%', opacity: 1 },
      leave: { bottom: '-50px', opacity: 0 },
    }
  );
  return (
    <Container
      style={{ display: messagesWithTransitions.length > 0 ? 'block' : 'none' }}
    >
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
