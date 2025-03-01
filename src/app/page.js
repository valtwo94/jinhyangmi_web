import HeroSection from '../components/HeroSection';
import ServiceSection from '../components/ServiceSection';
import ValuesSection from '../components/ValuesSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import KoreaMap from '../components/KoreaMap';
import { MdLocationOn, MdLocalShipping, MdStorefront } from 'react-icons/md';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <div id="about">
          <ValuesSection />
        </div>
        <div id="products">
          <ServiceSection />
        </div>
        <div id="distribution" className="py-32 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-green-600 text-sm font-semibold tracking-wider uppercase mb-4 block">Our Network</span>
              <h2 className="text-4xl font-bold mb-4">유통망</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                전국 각지에 신선한 식자재를 공급하는 진향미의 유통 네트워크를 소개합니다
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <KoreaMap />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <MdLocationOn className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">전국 물류 거점</h3>
                  <p className="text-gray-600 mb-4">서울, 부산, 대구, 광주에 위치한 물류 센터를 통해 전국 각지로 신속한 배송이 가능합니다</p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <MdStorefront className="w-5 h-5 mr-2 text-green-600" />
                      수도권 물류센터
                    </li>
                    <li className="flex items-center">
                      <MdStorefront className="w-5 h-5 mr-2 text-green-600" />
                      영남권 물류센터
                    </li>
                    <li className="flex items-center">
                      <MdStorefront className="w-5 h-5 mr-2 text-green-600" />
                      호남권 물류센터
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <MdLocalShipping className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">배송 시스템</h3>
                  <p className="text-gray-600 mb-4">첨단 콜드체인 시스템을 통해 식자재의 신선도를 완벽하게 유지합니다</p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <MdLocalShipping className="w-5 h-5 mr-2 text-green-600" />
                      냉장/냉동 차량 운영
                    </li>
                    <li className="flex items-center">
                      <MdLocalShipping className="w-5 h-5 mr-2 text-green-600" />
                      실시간 온도 모니터링
                    </li>
                    <li className="flex items-center">
                      <MdLocalShipping className="w-5 h-5 mr-2 text-green-600" />
                      GPS 차량 관제 시스템
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2">
                  <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <MdStorefront className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">협력 매장</h3>
                  <p className="text-gray-600 mb-4">전국의 다양한 매장과 협력하여 안정적인 유통망을 구축하고 있습니다</p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <MdStorefront className="w-5 h-5 mr-2 text-green-600" />
                      대형 마트
                    </li>
                    <li className="flex items-center">
                      <MdStorefront className="w-5 h-5 mr-2 text-green-600" />
                      식당 및 프랜차이즈
                    </li>
                    <li className="flex items-center">
                      <MdStorefront className="w-5 h-5 mr-2 text-green-600" />
                      전통 시장
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
