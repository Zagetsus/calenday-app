import React, {useEffect} from 'react';
import {Container} from "./styles";

interface Props {
    open: boolean;
    onClose: () => void
};

const Modal: React.FC<Props> = ({open, onClose, children}) => {
    function handleOutsideClick(event: any) {
        if (event.target === event.currentTarget) onClose()
    }

    useEffect(() => {
      if (open) document.body.style.overflowY = 'hidden';
      if (!open) document.body.style.overflowY = 'auto';
    }, [open]);

    return (
        <>
            {open && <Container onClick={handleOutsideClick}>{children}</Container>}
        </>
    );
};

export default Modal;
