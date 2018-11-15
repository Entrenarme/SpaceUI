import * as React from 'react';

import DaySlider from './DaySlider';
import { mainFont } from '../../helpers/fonts';
import * as colors from '../../helpers/colors';

const days: Array<React.ReactNode> = [];
const numDays = 30;
for (let i = 1; i <= numDays; i++) {
  days.push(i);
}

interface State {
  activeSlide: number | null;
}

class DaySliderSample extends React.Component<{}, State> {
  state: State = {
    activeSlide: null,
  };

  onSlideClick = (slideInfo: any) => {
    this.setState({ activeSlide: slideInfo });
  };

  render() {
    const { activeSlide } = this.state;
    return (
      <div
        style={{
          background: 'linear-gradient(225deg, #64DEE9 0%, #5151E5 100%)',
          marginTop: '50px',
        }}
      >
        <div style={{ width: '80%', margin: '0 auto 0 auto' }}>
          <DaySlider infinite={false}>
            {days.map((day, index) => (
              <DaySlider.Slide
                key={index}
                keyValue={index}
                onClick={this.onSlideClick}
              >
                <div
                  style={{
                    width: '36px',
                    display: 'flex',
                    flexDirection: 'column',
                    fontFamily: mainFont,
                    color:
                      index === activeSlide
                        ? colors.default.blue.light
                        : 'white',
                    fontWeight: 600,
                    alignItems: 'center',
                    fontSize: '11px',
                    cursor: 'pointer',
                  }}
                >
                  <span>{day}</span>
                  <span>LUN</span>
                </div>
              </DaySlider.Slide>
            ))}
          </DaySlider>
        </div>
      </div>
    );
  }
}

export default DaySliderSample;
