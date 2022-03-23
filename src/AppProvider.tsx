import React from 'react';

import { ToastProvider } from './hooks/useToast';
import {AuthProvider} from "./hooks/useAuth";

const AppProvider: React.FC = ({ children }) => {
  return (
    <>
        <ToastProvider>
            <AuthProvider>{children}</AuthProvider>
        </ToastProvider>
    </>
  );
};

export default AppProvider;
