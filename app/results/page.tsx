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
    companyId: '(1247/歩)',
    companyUrl: 'https://www.mic-corp.co.jp',
    companyTags: ['広告', '広告・クリエイティブ', '営業', 'プロデューサー', '現体', '営業', 'アカウントエグゼクティブ'],
    jobTitle: '専門商社、総合商社でのトレード事務',
    jobTags: ['広告', 'クリエイティブ', '営業', 'プロデューサー', '現体', '営業', 'アカウントエグゼクティブ'],
    description: '主に、メーカー・コンビニ・ドラッグストアへの各種提案等のデザインセスの仕事開発。業務の効率達成。システム導入課題など放送すまです。お客様の委託について、Web・CMS・管理に実家らして、高まま、職まと福建と論',
    salaryRange: '420万円〜704万円',
    updateDate: '2025/08/13',
    workLocation: '東京都',
    applicationType: '土日祝、正社員・プロモーションや長仏制度など話習わある方',
    features: ['ビールシェ\\プロモーションや帰席制など話習わある方', '広告・Web・プロモーションやその中で経験したことを話習わある方', '働き形態など話習わある方']
  },
  {
    id: '79194',
    jobNo: '79194',
    status: 'RA管理対象外',
    statusColor: 'gray',
    companyName: '動員',
    companyId: '(6/歩)',
    companyUrl: 'https://www.douin.co.jp',
    companyTags: ['広告制作会社', '正社員'],
    jobTitle: '広告制作会社',
    jobTags: ['広告', 'クリエイティブ', '営業', 'プロデューサー', '現体', '営業', 'アカウントエグゼクティブ'],
    description: 'クライアントと企画心の両面開発（業務：打ち合わせの開発）を担当いただきます。・クライアントの制作や運営などのプランニング・広告・マーケティング理的な企画実装における、如和の契約・プランニング',
    salaryRange: '500万円〜800万円',
    updateDate: '2025/08/13',
    workLocation: '東京・大阪',
    applicationType: '正社員',
    features: []
  },
  {
    id: '2153',
    jobNo: '2153',
    status: 'RA管理中',
    statusColor: 'orange',
    companyName: 'TBWA\\HAKUHODO',
    companyId: '(5008/歩)',
    companyUrl: 'https://www.tbwahakuhodo.co.jp',
    companyTags: ['広告制作', '提案制作', '原作もし内'],
    jobTitle: 'クリエイティブエージェンシー',
    jobTags: ['広告', 'クリエイティブ', 'アシスタント', '営業アシスタント'],
    description: 'IP・提携機能のアシスタント業務を行っていただきます。最初に、Apple のグローバルで2024これらクリエイティブを認証する機械的です。そのよって、日本の企業や債権についてクリエイティ',
    salaryRange: '500万円〜900万円',
    updateDate: '2025/08/13',
    workLocation: '東京・大阪',
    applicationType: '正社員',
    features: ['住宅・リモートワーク', '設業なし']
  },
  {
    id: '2422',
    jobNo: '2422',
    status: 'RA管理中',
    statusColor: 'orange',
    companyName: 'マインドフリー',
    companyId: '(264/歩)',
    companyUrl: 'https://www.mindfree.co.jp',
    companyTags: ['大企業', 'SNS マーケティング', 'KJ仕様'],
    jobTitle: 'デジタルマーケティングマネージャー',
    jobTags: ['デジタル', 'IT', 'デジタルマーケティング', 'デジタルプランナー'],
    description: 'SNS マーケティング戦略や企業から大企業へ、企画フランチャイズ人・アルト準備における、新組織・企業理論・コンテンツ作り・生行課題・実績課題をカルゲットetc.になせます。百々ダタイントより三ニュース',
    salaryRange: '350万円〜500万円',
    updateDate: '2025/08/13',
    workLocation: '東京・大阪',
    applicationType: '正社員',
    features: ['化過正し', '(1) → (3) やすが可心思', 'id: linkedin・Vr・Facebook・LINE']
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
                            <div>
                              <div className="text-xs text-gray-500 mb-1">【企業名】{job.companyId}</div>
                              <Link href={`/detail/${job.id}`} className="text-xl font-bold text-blue-600 hover:text-blue-700 hover:underline">
                                {job.companyName}
                              </Link>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {job.companyTags.map((tag, idx) => (
                                  <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                              {job.companyUrl && (
                                <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" 
                                   className="text-xs text-blue-500 hover:underline mt-1 inline-block">
                                  {job.companyUrl}
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-xs text-gray-500 mb-1">【職種】{job.applicationType}</div>
                          <h3 className="text-lg font-semibold mb-2">{job.jobTitle}</h3>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {job.jobTags.map((tag, idx) => (
                              <span key={idx} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">{job.description}</p>
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