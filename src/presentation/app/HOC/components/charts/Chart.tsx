import React from 'react';
import {Line, Bar, Pie, PolarArea, Doughnut} from 'react-chartjs-2';

import {
  Chart,
  Filler,
  Legend,
  Tooltip,
  ChartData,
  BarElement,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  ScatterDataPoint,
  RadialLinearScale,
  ChartTypeRegistry,
} from 'chart.js';
Chart.register(
  Legend,
  Filler,
  Tooltip,
  BarElement,
  LinearScale,
  LineElement,
  PointElement,
  CategoryScale,
  RadialLinearScale
);

interface IChartProps<
  TType extends keyof ChartTypeRegistry,
  TData extends (number | ScatterDataPoint)[]
> {
  data?: ChartData<TType, TData, unknown>;
}

export const LineChartExample: React.FC<
  IChartProps<'line', (number | ScatterDataPoint)[]> & {legend?: boolean}
> = ({data, legend = true}) => {
  return (
    <Line
      className='line-chart'
      data={data}
      options={{
        plugins: {
          legend: {
            display: legend,
            labels: {
              boxWidth: 12,
              padding: 20,
              color: '#6783b8',
            },
          },
          tooltip: {
            enabled: true,
            displayColors: false,
            backgroundColor: '#eff6ff',
            titleFont: {
              size: '13px',
            },
            titleColor: '#6783b8',
            titleMarginBottom: 6,
            bodyColor: '#9eaecf',
            bodyFont: {
              size: '12px',
            },
            bodySpacing: 4,
            padding: 10,
            footerMarginTop: 0,
          },
        },
        maintainAspectRatio: false,
        scales: {
          y: {
            display: true,
            beginAtZero: false,
            ticks: {
              color: '#9eaecf',
              font: {
                size: '12px',
              },
              padding: 10,
            },
            grid: {
              tickLength: 0,
            },
          },
          x: {
            display: true,
            ticks: {
              color: '#9eaecf',
              font: {
                size: '12px',
              },
              source: 'auto',
              padding: 5,
            },
            grid: {
              color: 'transparent',
              tickLength: 10,
              offset: true,
            },
          },
        },
      }}
    />
  );
};

export const BarChartExample: React.FC<
  IChartProps<'bar', (number | ScatterDataPoint)[]> & {stacked?: boolean}
> = ({data, stacked}) => {
  return (
    <Bar
      data={data}
      options={{
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            displayColors: false,
            backgroundColor: '#eff6ff',
            titleFont: {
              size: '13px',
            },
            titleColor: '#6783b8',
            titleMarginBottom: 6,
            bodyColor: '#9eaecf',
            bodyFont: {
              size: '12px',
            },
            bodySpacing: 4,
            padding: 10,
            footerMarginTop: 0,
          },
        },
        maintainAspectRatio: false,
        scales: {
          y: {
            display: true,
            stacked: !!stacked,
            beginAtZero: true,
            ticks: {
              color: '#9eaecf',
              font: {
                size: '12px',
              },
              padding: 5,
            },
            grid: {
              tickLength: 0,
            },
          },
          x: {
            display: true,
            stacked: !!stacked,
            ticks: {
              color: '#9eaecf',
              font: {
                size: '12px',
              },
              source: 'auto',
              padding: 5,
            },
            grid: {
              color: 'transparent',
              tickLength: 10,
            },
          },
        },
      }}
    />
  );
};

export const PieChartExample: React.FC<IChartProps<'pie', (number | ScatterDataPoint)[]>> = ({
  data,
}) => {
  return (
    <Pie
      data={data}
      options={{
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            displayColors: false,
            backgroundColor: '#eff6ff',
            titleFont: {
              size: '13px',
            },
            titleColor: '#6783b8',
            titleMarginBottom: 6,
            bodyColor: '#9eaecf',
            bodyFont: {
              size: '12px',
            },
            bodySpacing: 4,
            padding: 10,
            footerMarginTop: 0,
          },
        },
        rotation: -0.2,
        maintainAspectRatio: false,
      }}
    />
  );
};

export const DoughnutExample: React.FC<IChartProps<'doughnut', (number | ScatterDataPoint)[]>> = ({
  data,
}) => {
  return (
    <Doughnut
      data={data}
      options={{
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            displayColors: false,
            backgroundColor: '#eff6ff',
            titleFont: {
              size: '13px',
            },
            titleColor: '#6783b8',
            titleMarginBottom: 6,
            bodyColor: '#9eaecf',
            bodyFont: {
              size: '12px',
            },
            bodySpacing: 4,
            padding: 10,
            footerMarginTop: 0,
          },
        },
        rotation: 1,
        cutout: 40,
        maintainAspectRatio: false,
      }}
    />
  );
};

export const PolarExample: React.FC<IChartProps<'polarArea', (number | ScatterDataPoint)[]>> = ({
  data,
}) => {
  return (
    <PolarArea
      data={data}
      options={{
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            displayColors: false,
            backgroundColor: '#eff6ff',
            titleFont: {
              size: '13px',
            },
            titleColor: '#6783b8',
            titleMarginBottom: 6,
            bodyColor: '#9eaecf',
            bodyFont: {
              size: '12px',
            },
            bodySpacing: 4,
            padding: 10,
            footerMarginTop: 0,
          },
        },
        maintainAspectRatio: false,
      }}
    />
  );
};
