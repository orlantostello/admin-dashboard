import React from 'react';
import { motion } from 'framer-motion';
import { UilTimes } from '@iconscout/react-unicons';
import Chart from 'react-apexcharts';

const ExpandedCard = ({ param, setExpanded }) => {
  const { color, title, series } = param;
  const data = {
    options: {
      chart: {
        type: 'area',
        height: 'auto',
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.35,
      },

      fill: {
        colors: ['#fff'],
        type: 'gradient',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        colors: ['white'],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2022-07-19T00:00:00.000Z',
          '2022-07-19T01:00:00.000Z',
          '2022-07-19T02:00:00.000Z',
          '2022-07-19T03:00:00.000Z',
          '2022-07-19T04:00:00.000Z',
          '2022-07-19T05:00:00.000Z',
          '2022-07-19T06:00:00.000Z',
        ],
      },
    },
  };

  return (
    <motion.div
      className="absolute flex flex-col items-center justify-around w-[60%] h-[70vh] z-10 left-52 rounded-2xl p-4 lx:top-8 lx:h-[45vh] lx:left-24 dm:top-32 dm:h-[50%] dm:w-[80%] dm:left-[25px]  "
      style={{
        background: color.backGround,
        boxShadow: color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div className="text-white cursor-pointer self-end">
        <UilTimes onClick={setExpanded} />
      </div>
      <span className="text-white font-bold text-[26px]">{title}</span>
      <div className="w-[70%]">
        <Chart options={data.options} series={series} type="area" />
      </div>
      <span className="text-[#ececec] text-[15px]">Last 24 hours</span>
    </motion.div>
  );
};

export default ExpandedCard;
