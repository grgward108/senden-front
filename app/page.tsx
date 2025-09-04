'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    keyword: '',
    industry: '',
    jobType: '',
    location: '',
    employmentType: '',
    isContractor: false,
    salaryMin: '',
    salaryMax: '',
    workingHours: [],
    jobNo: ''
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    Object.entries(formData).forEach(([key, value]) => {
      if (value && value !== '') {
        if (Array.isArray(value)) {
          params.append(key, value.join(','))
        } else {
          params.append(key, String(value))
        }
      }
    })
    router.push(`/results?${params.toString()}`)
  }

  const handleCheckbox = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      workingHours: prev.workingHours.includes(value) 
        ? prev.workingHours.filter((v: string) => v !== value)
        : [...prev.workingHours, value]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">求人検索</h1>
          <p className="text-gray-600">あなたにぴったりの仕事を見つけよう</p>
        </div>
        
        <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">キーワード</label>
            <input
              type="text"
              placeholder="職種、スキル、会社名など"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              value={formData.keyword}
              onChange={(e) => setFormData({...formData, keyword: e.target.value})}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">業種</label>
              <select 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
              >
                <option value="">選択してください</option>
                <option value="IT">IT・通信</option>
                <option value="メーカー">メーカー</option>
                <option value="商社">商社</option>
                <option value="小売">小売</option>
                <option value="金融">金融</option>
                <option value="サービス">サービス</option>
                <option value="メディア">メディア</option>
                <option value="コンサル">コンサル</option>
              </select>
              <button type="button" className="text-blue-600 text-xs mt-1 hover:text-blue-700">+条件を追加</button>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">職種</label>
              <select 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                value={formData.jobType}
                onChange={(e) => setFormData({...formData, jobType: e.target.value})}
              >
                <option value="">選択してください</option>
                <option value="営業">営業</option>
                <option value="企画・マーケティング">企画・マーケティング</option>
                <option value="事務・管理">事務・管理</option>
                <option value="エンジニア">エンジニア</option>
                <option value="デザイナー">デザイナー</option>
                <option value="ディレクター">ディレクター</option>
                <option value="コンサルタント">コンサルタント</option>
              </select>
              <button type="button" className="text-blue-600 text-xs mt-1 hover:text-blue-700">+条件を追加</button>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">勤務地</label>
            <select 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            >
              <option value="">選択してください</option>
              <option value="東京都">東京都</option>
              <option value="神奈川県">神奈川県</option>
              <option value="千葉県">千葉県</option>
              <option value="埼玉県">埼玉県</option>
              <option value="大阪府">大阪府</option>
              <option value="愛知県">愛知県</option>
              <option value="福岡県">福岡県</option>
              <option value="リモート">リモート</option>
            </select>
          </div>

          <div>
            <label className="block mb-3 text-sm font-medium text-gray-700">雇用形態</label>
            <div className="flex gap-3">
              <label className="flex items-center px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg flex-1 cursor-pointer hover:bg-gray-100 transition">
                <input 
                  type="radio" 
                  name="employmentType" 
                  value="正社員"
                  className="mr-3 text-blue-600"
                  onChange={(e) => setFormData({...formData, employmentType: e.target.value})}
                />
                <span className="font-medium">正社員</span>
              </label>
              <label className="flex items-center px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg flex-1 cursor-pointer hover:bg-gray-100 transition">
                <input 
                  type="radio" 
                  name="employmentType" 
                  value="契約社員"
                  className="mr-3 text-blue-600"
                  onChange={(e) => setFormData({...formData, employmentType: e.target.value})}
                />
                <span className="font-medium">契約社員</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block mb-3 text-sm font-medium text-gray-700">給与</label>
            <div className="flex gap-3 items-center">
              <input
                type="number"
                placeholder="400"
                className="w-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                value={formData.salaryMin}
                onChange={(e) => setFormData({...formData, salaryMin: e.target.value})}
              />
              <span className="text-gray-600">万円〜</span>
              <input
                type="number"
                placeholder="800"
                className="w-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                value={formData.salaryMax}
                onChange={(e) => setFormData({...formData, salaryMax: e.target.value})}
              />
              <span className="text-gray-600">万円</span>
            </div>
          </div>

          <div>
            <label className="block mb-3 text-sm font-medium text-gray-700">こだわり条件</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                '土日祝休み',
                '残業なし',
                '残業月20時間以内',
                'フレックスタイム制',
                '在宅・リモートワーク',
                '副業・兼業OK',
                '転勤なし'
              ].map((item) => (
                <label key={item} className="flex items-center px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition">
                  <input
                    type="checkbox"
                    className="mr-2 text-blue-600"
                    onChange={() => handleCheckbox('workingHours', item)}
                  />
                  <span className="text-sm">{item}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="button" className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition font-medium">
            こだわりをもっと見る
          </button>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">求人No</label>
            <input
              type="text"
              placeholder="求人番号で検索"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              value={formData.jobNo}
              onChange={(e) => setFormData({...formData, jobNo: e.target.value})}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            検索する
          </button>
        </form>
      </div>
    </div>
  )
}