import React, {CSSProperties, useEffect} from 'react';
import { ToastMessage, useToast } from '../../../hooks/useToast';

import { ReactComponent as IconSuccess } from '../../../assets/svg/icon-success.svg';
import { ReactComponent as IconError } from '../../../assets/svg/icon-error.svg';
import { ReactComponent as IconWarning } from '../../../assets/svg/icon-warning.svg';
import { Container } from './styles';

interface ToastContainerProps {
    message: ToastMessage;
    style: CSSProperties;
}

const icons = {
  warning: <IconWarning />,
  error: <IconError />,
  success: <IconSuccess style={{fill:'var(--green)'}}/>,
};

const Toast: React.FC<ToastContainerProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container key={message.id} type={message.type} style={style}>
      <section>{icons[message.type || 'success']}</section>
      <div>
        <p>{message.description}</p>
      </div>
    </Container>
  );
};

export default Toast;
