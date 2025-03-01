'use client';

import { motion } from 'framer-motion';

const MapPoint = ({ cx, cy, color, name, delay, size = 12 }) => {
  return (
    <g className="cursor-pointer">
      {/* 메인 원 */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={size}
        fill={color}
        fillOpacity={0.15}
        initial={{ scale: 0 }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.2, 0.15]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* 첫 번째 물결 효과 */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={size}
        stroke={color}
        strokeWidth="1"
        fill="none"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ 
          scale: 1.2,
          opacity: 0
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
      
      {/* 두 번째 물결 효과 */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={size}
        stroke={color}
        strokeWidth="1"
        fill="none"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ 
          scale: 1.2,
          opacity: 0
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 1
        }}
      />
    </g>
  );
};

const CityLegend = ({ x, y, color, name, delay }) => {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="cursor-pointer"
    >
      <circle cx={x} cy={y} r={8} fill={color} />
      <text x={x + 15} y={y + 5} className="text-sm font-medium" fill="#374151">
        {name}
      </text>
    </motion.g>
  );
};

export default function KoreaMap() {
  return (
    <div className="relative">
      <svg viewBox="0 0 800 1200" className="w-full h-auto">
        {/* 한국 지도 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <style>
            {`
              .st1 { display: none; }
            `}
          </style>
          <image
            href="/korea-map.svg"
            width="800"
            height="1200"
            preserveAspectRatio="xMidYMid meet"
            style={{ opacity: 0.8 }}
          />
        </motion.g>

        {/* 주요 도시 포인트 */}
        <MapPoint cx={600} cy={850} color="#059669" name="김해" delay={0.2} size={200} />
      

        {/* 연결선 - 김해 중심 */}
       

        {/* 범례 - 상단 */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <rect x="50" y="50" width="200" height="30" fill="#dcfce7" rx="5" />
          <text x="150" y="70" textAnchor="middle" className="text-sm font-medium" fill="#059669">
            진향미 유통망
          </text>
        </motion.g>

        {/* 도시 범례 - 오른쪽 하단 */}
        
      </svg>
    </div>
  );
} 