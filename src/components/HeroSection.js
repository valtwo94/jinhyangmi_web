'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <Image
          src="/hero-bg.jpg"
          alt="진향미 메인 이미지"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full container mx-auto px-4">
        <div className="h-full flex flex-col justify-center max-w-3xl">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <div className="inline-block">
              <div className="flex items-center gap-2 text-green-400 mb-2">
                <span className="w-12 h-[1px] bg-green-400"></span>
                <span className="text-sm font-medium tracking-wider uppercase">Since 2024</span>
              </div>
              <h2 className="text-xl md:text-2xl text-white/90 font-medium">
                신선한 식자재 유통의 새로운 기준
              </h2>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              <span className="text-green-400">진향미</span>와 함께<br />
              건강한 미래를 만듭니다
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-2xl"
          >
            최고의 품질과 정성으로 전국의 식당과 마트에<br className="hidden md:block" />
            신선한 식자재를 공급하는 전문 유통기업입니다
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/about"
              className="group flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all duration-300"
            >
              <span className="text-lg font-medium">회사 소개</span>
              <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/products"
              className="group flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <span className="text-lg font-medium">제품 보기</span>
              <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-12"
          >
            <div>
              <p className="text-green-400 text-3xl font-bold mb-1">150+</p>
              <p className="text-white/60 text-sm">협력 업체</p>
            </div>
            <div>
              <p className="text-green-400 text-3xl font-bold mb-1">98%</p>
              <p className="text-white/60 text-sm">고객 만족도</p>
            </div>
            <div>
              <p className="text-green-400 text-3xl font-bold mb-1">24H</p>
              <p className="text-white/60 text-sm">신속 배송</p>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <BsArrowDownCircle className="text-white/60 w-6 h-6" />
          <p className="text-white/60 text-sm font-medium">스크롤하여 더보기</p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-500/30 to-transparent"
      />
    </section>
  );
} 