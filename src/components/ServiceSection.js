'use client';

import Image from "next/image";
import { MdRestaurant, MdStore, MdLocalShipping } from "react-icons/md";
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

export default function ServiceSection() {
  return (
    <section className="relative py-32 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/service-bg.jpg"
          alt="서비스 배경"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/95" />
      </div>

      <motion.div 
        className="relative z-10 max-w-6xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div 
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="text-green-600 text-sm font-semibold tracking-wider uppercase mb-4 block">Our Services</span>
          <h2 className="text-4xl font-bold mb-4">사업 영역</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            진향미는 식당 납품부터 도매 유통, 신선 배송까지 원스톱 서비스를 제공합니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            variants={fadeIn}
            className="group relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
              <div className="bg-blue-50 rounded-xl p-6 mb-6 transform transition-transform group-hover:scale-105">
                <MdRestaurant className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">식당 납품</h3>
              <p className="text-gray-600 leading-relaxed">
                전국의 식당에 신선하고 품질 좋은 식자재를 정확한 시간에 공급합니다
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="group relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
              <div className="bg-green-50 rounded-xl p-6 mb-6 transform transition-transform group-hover:scale-105">
                <MdStore className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">도매 유통</h3>
              <p className="text-gray-600 leading-relaxed">
                대형 마트와 시장에 안정적인 물량과 최상의 품질을 보장합니다
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="group relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
              <div className="bg-orange-50 rounded-xl p-6 mb-6 transform transition-transform group-hover:scale-105">
                <MdLocalShipping className="w-12 h-12 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">신선 배송</h3>
              <p className="text-gray-600 leading-relaxed">
                전국 어디든 24시간 이내 신선한 상태로 배송해드립니다
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 