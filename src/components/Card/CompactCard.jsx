import React from 'react';
import './Card.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';

const CompactCard = ({ param, setExpanded }) => {
  const { color, barValue, title, value, png } = param;
  const Png = png;
  return (
    <motion.div
      className="flex flex-1 h-[150px] text-white p-4 relative cursor-pointer rounded-[12px]"
      style={{
        background: color.backGround,
        boxShadow: color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="flex flex-col justify-end gap-4">
        <CircularProgressbar value={barValue} text={`${barValue}%`} />
        <span className="text-[17px] font-bold text-white">{title}</span>
      </div>
      <div className="flex flex-1 flex-col items-end justify-between">
        <Png />
        <span className="text-[22px] font-bold text-white">${value}</span>
        <span className="text-[12px] text-white">Last 24 hours</span>
      </div>
    </motion.div>
  );
};

export default CompactCard;
