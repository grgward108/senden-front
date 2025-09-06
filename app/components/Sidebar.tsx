'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  
  const isJobSearch = pathname === '/' || pathname.startsWith('/results') || pathname.startsWith('/detail')
  const isCandidateSearch = pathname.startsWith('/candidate')

  // Update body margin when sidebar collapses
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const mainContent = document.querySelector('body > div:last-child') as HTMLElement
      if (mainContent) {
        mainContent.style.marginLeft = isCollapsed ? '4rem' : '16rem'
        mainContent.style.transition = 'margin-left 0.3s ease'
      }
    }
  }, [isCollapsed])
  
  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isCollapsed ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          )}
        </svg>
      </button>

      <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-white shadow-lg h-screen fixed left-0 top-0 transition-all duration-300 z-40`}>
        <div className={`${isCollapsed ? 'p-4' : 'p-6'} border-b mt-14`}>
          {!isCollapsed && (
            <>
              <h1 className="text-xl font-bold text-gray-900">
                マスメディアン
              </h1>
              <p className="text-sm text-gray-500 mt-1">求人システム</p>
            </>
          )}
        </div>
        
        <nav className="p-4">
          <Link 
            href="/"
            className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} px-4 py-3 rounded-lg mb-2 transition ${
              isJobSearch 
                ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            title={isCollapsed ? '求人検索' : ''}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {!isCollapsed && <span className="font-medium">求人検索</span>}
          </Link>
          
          <Link 
            href="/candidate-search"
            className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} px-4 py-3 rounded-lg mb-2 transition ${
              isCandidateSearch 
                ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            title={isCollapsed ? '求職者検索' : ''}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            {!isCollapsed && <span className="font-medium">求職者検索</span>}
          </Link>
        </nav>
        
        {!isCollapsed && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
            <p className="text-xs text-gray-500 text-center">
              © 2025 Mass Median Co., Ltd.
            </p>
          </div>
        )}
      </div>
    </>
  )
}