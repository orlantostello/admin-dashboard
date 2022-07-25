import React, { useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import ExpandedCard from './ExpandedCard';
import CompactCard from './CompactCard';

const Card = props => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

export default Card;
