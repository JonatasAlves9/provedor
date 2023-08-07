import React, {FC} from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Chart, CategoryScale, LinearScale, Legend, Tooltip, ChartData} from 'chart.js';

// Register chart components
Chart.register(CategoryScale, LinearScale, Legend, Tooltip);

interface IKnobProps {
  data: ChartData<'doughnut', {data: number[]; labels: string[]}, unknown>;
  type: 'half' | 'full';
  centerText: string;
}

export const Knob: FC<IKnobProps> = ({data, type, centerText}) => {
  return (
    <div className='nk-knob position-relative'>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          rotation: 270,
          circumference: type === 'half' ? 180 : 360,
          cutout: '93%',
          maintainAspectRatio: true,
          hover: {
            mode: null,
          },
        }}
      />
      <div
        className={`position-absolute top-50 start-50 translate-middle fs-1 fw-light ${
          type === 'full' ? 'pb-4' : 'pt-5'
        }`}
      >
        <div className='text-lead'>{centerText}</div>
      </div>
    </div>
  );
};
