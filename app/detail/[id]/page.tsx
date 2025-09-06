'use client'

import Link from 'next/link'
import { useState, use } from 'react'

const jobDetails = {
  '13961': {
    id: '13961',
    jobNo: '79649',
    status: '正社員',
    companyName: 'MIC',
    companyUrl: 'http://www.mic-p.com',
    location: '東京都新宿区',
    
    // Company tags
    tags: ['土日祝休み', 'フレックスタイム制', '在宅・リモートワーク', '転勤なし', '交通費全額支給', '育児支援制度充実', '社宅・家賃補助制度', '服装自由', '上場企業', '女性社員が5割以上', '女性が活躍中', '未経験者歓迎'],
    
    // Main job title
    mainTitle: '新たな事業領域に進出し業績を拡大し続けるオペレーション改善ファーム',
    
    // Key points
    keyPoints: [
      '印刷やデザイン、システム開発を通じたBPOやマーケ支援を手掛ける成長企業。',
      '楽天や日清食品など大手と直接取引し、近頃提案から関われる自由度の高い営業職を募集。',
      '平均年齢30歳、新オフィスで若い視点を取り入れつつ、売上3倍成長を達成。'
    ],
    
    // Tab sections
    recruitmentDetails: {
      jobType: '営業職',
      jobDescription: `主に、メーカー・コンビニ・ドラッグストアの店頭販促物のデザイン及び印刷提案、業務改善提案、システム導入提案などを行います。印刷物の製造だけでなく、Web・SNS・物流に至るまで、一気通貫で顧客と関わるので提案の幅は非常に広いです。社内のデザイナー、SE、自社工場と連携することで、川上から川下まで一括で仕事を完成させられる醍醐味があります。

部門間のつなぎ役になり、各業務（販促物のデザイン・印刷や業務改善など）のトータルディレクションを行い、社内・社外のパートナー企業と協力して売上向上に向けて業務を遂行していただきます。

・担当する顧客とのコミュニケーションと受注した案件の進行管理
・販促物の企画、提案、ディレクション
・印刷物の校正や生産手配
・スケジュール、見積作成
・制作や生産現場との進行管理
・メールやチャットツールを使った自社営業拠点、生産現場、顧客とのやり取り
※配属先は適考を通じて決定します。

リクルートサイト：https://www.mic-p.co.jp/recruit/`,
      department: '※担当顧客によりチームの構成人数や提案内容は異なります。',
      qualifications: {
        required: ['【学歴】大学卒業以上', '【求める経験・能力・スキル】', '【必須】', '営業のご経験がある方'],
        welcome: []
      }
    },
    
    workLocation: {
      address: '〒160-0023　新宿区西新宿5-14-3',
      nearestStation: '中野坂上駅より徒歩8分\n西新宿五丁目駅より徒歩7分',
      workStyle: [
        '【テレワーク】可',
        '在宅勤務：終日在宅勤務（終日利用）',
        '※週1テレワーク制度あり'
      ],
      nonSmoking: '【喫煙環境】屋内全面禁煙'
    },
    
    workingConditions: {
      employmentType: '【雇用形態】正社員',
      probationPeriod: '【試用期間】有（3カ月）',
      probationConditions: '【試用期間中の異なる条件】無',
      salary: {
        annual: '【想定年収】429〜704万円程度',
        monthly: '【想定月収】285,580円〜482,080円程度',
        details: '※経験・能力等考慮の上、規定により優遇\n※採用時には前職以上の給与を保証されております。',
        overtime: '【残業手当】月40時間相当分の固定残業代として、\n月67,580円（年収429万円の場合）〜114,080円（年収704万円の場合）月給に含んで支給\n※超過分は別途支給',
        otherAllowance: '【その他手当】住居手当：〜30,000円（支給条件あり）',
        bonus: '【給与形態】月給制【賞与】年2回（7月、12月）、決算賞与　※初年度は入社月により按分',
        raise: '【昇給】年1回（4月）'
      },
      workingHours: {
        system: '【就業時間】フルフレックスタイム',
        coreTime: '【休憩時間】60分',
        standardHours: '【所定労働時間】8時間',
        overtime: '【時間外労働】有（30〜40時間程度／月）',
        flexDetails: '【労働時間制度の適用】\nフレックスタイム制\n＜コアタイム＞フルフレックスのためなし'
      },
      holidays: {
        description: '【休日・休暇】完全週休2日制（土・日）、祝日、夏期休暇、年末年始休暇、有給休暇（10日〜20日）、慶弔休暇、特別有給休暇（結婚休暇・忌引休暇・災害休暇）、生理休暇、産前産後休暇、配偶者出産休暇、育児休暇、介護休暇',
        annualDays: '【年間休日】120日'
      }
    },
    
    benefits: {
      insurance: [
        '【通勤手当】有（全額）',
        '【健康保険】有',
        '【厚生年金】有',
        '【労災保険】有',
        '【雇用保険】有',
        '【退職金制度】有',
        '【定年退職制度】有',
        '【副業・兼業】不可',
        '※内容により要相談。'
      ],
      otherBenefits: [
        '社内コミュニケーションの推進　クラブ活動／社員旅行／社内bar／屋上BBQ場',
        '特別手当　結婚祝い金／出産祝い金／慶弔見舞金他',
        '有給取得推進制度',
        'ハッピーホリデー・・・土日を含めて9連休の有給取得を推進',
        'サンクスファミリーデー・・・家族の記念日に有給取得を推進',
        'シーズンデイオフ・・・春夏秋冬の3カ月に1度、年間で4日の有給取得を推進',
        'ママ社員サポート制度',
        '復帰ママサポート手当・・・月2万円支給（復帰後2年間）',
        '子供看護休暇・・・有給休暇を1丁につき5日追加で付与（最大10日）',
        '時短勤務制度・・・1日6時間、7時間、8時間（残業無し）など柔軟に対応可能',
        '私服勤務OK',
        '研修サポート',
        '社内コミュニケーションの推進　クラブ活動'
      ]
    },
    
    selectionProcess: {
      recruitmentCount: '【募集人数】1名',
      deadline: '【応募締切日】決定次第終了',
      timing: '【入社時期】即日より応相談',
      documents: '【書類審査】有',
      interviews: '【面接回数】2回',
      tests: '【適性検査】有',
      flow: [
        '【1】書類選考',
        '【2】SPI',
        '【3】1次選考（人事・役員、現場との面接）',
        '【4】最終選考（社長との面接）',
        '【5】内定',
        '※フローは変更になることもございます。'
      ]
    },
    
    companyInfo: {
      name: '【企業名】MIC株式会社',
      url: '【URL】http://www.mic-p.com',
      address: '【住所】〒160-0023 東京都新宿区西新宿5丁目14-3',
      representative: '【代表者】代表取締役社長　河合　克也',
      established: '【設立日】1946年7月',
      businessContent: [
        '●ビジネス・プロセス・アウトソーシング',
        '●マーケティングオペレーション改善',
        '●販促プロモーション支援',
        '●デジタルコンテンツ制作＆配信',
        '●ICTシステム開発',
        '●クリエイティブデザイン',
        '●印刷製造',
        '●電子機器キッティング',
        '●フルフィルメント＆ロジスティクス',
        '●業務局・コールセンター業',
        '●人材派遣',
        '●データ分析＆改善コンサルティング'
      ],
      employees: '【社員数】616名',
      capital: '【資本金】4億9840万円',
      overview: `【主要取引先】
アース製薬株式会社、アニメイト株式会社、アートネイチャー株式会社、小田急百貨店株式会社、キヤノン株式会社、ギャップジャパン株式会社、コニカミノルタ株式会社、串カツ田中ホールディングス株式会社、サムソナイトジャパン株式会社、スリーエムジャパン株式会社、ゼンショーホールディングス株式会社日本農産工業グループ株式会社、日清食品株式会社、エスエス製薬株式会社　等`,
      description: `【市場情報】スタンダード

【会社の特徴】
MIC（ミック）は1946年創業のセールスプロモーション企業です。
母体は印刷会社ですが、時代の潮流を読み、現在は販促領域におる、コンサルティング、システム開発、デザインの開発、物流、カスタマーサポートなど、印刷以外の事業展開を行われています。

2024年にはスタンダードに上場を果たし、資金を物流設備やシステム、コールセンターなどに投資をし、事業基盤を強化されました。

直近では「360°フルサービス」という、メーカーの販促担当者のお困りごとを一気通貫で解決できるサービスを開発。総合他社がいないことからクライアントからの引き合いが強く、収益性も高い事業を展開されております。

360°フルサービスとは？
https://www.mic-p.com/ir/message

クライアントはファミリーマートや楽天、日清食品、ゼンショー、アース製薬、アニメイトなど多岐にわたり、代理店が介入することなく直接取引のため、企画提案から納品まで一貫して携わることが可能です。

また、「働きがいのある会社」2019年ベストカンパニー賞を受賞する等、財務体質や挑戦する姿勢は対外的にも評価をされている会社です。`
    },
    
    recommendationPoints: `多くの印刷/SP会社を担当をしておりますが、その中でも特に成功をしている と感じる会社です。
実際にマスメディアンからも2年間で10名の紹介実績がございます。

明るく、社内交流が活発な風通しの良い社風で、労働環境の良さも◎
知名度こそまだですが、安心して就業ができる隠れた優良企業です。`
  }
}

