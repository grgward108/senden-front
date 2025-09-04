'use client'

import Link from 'next/link'
import { useState, use } from 'react'

const jobDetails = {
  '13961': {
    id: '13961',
    jobNo: '79649',
    company: 'MIC',
    companyDescription: 'メーカー・コンビニ・ドラッグストア等の各種法人向けWeb・システム開発会社',
    title: '専門商社、総合商社でのトレード事務',
    employmentType: '正社員',
    salary: '420万円～704万円',
    location: '東京都渋谷区',
    workingHours: '9:00～18:00（フレックスタイム制あり）',
    holidays: '土日祝、年末年始、夏季休暇',
    description: '主に、メーカー・コンビニ・ドラッグストア等の各種法人向けのWeb・システム開発、業務の効率化、システム人材の派遣などを手掛けています。\n\nお客様の要望については、Web・CMS・管理に便利なツール作成、一歩進んだ提案と技術の提供を心掛けています。',
    jobContent: [
      '貿易事務全般（受発注管理、船積手配、通関手続き等）',
      '貿易書類の作成・確認',
      'L/C（信用状）の開設・管理',
      '海外取引先との英文メール・電話対応',
      '輸出入に関わるコスト管理・改善提案'
    ],
    requirements: [
      '貿易事務経験（3年以上）',
      '英語力（TOEIC 700点以上または同等レベル）',
      'Excel・ Wordの基本操作スキル',
      'コミュニケーション能力',
      '細かい作業への注意力と正確性'
    ],
    welcomeRequirements: [
      '商社での勤務経験',
      '貿易実務検定の資格保持者',
      '中国語・韓国語など第二外国語スキル',
      'SAP等のERPシステムの使用経験'
    ],
    benefits: [
      '完全週休２日制（土日祝）',
      '年間休日120日以上',
      '社会保険完備',
      '通勤手当（全額支給）',
      '住宅手当',
      '残業手当（全額支給）',
      '賞与年２回',
      '退職金制度',
      '健康診断',
      '資格取得支援制度'
    ],
    process: [
      '書類選考',
      '１次面接（人事担当）',
      '２次面接（部門長）',
      '最終面接（役員）',
      '内定'
    ],
    updateDate: '2025/08/13'
  },
  '2153': {
    id: '2153',
    jobNo: '2153',
    company: 'TBWA\\HAKUHODO',
    companyDescription: 'グローバル広告エージェンシー',
    title: 'クリエイティブディレクター',
    employmentType: '正社員',
    salary: '600万円～1000万円',
    location: '東京都港区',
    workingHours: '10:00～19:00（裁量労働制）',
    holidays: '土日祝、年末年始、夏季休暇、有給休暇',
    description: 'グローバルクライアントの広告キャンペーンの企画・制作・実施を担当いただきます。',
    jobContent: [
      '広告キャンペーンのコンセプト開発',
      'クリエイティブの監修・ディレクション',
      'プレゼンテーション資料の作成',
      'クライアントとの折衡・提案',
      '制作チームのマネジメント'
    ],
    requirements: [
      '広告代理店でのクリエイティブ経験（5年以上）',
      'デジタルマーケティングの知識',
      '英語力（ビジネスレベル）',
      'プレゼンテーションスキル'
    ],
    welcomeRequirements: [
      'グローバルブランドの広告制作経験',
      'デジタルキャンペーンの企画・実施経験',
      'チームマネジメント経験'
    ],
    benefits: [
      '完全週休２日制',
      'フレックスタイム制',
      '在宅勤務制度',
      '社会保険完備',
      '通勤手当',
      '健康診断',
      'スキルアップ研修'
    ],
    process: [
      '書類選考',
      'ポートフォリオ審査',
      '１次面接',
      '２次面接',
      '内定'
    ],
    updateDate: '2025/08/13'
  },
  // Add more job details for other IDs...
}

export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const job = jobDetails[resolvedParams.id] || jobDetails['13961'] // Default to first job if not found
  const [activeTab, setActiveTab] = useState('募集要項')

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="mb-6">
        <Link href="/results" className="text-blue-600 hover:underline">
          ← 検索結果に戻る
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg">
        <div className="border-b p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                {job.company}
              </h1>
              <p className="text-gray-600">{job.companyDescription}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Job No: {job.jobNo}</div>
              <div className="text-sm text-gray-500">更新日: {job.updateDate}</div>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold mb-4">{job.title}</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <span className="font-semibold">雇用形態:</span> {job.employmentType}
            </div>
            <div>
              <span className="font-semibold">給与:</span> {job.salary}
            </div>
            <div>
              <span className="font-semibold">勤務地:</span> {job.location}
            </div>
            <div>
              <span className="font-semibold">勤務時間:</span> {job.workingHours}
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex gap-4 mb-6 border-b">
            {['募集要項', '企業情報', '選考プロセス'].map((tab) => (
              <button
                key={tab}
                className={`pb-2 px-4 font-semibold ${
                  activeTab === tab 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === '募集要項' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">仕事内容</h3>
                <p className="mb-3">{job.description}</p>
                <ul className="list-disc pl-5 space-y-1">
                  {job.jobContent.map((content, index) => (
                    <li key={index}>{content}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">必須要件</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">歓迎要件</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {job.welcomeRequirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">福利厚生</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {job.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === '企業情報' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">企業概要</h3>
                <p>{job.companyDescription}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">勤務地詳細</h3>
                <p>{job.location}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">勤務時間・休日</h3>
                <p>勤務時間: {job.workingHours}</p>
                <p>休日: {job.holidays}</p>
              </div>
            </div>
          )}

          {activeTab === '選考プロセス' && (
            <div>
              <h3 className="text-lg font-semibold mb-3">選考フロー</h3>
              <ol className="list-decimal pl-5 space-y-2">
                {job.process.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              応募する
            </button>
            <button className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50">
              お気に入りに保存
            </button>
            <button className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50">
              問い合わせ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}