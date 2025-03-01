'use client';

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

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeIn}>
          <h3 className="text-xl font-bold mb-4">진향미</h3>
          <p className="text-gray-400">
            최고의 품질로 정성을 다하는 식자재 유통 전문기업
          </p>
        </motion.div>
        <motion.div variants={fadeIn}>
          <h3 className="text-xl font-bold mb-4">연락처</h3>
          <p className="text-gray-400">
            전화: 02-1234-5678<br />
            이메일: info@jinhyangmi.com<br />
            주소: 서울특별시 강남구 테헤란로 123
          </p>
        </motion.div>
        <motion.div variants={fadeIn}>
          <h3 className="text-xl font-bold mb-4">바로가기</h3>
          <ul className="text-gray-400">
            <li className="mb-2">
              <motion.a 
                whileHover={{ x: 5 }} 
                href="/about" 
                className="hover:text-white"
              >
                회사소개
              </motion.a>
            </li>
            <li className="mb-2">
              <motion.a 
                whileHover={{ x: 5 }} 
                href="/products" 
                className="hover:text-white"
              >
                제품소개
              </motion.a>
            </li>
            <li className="mb-2">
              <motion.a 
                whileHover={{ x: 5 }} 
                href="/contact" 
                className="hover:text-white"
              >
                문의하기
              </motion.a>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </footer>
  );
} 