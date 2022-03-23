import React, { createContext, useContext, useState, useCallback } from 'react';
import { v4 } from 'uuid';

import ToastContainer from '../componentes/ToastContainer';
interface ToastContextData {
    toast(message: Omit<ToastMessage, 'id'>): void;
    removeToast(id: string): void;
}

export interface ToastMessage {
    id: string;
    type?: TypesToast;
    description: string;
}

export type TypesToast = 'success' | 'error' | 'warning';

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const toast = useCallback(
    ({ type, description }: Omit<ToastMessage, 'id'>) => {
      const id = v4();

      const toast = {
        id,
        type,
        description,
      };

      setMessages((oldMessage) => [...oldMessage, toast]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setMessages((oldMessage) =>
      oldMessage.filter((message) => message.id !== id)
    );
  }, []);

  return (
    <ToastContext.Provider value={{ toast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast deve ser usado com o ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
