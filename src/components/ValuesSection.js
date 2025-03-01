'use client';

import Image from "next/image";
import { FaLeaf, FaHandshake, FaClock, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ValuesSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/values-bg.jpg"
          alt="기업 이념 배경"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/80" />
      </div>

      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div 
          variants={fadeIn}
          className="text-center mb-20"
        >
          <span className="text-green-400 text-sm font-semibold tracking-wider uppercase mb-4 block">Our Values</span>
          <h2 className="text-4xl font-bold text-white mb-4">기업 이념</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            진향미는 신선함과 신뢰를 바탕으로 정확하고 혁신적인 서비스를 제공합니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            variants={fadeIn}
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
          >
            <div className="bg-green-400/20 rounded-xl p-6 mb-6 group-hover:bg-green-400/30 transition-all duration-300">
              <FaLeaf className="w-12 h-12 text-green-400 transform transition-transform group-hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">신선</h3>
            <p className="text-gray-300">최고 품질의 신선한 식자재를 제공하여 고객의 만족을 최우선으로 합니다</p>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
          >
            <div className="bg-blue-400/20 rounded-xl p-6 mb-6 group-hover:bg-blue-400/30 transition-all duration-300">
              <FaHandshake className="w-12 h-12 text-blue-400 transform transition-transform group-hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">신뢰</h3>
            <p className="text-gray-300">정직한 거래와 믿음직한 서비스로 고객과의 신뢰를 구축합니다</p>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
          >
            <div className="bg-purple-400/20 rounded-xl p-6 mb-6 group-hover:bg-purple-400/30 transition-all duration-300">
              <FaClock className="w-12 h-12 text-purple-400 transform transition-transform group-hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">정확</h3>
            <p className="text-gray-300">정확한 시간, 정확한 물량으로 완벽한 서비스를 제공합니다</p>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
          >
            <div className="bg-orange-400/20 rounded-xl p-6 mb-6 group-hover:bg-orange-400/30 transition-all duration-300">
              <FaLightbulb className="w-12 h-12 text-orange-400 transform transition-transform group-hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">혁신</h3>
            <p className="text-gray-300">끊임없는 발전과 시스템 혁신으로 더 나은 서비스를 만듭니다</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 