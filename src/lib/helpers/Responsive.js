// @flow
import * as React from 'react';

type Props = {
  children: Function,
};

type State = {
  device: Device,
};

const queries = [
  '(max-width: 320px)',
  '(max-width: 767px) and (min-width: 320px)',
  '(max-width: 1223px) and (min-width: 768px)',
  '(max-width: 1824px) and (min-width: 1224px)',
  '(min-width: 1824px)',
];

const mediaDictionary = {
  0: 'mobile',
  1: 'iphone',
  2: 'ipad',
  3: 'desktop',
  4: 'large_desktop',
};

class Responsive extends React.Component<Props, State> {
  state = {
    device: 'mobile',
  };

  mqlQueries = {};

  componentDidMount() {
    this.initQueries();
  }

  setQueryState = (currentQueryName: Device) =>
    this.setState({ device: currentQueryName });

  queryChange = mql => {
    if (mql.matches) {
      this.setQueryState(
        mediaDictionary[queries.findIndex(query => query === mql.media)],
      );
    }
  };

  initQueries() {
    queries.forEach((query, index) => {
      this.mqlQueries[`mql${index}`] = window.matchMedia(query);
      this.mqlQueries[`mql${index}`].addListener(this.queryChange);
      this.queryChange(this.mqlQueries[`mql${index}`]);
    });
  }

  componentWillUnmount() {
    Object.keys(this.mqlQueries).forEach(query => {
      this.mqlQueries[query].removeListener(this.queryChange(query));
    });
  }

  render() {
    const { children } = this.props;
    const { device } = this.state;
    return children({ device });
  }
}

export default Responsive;
