'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function CandidateSearch() {
  const router = useRouter()
  const [candidateId, setCandidateId] = useState('')
  const [error, setError] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!candidateId.trim()) {
      setError('求職者IDを入力してください')
      return
    }
    
    // Navigate to candidate detail page
    router.push(`/candidate/${candidateId}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Back button */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            トップページに戻る
          </Link>
        </div>
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">求職者検索</h1>
          <p className="text-gray-600">求職者IDを入力して詳細情報を確認</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSearch} className="space-y-6">
            <div>
              <label htmlFor="candidateId" className="block mb-2 text-sm font-medium text-gray-700">
                求職者ID
              </label>
              <input
                type="text"
                id="candidateId"
                value={candidateId}
                onChange={(e) => setCandidateId(e.target.value)}
                placeholder="例: C12345"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition text-lg"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition font-medium text-lg"
            >
              検索
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t">
            <div className="text-sm text-gray-600">
              <p className="font-semibold mb-2">検索例：</p>
              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => setCandidateId('C10001')}
                  className="block text-purple-600 hover:text-purple-700 hover:underline"
                >
                  C10001
                </button>
                <button
                  type="button"
                  onClick={() => setCandidateId('C10002')}
                  className="block text-purple-600 hover:text-purple-700 hover:underline"
                >
                  C10002 
                </button>
                <button
                  type="button"
                  onClick={() => setCandidateId('C10003')}
                  className="block text-purple-600 hover:text-purple-700 hover:underline"
                >
                  C10003 
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            ※ 求職者IDは担当者から提供されます
          </p>
        </div>
      </div>
    </div>
  )
}