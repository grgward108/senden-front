import Link from 'next/link'

interface JobCardProps {
  job: {
    id: string
    jobNo: string
    recruitmentStatus: string
    managementStatus: string
    statusColor: string
    companyName: string
    companyScore: string
    companyUrl?: string
    industry: string
    jobType: string
    jobTitle: string
    description: string
    salaryRange: string
    updateDate: string
    reissueDate: string
    personInCharge: string
    workLocation: string
    yearEstablished: string
    features: string[]
    // AI関連のオプショナルフィールド
    aiRecommendation?: {
      reason: string
      matchScore: number
    }
  }
  showDetailButton?: boolean
  showRecommendReason?: boolean
}

export default function JobCard({ job, showDetailButton = true, showRecommendReason = false }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <table className="w-full">
        <tbody>
          <tr>
            <td className="p-6 w-40 bg-gray-50 align-top border-r">
              <div className="text-xs text-gray-500 font-medium mb-2">【募集ステータス】</div>
              <div className={`inline-block px-3 py-1 rounded text-xs font-bold text-white mb-3 ${
                job.statusColor === 'orange' ? 'bg-orange-500' : 'bg-gray-400'
              }`}>
                {job.recruitmentStatus}
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div>ID: {job.jobNo}</div>
                <div className="text-xs">
                  <div className="font-medium">管理ステータス:</div>
                  <div>{job.managementStatus}</div>
                </div>
              </div>
            </td>
            
            <td className="p-6">
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-full">
                      <div className="flex items-baseline gap-4 mb-1">
                        <span className="text-xs text-gray-500 font-medium">【企業名】</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-gray-900">
                            {job.companyName}
                          </span>
                          <span className="text-sm text-gray-500">
                            ({job.companyScore}/🚩)
                          </span>
                        </div>
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
                  <Link href={`/detail/${job.id}`} className="text-lg font-semibold mb-2 text-blue-600 hover:text-blue-700 hover:underline inline-block">
                    {job.jobTitle}
                  </Link>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">{job.description}</p>
                </div>

                {/* AI推薦理由 - オプショナル表示 */}
                {showRecommendReason && job.aiRecommendation && (
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-purple-600 text-lg">✨</span>
                        <span className="text-sm font-semibold text-purple-700">AI推薦理由</span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <span 
                              key={i} 
                              className={`text-xs ${
                                i < Math.floor(job.aiRecommendation.matchScore / 20) ? 'text-yellow-500' : 'text-gray-300'
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-purple-600">{job.aiRecommendation.matchScore}%</span>
                        <div className="text-xs text-gray-500">マッチ度</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">{job.aiRecommendation.reason}</p>
                  </div>
                )}
                
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
                  <span className="text-gray-500">再起票日：</span>
                  <span className="font-medium">{job.reissueDate}</span>
                </div>
                <div>
                  <span className="text-gray-500">担当者：</span>
                  <span className="font-medium">{job.personInCharge}</span>
                </div>
                <div className="pt-2 border-t mt-2">
                  <div className="text-gray-500">勤務地</div>
                  <div className="font-medium">{job.workLocation}</div>
                </div>
                <div>
                  <div className="text-gray-500">年齢</div>
                  <div className="font-medium">{job.yearEstablished}</div>
                </div>
                <div className="pt-2 border-t mt-2">
                  <div className="text-gray-500">給与</div>
                  <div className="font-medium text-green-600">{job.salaryRange}</div>
                </div>
                
                {showDetailButton && (
                  <div className="mt-6">
                    <Link 
                      href={`/detail/${job.id}`}
                      className="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition font-medium"
                    >
                      詳細を見る
                    </Link>
                  </div>
                )}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}