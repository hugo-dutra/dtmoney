import logoImg from '../../assets/Logo.svg';
import { Container, Content } from './styles';
import Modal from 'react-modal';
import React, { useState } from 'react';

interface HeaderProps {
    handleOpenModal: () => void
}

export const Header: React.FC<{ handleOpenModal: () => void }> = (props) => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={props.handleOpenModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}