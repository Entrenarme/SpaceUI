import * as React from 'react';

interface Props {
  children: JSX.Element;
  outSideAction: Function;
  style?: Object;
}

class OutsideClick extends React.Component<Props> {
  wrapperRef: React.RefObject<HTMLDivElement> = React.createRef();

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event: any) => {
    if (
      this.wrapperRef &&
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target)
    ) {
      this.props.outSideAction();
    }
  };

  render() {
    const { children } = this.props;

    return (
      <div ref={this.wrapperRef} style={this.props.style}>
        {children}
      </div>
    );
  }
}

export default OutsideClick;
