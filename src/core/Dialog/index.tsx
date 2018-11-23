import * as React from 'react';
// @ts-ignore
import Modal from 'react-modal';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons';

import { regularFont } from '../../helpers/fonts';
import colors from '../../helpers/colors';

import './styles/custom.css';

const HeaderStyles = styled.div`
  background-color: ${colors.blue.modalHeader};
  height: 55px;
  border-radius: 25px 25px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  * {
    font-family: ${regularFont};
    font-weight: 600;
    color: #fff;
    margin: 0px;
    font-size: 16px;
    margin-left: 20px;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`;

interface MainContainerProps {
  options: {
    header?: JSX.Element | Array<JSX.Element>;
  };
}

const MainContainer = styled.div`
  padding: ${(props: MainContainerProps) =>
    props.options.header ? '0px 20px 20px 20px' : '20px'};
`;

interface Props {
  children: JSX.Element | Array<JSX.Element>;
  open: boolean;
  onClose: Function;
  header?: JSX.Element | Array<JSX.Element>;
  style?: {};
}

class Dialog extends React.Component<Props> {
  render() {
    const { children, open, onClose, header, style } = this.props;

    return (
      <Modal
        isOpen={open}
        onRequestClose={() => onClose()}
        className={header ? 'ModalNoMarginsHeader' : 'ModalNoMargins'}
        style={style}
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        {header ? <HeaderStyles>{header}</HeaderStyles> : null}
        <MainContainer options={{ header }}>
          <IconContainer onClick={() => onClose()}>
            <FontAwesomeIcon
              icon={faTimes}
              style={{
                opacity: 0.5,
                cursor: 'pointer',
                color: header ? '#fff' : '#000',
              }}
            />
          </IconContainer>
          {children}
        </MainContainer>
      </Modal>
    );
  }
}

export default Dialog;
