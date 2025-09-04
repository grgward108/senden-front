'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'

const mockJobs = [
  {
    id: '13961',
    jobNo: '79649',
    status: 'RA管理中',
    statusColor: 'orange',
    companyName: 'MIC',
    companyId: '(1547/歩)',
    companyUrl: 'https://www.mic-corp.co.jp',
    industry: '広告・クリエイティブ',
    jobType: '営業・プロデューサー・現体・営業・アカウントエグゼクティブ',
    jobTitle: '専門商社、総合商社でのトレード事務',
    description: '主に、メーカー・コンビニ・ドラッグストアへの各種提案等のデザイン及びの受理運営。業務の効率達成。システム導入課題など行っていく、Web・CMS・管理に基本まして一気通貫で職業と職業',
    salaryRange: '420万円〜704万円',
    updateDate: '2025/08/15',
    workLocation: '東京都',
    yearEstablished: '28歳〜35歳',
    features: ['正社員', '土日祝休み', '週1〜4日以内の勤務', '時短勤務', '1日5時間以内の勤務でもOK', '残業なし（月0時間）', 'フレックスタイム制', '在宅・リモートワーク', '副業・兼業OK', '転勤なし']
  },
  {
    id: '79194',
    jobNo: '79194',
    status: 'RA管理対象外',
    statusColor: 'gray',
    companyName: '動員',
    companyId: '(6/歩)',
    companyUrl: 'https://www.douin.co.jp',
    industry: '広告制作会社',
    jobType: '広告・クリエイティブ・営業・プロデューサー',
    jobTitle: '広告制作会社でのアカウントエグゼクティブ',
    description: 'クライアントと企画心の両面開発（業務：打ち合わせの開発）を担当いただきます。・クライアントの制作や運営などのプランニング・広告・マーケティング理的な企画実装における、如和の契約・プランニング',
    salaryRange: '500万円〜800万円',
    updateDate: '2025/08/13',
    workLocation: '東京・大阪',
    yearEstablished: '25歳〜40歳',
    features: ['正社員', '土日祝休み', '年収130万円以内に収まる', '交通費全額支給', '育児支援制度あり', '社宅・家賃補助制度']
  },
  {
    id: '2153',
    jobNo: '2153',
    status: 'RA管理中',
    statusColor: 'orange',
    companyName: 'TBWA\\HAKUHODO',
    companyId: '(5008/歩)',
    companyUrl: 'https://www.tbwahakuhodo.co.jp',
    industry: '広告・クリエイティブ・営業・プロデューサー・現体・営業・アカウントエグゼクティブ',
    jobType: '広告',
    jobTitle: 'クリエイティブエージェンシー',
    description: 'IP・提携機能のアシスタント業務を行っていただきます。最初に、Apple のグローバルで2024これらクリエイティブを認証する機械的です。そのよって、日本の企業や債権についてクリエイティ',
    salaryRange: '500万円〜900万円',
    updateDate: '2025/08/13',
    workLocation: '東京・大阪',
    yearEstablished: '30歳〜45歳',
    features: ['正社員', '土日祝休み', '残業ほとんどなし（月20時間以内）', 'フレックスタイム制', '在宅・リモートワーク', '副業・兼業OK', '未経験者歓迎', 'U・Iターン歓迎']
  },
  {
    id: '2422',
    jobNo: '2422',
    status: 'RA管理中',
    statusColor: 'orange',
    companyName: 'マインドフリー',
    companyId: '(264/歩)',
    companyUrl: 'https://www.mindfree.co.jp',
    industry: 'IT・Web・通信',
    jobType: 'デジタル・IT・デジタルマーケティング・デジタルプランナー',
    jobTitle: 'デジタルマーケティングマネージャー',
    description: 'SNS マーケティング戦略や企業から大企業へ、企画フランチャイズ人・アルト準備における、新組織・企業理論・コンテンツ作り・生行課題・実績課題をカルゲットetc.になせます。百々ダタイントより三ニュース',
    salaryRange: '350万円〜500万円',
    updateDate: '2025/08/13',
    workLocation: '東京・大阪',
    yearEstablished: '25歳〜35歳',
    features: ['正社員', '上場企業', '外資系企業', '2年連続売上10%以上UP', '設立5年以内', '社員平均年齢20代', '女性社員が5割以上', '女性が活躍中', '第二新卒歓迎', '学歴不問', '語学を活かす・英語', 'しゅふクリ・ママクリ', 'エグゼクティブ', 'Web重視']
  },
  {
    id: '5678',
    jobNo: '5678',
    status: 'RA管理中',
    statusColor: 'orange',
    companyName: 'アマゾンジャパン',
    companyId: '(1200/歩)',
    companyUrl: 'https://www.amazon.co.jp',
    industry: 'IT・通信',
    jobType: 'エンジニア・ソフトウェアエンジニア',
    jobTitle: 'ソフトウェアエンジニア',
    description: 'AWS サービスの開発・改善に携わるソフトウェアエンジニアリング。クラウドインフラストラクチャの設計と実装、スケーラブルなシステムの構築',
    salaryRange: '800万円〜1200万円',
    updateDate: '2025/08/10',
    workLocation: '東京都品川区',
    yearEstablished: '28歳〜45歳',
    features: ['正社員', '土日祝休み', 'フレックスタイム制', '在宅・リモートワーク', '副業・兼業OK', '交通費全額支給', '研修制度充実', '駅から徒歩5分以内のオフィス', 'オフィスが禁煙', '服装自由', '社宅・家賃補助制度', '部長・幹部・管理候補者', 'U・Iターン歓迎']
  }
]

