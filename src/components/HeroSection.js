'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="진향미 메인 이미지"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60" />
      </div>

      {/* 컨텐츠 */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* 서브타이틀 */}
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8">
            <div className="hidden sm:block w-12 sm:w-16 h-0.5 bg-green-400" />
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-0">
              <span className="text-sm sm:text-base text-green-400 font-semibold tracking-wider uppercase">신선한 식자재</span>
              <span className="text-sm sm:text-base text-green-400 font-semibold tracking-wider uppercase px-0 sm:px-4">유통의 새로운 기준</span>
            </div>
            <div className="hidden sm:block w-12 sm:w-16 h-0.5 bg-green-400" />
          </div>

          {/* 메인 타이틀 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            <span className="block mb-2">최고의 품질로</span>
            <span className="block">신뢰를 전달합니다</span>
          </h1>

          {/* 설명 텍스트 */}
          <p className="text-base sm:text-lg text-gray-200 mb-8 sm:mb-10 leading-relaxed">
            엄선된 신선한 식자재를 고객님의 식탁까지
            <br />
            안전하게 전달해드립니다
          </p>

          {/* 버튼 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-lg"
            >
              제품 둘러보기
            </button>
            <button
              onClick={() => document.getElementById('distribution')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold text-green-400 border-2 border-green-400 rounded-lg hover:bg-green-400 hover:text-white transition-colors duration-300 shadow-lg"
            >
              유통망 확인하기
            </button>
          </div>
        </motion.div>

        {/* 스크롤 인디케이터 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-2">스크롤하여 더 보기</span>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center"
            >
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 