export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const job = jobDetails[resolvedParams.id] || jobDetails['13961']
  const [activeSection, setActiveSection] = useState<string | null>('recruitment')

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const jumpToSection = (section: string) => {
    setActiveSection(section)
    // Scroll to the section
    setTimeout(() => {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back button */}
        <div className="mb-6">
          <Link href="/results" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            検索結果に戻る
          </Link>
        </div>

        {/* Main content */}
        <div className="bg-white rounded-lg shadow-lg">
          {/* Header */}
          <div className="p-6 border-b">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-red-500 text-white px-2 py-1 text-sm rounded">{job.status}</span>
            </div>
            <h1 className="text-3xl font-bold mb-3">{job.companyName}</h1>
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🌐</span>
                <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {job.companyUrl}
                </a>
              </div>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {job.tags.map((tag, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Main title */}
            <h2 className="text-xl font-bold mb-4">{job.mainTitle}</h2>
            
            {/* Key points */}
            <div className="space-y-2">
              {job.keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-gray-400 mr-2">●</span>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>

            {/* Navigation tabs */}
            <div className="flex gap-4 mt-6 pt-4 border-t overflow-x-auto">
              <button 
                onClick={() => jumpToSection('recruitment')}
                className={`text-sm px-4 py-2 border-b-2 whitespace-nowrap transition ${
                  activeSection === 'recruitment' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}>
                募集要項
              </button>
              <button 
                onClick={() => jumpToSection('location')}
                className={`text-sm px-4 py-2 border-b-2 whitespace-nowrap transition ${
                  activeSection === 'location' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}>
                勤務地
              </button>
              <button 
                onClick={() => jumpToSection('conditions')}
                className={`text-sm px-4 py-2 border-b-2 whitespace-nowrap transition ${
                  activeSection === 'conditions' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}>
                勤務条件・待遇
              </button>
              <button 
                onClick={() => jumpToSection('benefits')}
                className={`text-sm px-4 py-2 border-b-2 whitespace-nowrap transition ${
                  activeSection === 'benefits' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}>
                制度・福利厚生
              </button>
              <button 
                onClick={() => jumpToSection('selection')}
                className={`text-sm px-4 py-2 border-b-2 whitespace-nowrap transition ${
                  activeSection === 'selection' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}>
                選考フロー
              </button>
              <button 
                onClick={() => jumpToSection('company')}
                className={`text-sm px-4 py-2 border-b-2 whitespace-nowrap transition ${
                  activeSection === 'company' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}>
                会社概要
              </button>
              <button 
                onClick={() => jumpToSection('recommendation')}
                className={`text-sm px-4 py-2 border-b-2 whitespace-nowrap transition ${
                  activeSection === 'recommendation' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}>
                おすすめポイント
              </button>
              <button 
                onClick={() => jumpToSection('related')}
                className={`text-sm px-4 py-2 border-b-2 whitespace-nowrap transition ${
                  activeSection === 'related' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}>
                関連求人
              </button>
            </div>
          </div>

          {/* Content sections */}
          <div className="p-6">
            {/* 募集要項 */}
            <div id="recruitment" className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer py-3 border-b-2 border-red-500"
                onClick={() => toggleSection('recruitment')}
              >
                <h3 className="text-xl font-bold">募集要項</h3>
                <span className="text-2xl text-gray-400">{activeSection === 'recruitment' ? '−' : '＋'}</span>
              </div>
              {activeSection === 'recruitment' && (
                <div className="mt-6 space-y-6">
                  <div className="grid grid-cols-[200px_1fr] gap-4 py-4 border-b">
                    <div className="font-semibold">求人職種</div>
                    <div>{job.recruitmentDetails.jobType}</div>
                  </div>
                  <div className="grid grid-cols-[200px_1fr] gap-4 py-4 border-b">
                    <div className="font-semibold">仕事内容</div>
                    <div className="whitespace-pre-wrap">{job.recruitmentDetails.jobDescription}</div>
                  </div>
                  <div className="grid grid-cols-[200px_1fr] gap-4 py-4 border-b">
                    <div className="font-semibold">部署</div>
                    <div>{job.recruitmentDetails.department}</div>
                  </div>
                  <div className="grid grid-cols-[200px_1fr] gap-4 py-4">
                    <div className="font-semibold">応募資格</div>
                    <div>
                      {job.recruitmentDetails.qualifications.required.map((req, idx) => (
                        <div key={idx}>{req}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 勤務地 */}
            <div id="location" className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer py-3 border-b-2 border-red-500"
                onClick={() => toggleSection('location')}
              >
                <h3 className="text-xl font-bold">勤務地</h3>
                <span className="text-2xl text-gray-400">{activeSection === 'location' ? '−' : '＋'}</span>
              </div>
              {activeSection === 'location' && (
                <div className="mt-6 space-y-6">
                  <div className="grid grid-cols-[200px_1fr] gap-4 py-4 border-b">
                    <div className="font-semibold">住所</div>
                    <div>{job.workLocation.address}</div>
                  </div>
                  <div className="grid grid-cols-[200px_1fr] gap-4 py-4 border-b">
                    <div className="font-semibold">最寄り駅</div>
                    <div className="whitespace-pre-wrap">{job.workLocation.nearestStation}</div>
                  </div>
                  <div className="grid grid-cols-[200px_1fr] gap-4 py-4">
                    <div className="font-semibold"></div>
                    <div>
                      {job.workLocation.workStyle.map((style, idx) => (
                        <div key={idx}>{style}</div>
                      ))}
                      <div className="mt-4">{job.workLocation.nonSmoking}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 勤務条件・待遇 */}
            <div id="conditions" className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer py-3 border-b-2 border-red-500"
                onClick={() => toggleSection('conditions')}
              >
                <h3 className="text-xl font-bold">勤務条件・待遇</h3>
                <span className="text-2xl text-gray-400">{activeSection === 'conditions' ? '−' : '＋'}</span>
              </div>
              {activeSection === 'conditions' && (
                <div className="mt-6 space-y-6">
                  <div className="grid grid-cols-[200px_1fr] gap-4 py-4 border-b">
                    <div className="font-semibold">雇用形態</div>
                    <div>{job.workingConditions.employmentType}</div>
                  </div>
                  <div className="grid grid-cols-[200px_1fr] gap-4 py-4 border-b">
                    <div className="font-semibold">給与</div>
                    <div className="space-y-2">
                      <div>{job.workingConditions.salary.annual}</div>
                      <div>{job.workingConditions.salary.monthly}</div>
                      <div className="text-sm text-gray-600">{job.workingConditions.salary.details}</div>
                      <div className="mt-4">{job.workingConditions.salary.overtime}</div>
                      <div className="mt-2">{job.workingConditions.salary.otherAllowance}</div>
                      <div className="mt-2">{job.workingConditions.salary.bonus}</div>
                      <div className="mt-2">{job.workingConditions.salary.raise}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[200px_1fr] gap-4 py-4 border-b">
                    <div className="font-semibold">就業時間</div>
                    <div className="space-y-2">
                      <div>{job.workingConditions.workingHours.system}</div>
                      <div>{job.workingConditions.workingHours.coreTime}</div>
                      <div>{job.workingConditions.workingHours.standardHours}</div>
                      <div>{job.workingConditions.workingHours.overtime}</div>
                      <div className="whitespace-pre-wrap">{job.workingConditions.workingHours.flexDetails}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[200px_1fr] gap-4 py-4">
                    <div className="font-semibold">休日・休暇</div>
                    <div className="space-y-2">
                      <div>{job.workingConditions.holidays.description}</div>
                      <div className="mt-4">{job.workingConditions.holidays.annualDays}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 制度・福利厚生 */}
            <div id="benefits" className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer py-3 border-b-2 border-red-500"
                onClick={() => toggleSection('benefits')}
              >
                <h3 className="text-xl font-bold">制度・福利厚生</h3>
                <span className="text-2xl text-gray-400">{activeSection === 'benefits' ? '−' : '＋'}</span>
              </div>
              {activeSection === 'benefits' && (
                <div className="mt-6 space-y-6">
                  {job.benefits.insurance.map((item, idx) => (
                    <div key={idx}>{item}</div>
                  ))}
                  <div className="mt-4">
                    <div className="font-semibold mb-2">【その他福利厚生】</div>
                    <ul className="list-disc pl-5 space-y-1">
                      {job.benefits.otherBenefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* 選考フロー */}
            <div id="selection" className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer py-3 border-b-2 border-red-500"
                onClick={() => toggleSection('selection')}
              >
                <h3 className="text-xl font-bold">選考フロー</h3>
                <span className="text-2xl text-gray-400">{activeSection === 'selection' ? '−' : '＋'}</span>
              </div>
              {activeSection === 'selection' && (
                <div className="mt-6 space-y-4">
                  <div>{job.selectionProcess.recruitmentCount}</div>
                  <div>{job.selectionProcess.deadline}</div>
                  <div>{job.selectionProcess.timing}</div>
                  <div>{job.selectionProcess.documents}</div>
                  <div>{job.selectionProcess.interviews}</div>
                  <div>{job.selectionProcess.tests}</div>
                  <div className="mt-6">
                    <div className="font-semibold mb-3">【選考の流れ】</div>
                    {job.selectionProcess.flow.map((step, idx) => (
                      <div key={idx}>{step}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 会社概要 */}
            <div id="company" className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer py-3 border-b-2 border-red-500"
                onClick={() => toggleSection('company')}
              >
                <h3 className="text-xl font-bold">会社概要</h3>
                <span className="text-2xl text-gray-400">{activeSection === 'company' ? '−' : '＋'}</span>
              </div>
              {activeSection === 'company' && (
                <div className="mt-6 space-y-4">
                  <div>{job.companyInfo.name}</div>
                  <div>{job.companyInfo.url}</div>
                  <div>{job.companyInfo.address}</div>
                  <div>{job.companyInfo.representative}</div>
                  <div>{job.companyInfo.established}</div>
                  <div>
                    <div className="font-semibold mb-2">【事業内容】</div>
                    {job.companyInfo.businessContent.map((item, idx) => (
                      <div key={idx}>{item}</div>
                    ))}
                  </div>
                  <div>{job.companyInfo.employees}</div>
                  <div>{job.companyInfo.capital}</div>
                  <div className="whitespace-pre-wrap">{job.companyInfo.overview}</div>
                  <div className="whitespace-pre-wrap">{job.companyInfo.description}</div>
                </div>
              )}
            </div>

            {/* おすすめポイント */}
            <div id="points" className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer py-3 border-b-2 border-red-500"
                onClick={() => toggleSection('recommendation')}
              >
                <h3 className="text-xl font-bold">おすすめポイント</h3>
                <span className="text-2xl text-gray-400">{activeSection === 'recommendation' ? '−' : '＋'}</span>
              </div>
              {activeSection === 'recommendation' && (
                <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                  <div className="whitespace-pre-wrap">{job.recommendationPoints}</div>
                  
                  <div className="mt-6 text-sm text-gray-600">
                    多くの印刷/SP会社を担当をしておりますが、その中でも特に成功をしていると感じる会社です。<br />
                    実際にマスメディアンからも2年間で10名の紹介実績がございます。<br /><br />
                    明るく、社内交流が活発な風通しの良い社風で、労働環境の良さも◎<br />
                    知名度こそまだですが、安心して就業ができる隠れた優良企業です。
                  </div>
                </div>
              )}
            </div>

            {/* 関連求人 */}
            <div id="related" className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer py-3 border-b-2 border-red-500"
                onClick={() => toggleSection('related')}
              >
                <h3 className="text-xl font-bold">関連求人</h3>
                <span className="text-2xl text-gray-400">{activeSection === 'related' ? '−' : '＋'}</span>
              </div>
              {activeSection === 'related' && (
                <div className="mt-6">
                  {/* Related jobs list */}
                  <div className="space-y-4">
                    {[
                      {
                        id: '2154',
                        jobNo: '2154',
                        recruitmentStatus: '募集中',
                        managementStatus: 'RA管理中',
                        statusColor: 'orange',
                        companyName: '株式会社デジタルマーケティング',
                        companyScore: '3421',
                        companyUrl: 'https://www.digital-marketing.co.jp',
                        industry: 'デジタル・Web・マーケティング',
                        jobType: 'デジタル・Web・ディレクター',
                        jobTitle: 'Webディレクター',
                        description: 'クライアントのWebサイト制作・運用改善のディレクション業務。要件定義から納品まで一貫して担当。SEO/SEM施策の立案と実行も含みます。',
                        salaryRange: '400万円〜700万円',
                        updateDate: '2025/08/20',
                        reissueDate: '2025/09/01',
                        personInCharge: '178／佐藤美咲',
                        workLocation: '東京都渋谷区',
                        yearEstablished: '25歳〜40歳',
                        features: ['正社員', 'リモートワーク可', '土日祝休み', 'フレックスタイム制', '服装自由'],
                        aiReason: 'デジタルマーケティング領域での類似職種。クリエイティブ制作の経験が活かせ、キャリアパスも近い職種です。',
                        relevanceScore: 4
                      },
                      {
                        id: '2155',
                        jobNo: '2155',
                        recruitmentStatus: '募集中',
                        managementStatus: 'RA管理中',
                        statusColor: 'orange',
                        companyName: '株式会社クリエイティブエージェンシー',
                        companyScore: '4892',
                        companyUrl: 'https://www.creative-agency.jp',
                        industry: '広告・制作・クリエイティブ',
                        jobType: '広告・クリエイティブ・ディレクター',
                        jobTitle: 'クリエイティブディレクター',
                        description: '大手クライアントの広告キャンペーン企画立案から制作まで統括。TVCMからデジタル広告まで幅広く担当。',
                        salaryRange: '500万円〜800万円',
                        updateDate: '2025/08/18',
                        reissueDate: '2025/08/28',
                        personInCharge: '256／田中一郎',
                        workLocation: '東京都港区',
                        yearEstablished: '28歳〜45歳',
                        features: ['正社員', 'フレックス制', '服装自由', '交通費全額支給', '研修制度充実'],
                        aiReason: '広告制作会社での同様のポジション。チーム管理やクライアント対応の経験が直接活かせます。',
                        relevanceScore: 5
                      },
                      {
                        id: '2156',
                        jobNo: '2156',
                        recruitmentStatus: '募集中',
                        managementStatus: 'RA管理中',
                        statusColor: 'orange',
                        companyName: '株式会社メディアプロダクション',
                        companyScore: '2107',
                        companyUrl: 'https://www.media-production.co.jp',
                        industry: '印刷・SP・制作',
                        jobType: '制作・進行管理',
                        jobTitle: '制作進行管理',
                        description: '印刷物やSPツールの制作進行管理。スケジュール管理、品質管理、クライアント折衝を担当。',
                        salaryRange: '350万円〜550万円',
                        updateDate: '2025/08/22',
                        reissueDate: '2025/09/02',
                        personInCharge: '312／山本花子',
                        workLocation: '東京都千代田区',
                        yearEstablished: '23歳〜35歳',
                        features: ['正社員', '残業少なめ', '駅近', '土日祝休み', '未経験者歓迎'],
                        aiReason: '印刷・SP会社での制作管理職。現在の求人と業界・職種が近く、スムーズな転職が期待できます。',
                        relevanceScore: 4
                      }
                    ].map((relatedJob) => (
                      <div key={relatedJob.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                        <table className="w-full">
                          <tbody>
                            <tr>
                              <td className="p-4 w-32 bg-gray-50 align-top border-r">
                                <div className="text-xs text-gray-500 font-medium mb-2">【募集ステータス】</div>
                                <div className={`inline-block px-2 py-1 rounded text-xs font-bold text-white mb-2 ${
                                  relatedJob.statusColor === 'orange' ? 'bg-orange-500' : 'bg-gray-400'
                                }`}>
                                  {relatedJob.recruitmentStatus}
                                </div>
                                <div className="text-xs text-gray-600 space-y-1">
                                  <div>ID: {relatedJob.jobNo}</div>
                                  <div>
                                    <div className="font-medium">管理:</div>
                                    <div>{relatedJob.managementStatus}</div>
                                  </div>
                                </div>
                              </td>
                              
                              <td className="p-4">
                                <div className="space-y-3">
                                  <div className="border-b pb-2">
                                    <div className="flex items-start justify-between mb-2">
                                      <div className="w-full">
                                        <div className="flex items-baseline gap-4 mb-1">
                                          <span className="text-xs text-gray-500 font-medium">【企業名】</span>
                                          <div className="flex items-center gap-2">
                                            <span className="text-lg font-bold text-gray-900">
                                              {relatedJob.companyName}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                              ({relatedJob.companyScore}/🚩)
                                            </span>
                                          </div>
                                        </div>
                                        <div className="flex items-baseline gap-4 mb-1">
                                          <span className="text-xs text-gray-500 font-medium">【業種】</span>
                                          <span className="text-sm">{relatedJob.industry}</span>
                                        </div>
                                        {relatedJob.companyUrl && (
                                          <a href={relatedJob.companyUrl} target="_blank" rel="noopener noreferrer" 
                                             className="text-xs text-blue-500 hover:underline inline-block">
                                            {relatedJob.companyUrl}
                                          </a>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div>
                                    <div className="flex items-baseline gap-4 mb-1">
                                      <span className="text-xs text-gray-500 font-medium">【職種】</span>
                                      <span className="text-sm">{relatedJob.jobType}</span>
                                    </div>
                                    <Link href={`/detail/${relatedJob.id}`} className="text-base font-semibold mb-2 text-blue-600 hover:text-blue-700 hover:underline inline-block">
                                      {relatedJob.jobTitle}
                                    </Link>
                                    <p className="text-sm text-gray-700 leading-relaxed mb-3">{relatedJob.description}</p>
                                  </div>
                                  
                                  {/* AI Generated Relevance Reason */}
                                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-3 border border-purple-200">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="text-purple-600">✨</span>
                                      <span className="text-xs font-semibold text-purple-700">AI による関連理由</span>
                                      <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                          <span key={i} className={`text-xs ${i < relatedJob.relevanceScore ? 'text-yellow-500' : 'text-gray-300'}`}>
                                            ★
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                    <p className="text-xs text-gray-700">
                                      {relatedJob.aiReason}
                                    </p>
                                  </div>
                                  
                                  {relatedJob.features.length > 0 && (
                                    <div className="pt-2 border-t">
                                      <div className="flex flex-wrap gap-1">
                                        {relatedJob.features.map((feature, idx) => (
                                          <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                                            {feature}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </td>
                              
                              <td className="p-4 bg-gray-50 w-48 align-top text-xs border-l">
                                <div className="space-y-2">
                                  <div>
                                    <span className="text-gray-500">掲載開始：</span>
                                    <span className="font-medium">{relatedJob.updateDate}</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500">再起票日：</span>
                                    <span className="font-medium">{relatedJob.reissueDate}</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500">担当者：</span>
                                    <span className="font-medium">{relatedJob.personInCharge}</span>
                                  </div>
                                  <div className="pt-2 border-t mt-2">
                                    <div className="text-gray-500">勤務地</div>
                                    <div className="font-medium">{relatedJob.workLocation}</div>
                                  </div>
                                  <div>
                                    <div className="text-gray-500">年齢</div>
                                    <div className="font-medium">{relatedJob.yearEstablished}</div>
                                  </div>
                                  <div className="pt-2 border-t mt-2">
                                    <div className="text-gray-500">給与</div>
                                    <div className="font-medium text-green-600">{relatedJob.salaryRange}</div>
                                  </div>
                                  
                                  <div className="mt-6">
                                    <Link 
                                      href={`/detail/${relatedJob.id}`}
                                      className="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition font-medium"
                                    >
                                      詳細を見る
                                    </Link>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>

                  {/* AI disclaimer */}
                  <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
                    <p className="text-xs text-gray-600">
                      ※ 関連求人は AI が自動的に選定しています。実際の関連性は個人のスキルや経験により異なる場合があります。
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="p-6 bg-gray-50 border-t">
            <div className="flex justify-center gap-4 flex-wrap text-sm">
              <button className="text-gray-600 hover:text-gray-800">募集要項</button>
              <span className="text-gray-400">|</span>
              <button className="text-gray-600 hover:text-gray-800">勤務地</button>
              <span className="text-gray-400">|</span>
              <button className="text-gray-600 hover:text-gray-800">勤務条件・待遇</button>
              <span className="text-gray-400">|</span>
              <button className="text-gray-600 hover:text-gray-800">制度・福利厚生</button>
              <span className="text-gray-400">|</span>
              <button className="text-gray-600 hover:text-gray-800">選考フロー</button>
              <span className="text-gray-400">|</span>
              <button className="text-gray-600 hover:text-gray-800">会社概要</button>
              <span className="text-gray-400">|</span>
              <button className="text-gray-600 hover:text-gray-800">おすすめポイント</button>
              <span className="text-gray-400">|</span>
              <button className="text-gray-600 hover:text-gray-800">関連求人</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}