function ResultsContent() {
  const searchParams = useSearchParams()
  const keyword = searchParams.get('keyword') || ''
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            検索画面に戻る
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-2">検索結果</h1>
        {keyword && (
          <p className="text-gray-600 mb-6">「{keyword}」の検索結果 {mockJobs.length}件</p>
        )}
        
        <div className="space-y-4">
          {mockJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="p-6 w-32 bg-gray-50 align-top border-r">
                      <div className={`inline-block px-3 py-1 rounded text-xs font-bold text-white mb-3 ${
                        job.statusColor === 'orange' ? 'bg-orange-500' : 'bg-gray-400'
                      }`}>
                        {job.status === 'RA管理中' ? '提案可' : '提案済'}
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>ID: {job.jobNo}</div>
                        <div className="text-xs">{job.status}</div>
                      </div>
                    </td>
                    
                    <td className="p-6">
                      <div className="space-y-4">
                        <div className="border-b pb-3">
                          <div className="flex items-start justify-between mb-2">
                            <div className="w-full">
                              <div className="flex items-baseline gap-4 mb-1">
                                <span className="text-xs text-gray-500 font-medium">【企業名】</span>
                                <Link href={`/detail/${job.id}`} className="text-xl font-bold text-blue-600 hover:text-blue-700 hover:underline">
                                  {job.companyName} <span className="text-sm text-gray-500 font-normal">{job.companyId}</span>
                                </Link>
                              </div>
                              <div className="flex items-baseline gap-4 mb-2">
                                <span className="text-xs text-gray-500 font-medium">【業種】</span>
                                <span className="text-sm">{job.industry}</span>
                              </div>
                              {job.companyUrl && (
                                <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" 
                                   className="text-xs text-blue-500 hover:underline inline-block">
                                  {job.companyUrl}
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex items-baseline gap-4 mb-2">
                            <span className="text-xs text-gray-500 font-medium">【職種】</span>
                            <span className="text-sm">{job.jobType}</span>
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{job.jobTitle}</h3>
                          <p className="text-sm text-gray-700 leading-relaxed mb-3">{job.description}</p>
                        </div>
                        
                        {job.features.length > 0 && (
                          <div className="pt-3 border-t">
                            <div className="flex flex-wrap gap-2">
                              {job.features.map((feature, idx) => (
                                <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                    
                    <td className="p-6 bg-gray-50 w-56 align-top text-sm border-l">
                      <div className="space-y-2">
                        <div>
                          <span className="text-gray-500">掲載開始：</span>
                          <span className="font-medium">{job.updateDate}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">年収：</span>
                          <span className="font-bold text-green-600">{job.salaryRange}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">勤務地：</span>
                          <span className="font-medium">{job.workLocation}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">応募年齢：</span>
                          <span className="font-medium">{job.yearEstablished}</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 space-y-2">
                        <Link 
                          href={`/detail/${job.id}`}
                          className="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition font-medium"
                        >
                          詳細を見る
                        </Link>
                        <button className="block w-full bg-gray-200 text-gray-700 text-center py-2 rounded hover:bg-gray-300 transition">
                          保存
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-white border rounded hover:bg-gray-50">前へ</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">1</button>
            <button className="px-4 py-2 bg-white border rounded hover:bg-gray-50">2</button>
            <button className="px-4 py-2 bg-white border rounded hover:bg-gray-50">3</button>
            <button className="px-4 py-2 bg-white border rounded hover:bg-gray-50">次へ</button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>}>
      <ResultsContent />
    </Suspense>
  )
}