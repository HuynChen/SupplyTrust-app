import React, { useState } from 'react';

interface LoginPageProps {
  onSuccess: (token: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // TODO: Gọi API đăng nhập thực tế ở backend. Hiện giả lập.
      await new Promise((res) => setTimeout(res, 600));
      const fakeToken = 'demo-token-' + Math.random().toString(36).slice(2);
      onSuccess(fakeToken);
    } catch (err) {
      setError('Đăng nhập thất bại, vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Đăng nhập SupplyTrust</h1>
          <p className="text-sm text-gray-600">Đăng nhập để truy cập bảng điều khiển</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded p-2">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            {loading ? 'Đang đăng nhập…' : 'Đăng nhập'}
          </button>

          <div className="text-center mt-3 text-sm text-gray-500">
            <a href="#" className="hover:underline">Quên mật khẩu?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;