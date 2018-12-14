import * as React from 'react';
import styled from 'styled-components';

interface FieldsetProps {
  options: {
    hideLegend: boolean;
  };
}

const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > legend {
    height: 1px;
    width: 1px;
    ${(props: FieldsetProps) =>
      props.options.hideLegend
        ? `
    @supports (clip-path: circle(0%)) {
      clip-path: circle(0%);
    }
    @supports not (clip-path: circle(0%)) {
      clip: rect(0, 0, 0, 0);
    }
    `
        : ''};
  }
`;

interface Props {
  legend: string;
  hideLegend?: boolean;
  children: any;
}

function FormGroup({ legend, children, hideLegend = true, ...rest }: Props) {
  return (
    <Fieldset options={{ hideLegend }} {...rest}>
      <legend>{legend}</legend>
      {children}
    </Fieldset>
  );
}

FormGroup.defaultProps = {
  hideLegend: true,
};

export default FormGroup;
