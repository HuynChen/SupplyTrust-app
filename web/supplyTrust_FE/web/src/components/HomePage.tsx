import React from 'react';
import { Shield, Zap, Globe, Users, Package, ArrowRight, CheckCircle } from 'lucide-react';

interface HomePageProps {
  onGetStarted: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onGetStarted }) => {
  const features = [
    {
      icon: Shield,
      title: 'Bảo mật Blockchain',
      description: 'Mọi giao dịch đều được mã hóa và không thể chỉnh sửa, đảm bảo toàn vẹn dữ liệu.',
    },
    {
      icon: Globe,
      title: 'Minh bạch toàn cầu',
      description:
        'Theo dõi sản phẩm qua biên giới quốc tế với khả năng hiển thị theo thời gian thực và báo cáo tuân thủ.',
    },
    {
      icon: Zap,
      title: 'Xác thực tức thì',
      description:
        'Hợp đồng thông minh tự động xác thực từng bước trong chuỗi cung ứng của bạn theo thời gian thực.',
    },
    {
      icon: Users,
      title: 'Mạng lưới đối tác',
      description:
        'Kết nối với nhà cung cấp, nhà sản xuất và nhà phân phối đã được xác thực trong hệ sinh thái tin cậy.',
    },
  ];

  const benefits = [
    'Giảm gian lận và hàng giả lên đến 90%',
    'Cải thiện hiệu suất chuỗi cung ứng 35%',
    'Tăng niềm tin khách hàng và uy tín thương hiệu',
    'Đảm bảo tuân thủ quy định trên mọi thị trường',
    'Hiển thị hành trình sản phẩm theo thời gian thực',
    'Tự động bảo đảm chất lượng và xác minh',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-600 p-4 rounded-2xl">
                <Package className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Tin tưởng từng bước trong{' '}
              <span className="block text-blue-600">chuỗi cung ứng của bạn</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              SupplyTrust tận dụng công nghệ blockchain để tạo ra bản ghi không thể thay đổi về hành
              trình của sản phẩm, đảm bảo tính minh bạch, xác thực và niềm tin từ nguồn gốc đến tay
              người tiêu dùng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={onGetStarted}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Bắt đầu ngay</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-gray-50">
                Xem demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sức mạnh từ đổi mới Blockchain
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nền tảng tiên tiến mang lại mức độ hiển thị và bảo mật chưa từng có cho chuỗi cung ứng hiện đại.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Chuyển đổi chuỗi cung ứng của bạn ngay hôm nay
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Hàng nghìn doanh nghiệp đã và đang sử dụng SupplyTrust để xây dựng chuỗi cung ứng minh bạch, hiệu quả và đáng tin cậy hơn.
              </p>
              <button
                onClick={onGetStarted}
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Bắt đầu hành trình của bạn</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 text-white">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Được tin dùng bởi các nhà lãnh đạo ngành
            </h2>
            <p className="text-xl text-gray-600">Bảo vệ chuỗi cung ứng trên mọi lĩnh vực</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600">1,200+</div>
              <div className="text-gray-600">Doanh nghiệp hoạt động</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-teal-600">50M+</div>
              <div className="text-gray-600">Sản phẩm được theo dõi</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-orange-600">99.9%</div>
              <div className="text-gray-600">Thời gian hoạt động</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600">156</div>
              <div className="text-gray-600">Quốc gia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
