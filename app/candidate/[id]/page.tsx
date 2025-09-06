'use client'

import Link from 'next/link'
import { use, useState } from 'react'
import JobCard from '../../components/JobCard'

// Mock candidate data
const candidateData = {
  'C10001': {
    // 基本情報
    CAREER_ID: 'C10001',
    name: '田中太郎',
    nameKana: 'タナカタロウ',
    email: 'tanaka.taro@example.com',
    phone: '090-1234-5678',
    age: 32,
    SEX_FLG: '男性',
    birthDate: '1992/04/15',
    address: '東京都渋谷区恵比寿1-2-3',
    
    // ステータス
    REGSTATUS_ID: 'アクティブ',
    WKSTATUS_ID: '在職中',
    LAST_LOGIN_DATE: '2025-01-18 14:32',
    
    // 担当
    CHARGE_ID: 'CA-245',
    chargeName: '山田花子',
    
    // 現在の状況
    currentCompany: '株式会社デジタルマーケティング',
    currentPosition: 'マーケティングマネージャー',
    CURRENT_ANNUALINCOME_NUM: 6500000,
    yearsExperience: 8,
    
    // 学歴
    education: '早稲田大学 商学部卒業',
    graduationYear: '2014年3月',
    
    // カウンセリング情報
    counselingInfo: {
      companiesCount: '3社',
      activityStatus: '積極的に転職活動中',
      desiredConditions: 'リモートワーク可能、フレックスタイム',
      careerHistory: '2014年〜2017年: 株式会社ABC (営業)\n2017年〜2020年: 株式会社XYZ (マーケティング)\n2020年〜現在: 株式会社デジタルマーケティング (マーケティングマネージャー)',
      impressionComment: '非常に意欲的で、スキルアップに積極的。プレゼンテーション能力が高く、リーダーシップもある。',
      desiredSalary: '700万円〜900万円',
      finalDesiredSalary: '850万円',
      jobChangePreference: '3ヶ月以内',
      availableToStart: '内定後1ヶ月',
      jobChangeTarget: 'キャリアアップ、より大きな裁量',
      desiredLocation1: '東京都',
      desiredLocation2: 'リモート',
      desiredIndustry1: 'IT・Web',
      desiredIndustry2: 'SaaS',
      desiredJobType1: 'マーケティングディレクター',
      desiredJobType2: '事業開発',
      desiredWorkStyle: 'フルリモート可能',
      detailedConditions: '・週3日以上のリモートワーク\n・フレックスタイム制\n・副業可能\n・ストックオプション制度あり',
      interestedJobs: 'JB-2024-1001, JB-2024-1002',
      requestsToMassMedian: 'SaaS企業の求人を中心に紹介してほしい'
    },
    
    // 語学・資格
    TOEIC: 850,
    TOEIC_DATE: '2024/03',
    certifications: ['Google Ads認定', 'Google Analytics認定', 'HubSpot認定'],
    
    // 進捗ステータス（各フェーズでの案件数）
    processStatus: {
      active: 5,
      proposed: 3,
      applied: 2,
      documents: 4,
      firstInterview: 1,
      secondInterview: 2,
      offer: 0
    },
    
    // 検討中リスト
    consideringJobs: [
      {
        jobId: 'JB-2024-1001',
        companyName: '株式会社テックイノベーション',
        positionName: 'マーケティングディレクター',
        status: '書類選考中',
        addedDate: '2025-01-15',
        salary: '700-900万円'
      },
      {
        jobId: 'JB-2024-1002',
        companyName: 'グローバルSaaS株式会社',
        positionName: 'VP of Marketing',
        status: '1次面接調整中',
        addedDate: '2025-01-12',
        salary: '800-1200万円'
      }
    ],
    
    // 提案中リスト
    proposedJobs: [
      {
        jobId: 'JB-2024-2001',
        companyName: 'AIスタートアップ株式会社',
        positionName: 'Head of Growth',
        proposedDate: '2025-01-08',
        status: '企業検討中'
      }
    ],
    
    // 進捗履歴
    progressHistory: [
      { date: '2025-01-18', action: '書類提出', company: '株式会社テックイノベーション', result: '通過' },
      { date: '2025-01-15', action: '応募承諾', company: 'グローバルSaaS株式会社', result: '進行中' },
      { date: '2025-01-12', action: '求人提案', company: 'AIスタートアップ株式会社', result: '検討中' }
    ],
    
    // マッチング求人
    matchingJobs: [
      {
        id: '5001',
        jobNo: '5001',
        recruitmentStatus: '募集中',
        managementStatus: 'RA管理中',
        statusColor: 'orange',
        companyName: 'スタートアップX株式会社',
        companyScore: '4521',
        companyUrl: 'https://www.startupx.co.jp',
        industry: 'IT・SaaS・マーケティング',
        jobType: 'マーケティング・事業開発',
        jobTitle: 'Head of Marketing',
        description: 'BtoB SaaSプロダクトのマーケティング戦略立案と実行。リード獲得からカスタマーサクセスまで幅広く統括。',
        salaryRange: '800万円〜1000万円',
        updateDate: '2025/01/15',
        reissueDate: '2025/01/19',
        personInCharge: '345／高橋健太',
        workLocation: '東京都渋谷区',
        yearEstablished: '30歳〜40歳',
        features: ['正社員', 'フレックスタイム', 'リモートワーク可', 'ストックオプション'],
        aiRecommendation: {
          reason: 'BtoB SaaS企業でのマーケティング経験が完全に合致。MAツール導入実績も評価ポイント。',
          matchScore: 94
        }
      },
      {
        id: '5002',
        jobNo: '5002',
        recruitmentStatus: '募集中',
        managementStatus: 'RA管理中',
        statusColor: 'orange',
        companyName: 'グローバルテック株式会社',
        companyScore: '5892',
        companyUrl: 'https://www.globaltech.jp',
        industry: 'IT・テクノロジー',
        jobType: 'プロダクトマーケティング',
        jobTitle: 'Product Marketing Manager',
        description: 'プロダクトのポジショニング戦略、GTM戦略の立案・実行。グローバル展開も視野。',
        salaryRange: '700万円〜900万円',
        updateDate: '2025/01/12',
        reissueDate: '2025/01/18',
        personInCharge: '412／鈴木美咲',
        workLocation: '東京都港区',
        yearEstablished: '28歳〜38歳',
        features: ['正社員', '土日祝休み', '英語活用', '研修充実'],
        aiRecommendation: {
          reason: 'デジタルマーケティング経験とプロダクトマーケティングの親和性が高い。Google広告運用実績が強み。',
          matchScore: 89
        }
      },
      {
        id: '5003',
        jobNo: '5003',
        recruitmentStatus: '募集中',
        managementStatus: 'RA管理中',
        statusColor: 'orange',
        companyName: 'イノベーション株式会社',
        companyScore: '6234',
        companyUrl: 'https://www.innovation.co.jp',
        industry: 'コンサルティング・戦略',
        jobType: 'マーケティング統括',
        jobTitle: 'マーケティング統括責任者',
        description: '全社マーケティング戦略の立案と実行。次期CMO候補として事業成長をリード。',
        salaryRange: '900万円〜1200万円',
        updateDate: '2025/01/10',
        reissueDate: '2025/01/17',
        personInCharge: '289／佐藤太郎',
        workLocation: '東京都千代田区',
        yearEstablished: '32歳〜45歳',
        features: ['正社員', '役員候補', '裁量大', '年収1000万以上可'],
        aiRecommendation: {
          reason: '次期CMO候補としてのポテンシャルあり。事業戦略への関与経験がさらにあれば完璧なマッチング。',
          matchScore: 86
        }
      },
      {
        id: '5004',
        jobNo: '5004',
        recruitmentStatus: '募集中',
        managementStatus: 'RA管理中',
        statusColor: 'orange',
        companyName: 'デジタルエージェンシー株式会社',
        companyScore: '4789',
        companyUrl: 'https://www.digital-agency.jp',
        industry: 'マーケティング・広告',
        jobType: 'アカウントディレクター',
        jobTitle: 'Account Director',
        description: '大手クライアントのデジタルマーケティング戦略立案から実行まで統括。',
        salaryRange: '750万円〜950万円',
        updateDate: '2025/01/08',
        reissueDate: '2025/01/15',
        personInCharge: '456／中村優子',
        workLocation: '東京都港区',
        yearEstablished: '30歳〜40歳',
        features: ['正社員', 'フレックス', '大手クライアント', '実績評価'],
        aiRecommendation: {
          reason: 'クライアント対応経験と戦略立案能力が評価ポイント。BtoB経験が活きる。',
          matchScore: 82
        }
      }
    ]
  },
  'C10002': {
    CAREER_ID: 'C10002',
    name: '佐藤花子',
    nameKana: 'サトウハナコ',
    email: 'sato.hanako@example.com',
    phone: '080-9876-5432',
    age: 28,
    SEX_FLG: '女性',
    birthDate: '1996/08/20',
    address: '神奈川県横浜市西区みなとみらい2-3-4',
    REGSTATUS_ID: 'アクティブ',
    WKSTATUS_ID: '離職中',
    LAST_LOGIN_DATE: '2025-01-19 09:15',
    CHARGE_ID: 'CA-312',
    chargeName: '田中太郎',
    currentCompany: '前職：株式会社クリエイティブスタジオ',
    currentPosition: 'UIデザイナー',
    CURRENT_ANNUALINCOME_NUM: 4500000,
    yearsExperience: 5,
    education: '多摩美術大学 デザイン学部卒業',
    graduationYear: '2018年3月',
    counselingInfo: {
      companiesCount: '2社',
      activityStatus: '即日勤務可能',
      desiredConditions: 'クリエイティブな環境、最新ツール使用',
      careerHistory: '2018年〜2021年: 株式会社デザインファーム\n2021年〜2024年: 株式会社クリエイティブスタジオ',
      impressionComment: 'デザインセンス抜群。ポートフォリオのクオリティが非常に高い。',
      desiredSalary: '500万円〜600万円',
      finalDesiredSalary: '550万円',
      jobChangePreference: '即日',
      availableToStart: '即日',
      jobChangeTarget: 'よりクリエイティブな環境',
      desiredLocation1: '東京都',
      desiredLocation2: '神奈川県',
      desiredIndustry1: 'ゲーム',
      desiredIndustry2: 'エンタメ',
      desiredJobType1: 'UIデザイナー',
      desiredJobType2: 'UXデザイナー',
      desiredWorkStyle: 'オフィス勤務希望',
      detailedConditions: '・最新のデザインツール使用\n・クリエイティブな社風\n・チームワーク重視',
      interestedJobs: '',
      requestsToMassMedian: ''
    },
    TOEIC: null,
    certifications: ['ウェブデザイン技能検定2級', '色彩検定2級'],
    processStatus: {
      active: 3,
      proposed: 1,
      applied: 1,
      documents: 1,
      firstInterview: 1,
      secondInterview: 0,
      offer: 0
    },
    consideringJobs: [
      {
        jobId: 'JB-2024-3001',
        companyName: '株式会社ゲームスタジオ',
        positionName: 'UIデザイナー',
        status: '最終面接実施',
        addedDate: '2025-01-16',
        salary: '450-600万円'
      }
    ],
    proposedJobs: [],
    progressHistory: [
      { date: '2025-01-17', action: '最終面接', company: '株式会社ゲームスタジオ', result: '結果待ち' }
    ],
    matchingJobs: [
      {
        id: '6001',
        jobNo: '6001',
        recruitmentStatus: '募集中',
        managementStatus: 'RA管理中',
        statusColor: 'orange',
        companyName: '株式会社デザインラボ',
        companyScore: '3892',
        companyUrl: 'https://www.designlab.co.jp',
        industry: 'デザイン・クリエイティブ',
        jobType: 'UIデザイナー',
        jobTitle: 'シニアUIデザイナー',
        description: 'ゲームUIのデザイン設計から実装まで。ユーザビリティを重視したデザイン制作。',
        salaryRange: '500万円〜700万円',
        updateDate: '2025/01/18',
        reissueDate: '2025/01/19',
        personInCharge: '223／木村花',
        workLocation: '東京都渋谷区',
        yearEstablished: '25歳〜35歳',
        features: ['正社員', 'クリエイティブ', '服装自由', '最新ツール'],
        aiRecommendation: {
          reason: 'ゲーム業界でのUI経験と募集要件が完全一致。Figma習熟度も高評価。',
          matchScore: 96
        }
      },
      {
        id: '6002',
        jobNo: '6002',
        recruitmentStatus: '募集中',
        managementStatus: 'RA管理中',
        statusColor: 'orange',
        companyName: 'エンタメテック株式会社',
        companyScore: '4567',
        companyUrl: 'https://www.entertech.co.jp',
        industry: 'エンタメ・ゲーム',
        jobType: 'UX/UIデザイナー',
        jobTitle: 'Lead UX Designer',
        description: 'モバイルゲームのUX設計から実装まで。ユーザー体験の最適化をリード。',
        salaryRange: '550万円〜750万円',
        updateDate: '2025/01/16',
        reissueDate: '2025/01/18',
        personInCharge: '345／山本太郎',
        workLocation: '東京都渋谷区',
        yearEstablished: '26歳〜36歳',
        features: ['正社員', 'ゲーム業界', '服装自由', 'クリエイティブ環境'],
        aiRecommendation: {
          reason: 'モバイルゲームUI経験が強み。ユーザビリティへの理解が深い。',
          matchScore: 92
        }
      },
      {
        id: '6003',
        jobNo: '6003',
        recruitmentStatus: '募集中',
        managementStatus: 'RA管理中',
        statusColor: 'orange',
        companyName: 'デジタルクリエイティブ株式会社',
        companyScore: '3890',
        companyUrl: 'https://www.digital-creative.jp',
        industry: 'Web・デジタル',
        jobType: 'Webデザイナー',
        jobTitle: 'Senior Web Designer',
        description: 'コーポレートサイト、ECサイトのデザイン制作。ブランディングも含む。',
        salaryRange: '480万円〜650万円',
        updateDate: '2025/01/14',
        reissueDate: '2025/01/17',
        personInCharge: '234／田中美咲',
        workLocation: '東京都港区',
        yearEstablished: '25歳〜35歳',
        features: ['正社員', 'Web制作', 'リモート可', 'フレックス'],
        aiRecommendation: {
          reason: 'Web制作経験とデザインセンスが高く評価。ECサイト経験もプラス。',
          matchScore: 88
        }
      }
    ]
  },
  'C10003': {
    CAREER_ID: 'C10003',
    name: '山田次郎',
    nameKana: 'ヤマダジロウ',
    email: 'yamada.jiro@example.com',
    phone: '070-1111-2222',
    age: 35,
    SEX_FLG: '男性',
    birthDate: '1989/12/01',
    address: '東京都港区六本木3-4-5',
    REGSTATUS_ID: 'アクティブ',
    WKSTATUS_ID: '在職中',
    LAST_LOGIN_DATE: '2025-01-16 22:45',
    CHARGE_ID: 'CA-198',
    chargeName: '高橋美咲',
    currentCompany: '外資系IT企業',
    currentPosition: 'シニアソフトウェアエンジニア',
    CURRENT_ANNUALINCOME_NUM: 9000000,
    yearsExperience: 12,
    education: '東京工業大学 情報工学科卒業',
    graduationYear: '2011年3月',
    counselingInfo: {
      companiesCount: '4社',
      activityStatus: '慎重に検討中',
      desiredConditions: 'CTO候補、ストックオプション必須',
      careerHistory: '2011年〜2014年: 大手SIer\n2014年〜2017年: スタートアップA社\n2017年〜2020年: スタートアップB社\n2020年〜現在: 外資系IT企業',
      impressionComment: '技術力トップクラス。リーダーシップも高く、CTO候補として最適。',
      desiredSalary: '1200万円〜1500万円',
      finalDesiredSalary: '1400万円',
      jobChangePreference: '6ヶ月後',
      availableToStart: '内定後3ヶ月',
      jobChangeTarget: 'CTO、技術責任者',
      desiredLocation1: '東京都',
      desiredLocation2: 'フルリモート',
      desiredIndustry1: 'スタートアップ',
      desiredIndustry2: 'AI・機械学習',
      desiredJobType1: 'CTO',
      desiredJobType2: 'VPエンジニアリング',
      desiredWorkStyle: 'フルリモート',
      detailedConditions: '・ストックオプション必須\n・技術選定の裁量\n・優秀なチームメンバー\n・グローバル展開',
      interestedJobs: 'JB-2024-4001',
      requestsToMassMedian: 'シリーズB以降のスタートアップを中心に'
    },
    TOEIC: 920,
    TOEIC_DATE: '2024/06',
    certifications: ['AWS認定ソリューションアーキテクト', 'Google Cloud認定', 'CKA'],
    processStatus: {
      active: 2,
      proposed: 1,
      applied: 0,
      documents: 0,
      firstInterview: 1,
      secondInterview: 0,
      offer: 1
    },
    consideringJobs: [
      {
        jobId: 'JB-2024-4001',
        companyName: 'AIユニコーン株式会社',
        positionName: 'VPエンジニアリング',
        status: 'カジュアル面談実施',
        addedDate: '2025-01-14',
        salary: '1200-1800万円'
      }
    ],
    proposedJobs: [
      {
        jobId: 'JB-2024-4002',
        companyName: 'ブロックチェーンスタートアップ',
        positionName: 'CTO',
        proposedDate: '2025-01-10',
        status: 'オファー提示'
      }
    ],
    progressHistory: [
      { date: '2025-01-15', action: 'オファー提示', company: 'ブロックチェーンスタートアップ', result: '検討中' }
    ],
    matchingJobs: [
      {
        id: '7001',
        jobNo: '7001',
        recruitmentStatus: '募集中',
        managementStatus: 'RA管理中',
        statusColor: 'orange',
        companyName: 'ユニコーンスタートアップ株式会社',
        companyScore: '7890',
        companyUrl: 'https://www.unicorn-startup.co.jp',
        industry: 'スタートアップ・テクノロジー',
        jobType: '経営・CTO',
        jobTitle: 'CTO (Chief Technology Officer)',
        description: '技術戦略の立案と実行、開発チームの統括、プロダクト開発の技術的リード。',
        salaryRange: '1500万円〜2000万円',
        updateDate: '2025/01/19',
        reissueDate: '2025/01/20',
        personInCharge: '567／田中太郎',
        workLocation: '東京都港区',
        yearEstablished: '35歳〜45歳',
        features: ['正社員', 'CTO', 'ストックオプション', '裁量大', 'フルリモート可'],
        aiRecommendation: {
          reason: 'スタートアップCTO要件と完全一致。技術選定の経験、チームビルディング力、英語力すべてが高評価。',
          matchScore: 98
        }
      },
      {
        id: '7002',
        jobNo: '7002',
        recruitmentStatus: '募集中',
        managementStatus: 'RA管理中',
        statusColor: 'orange',
        companyName: 'AI研究開発株式会社',
        companyScore: '8234',
        companyUrl: 'https://www.ai-rd.co.jp',
        industry: 'AI・機械学習',
        jobType: 'エンジニア',
        jobTitle: 'Principal Engineer',
        description: 'AI/MLプロダクトの技術リード。アーキテクチャ設計からチームメンタリングまで。',
        salaryRange: '1200万円〜1600万円',
        updateDate: '2025/01/18',
        reissueDate: '2025/01/19',
        personInCharge: '432／山田花子',
        workLocation: '東京都品川区',
        yearEstablished: '30歳〜42歳',
        features: ['正社員', '英語活用', 'AI/ML', '研究開発', 'グローバル'],
        aiRecommendation: {
          reason: 'AWS/GCP経験が完璧にマッチ。機械学習プロジェクトのリード経験も評価。',
          matchScore: 92
        }
      },
      {
        id: '7003',
        jobNo: '7003',
        recruitmentStatus: '募集中',
        managementStatus: 'RA管理中',
        statusColor: 'orange',
        companyName: 'フィンテックイノベーション株式会社',
        companyScore: '6789',
        companyUrl: 'https://www.fintech-innovation.jp',
        industry: 'フィンテック',
        jobType: 'テックリード',
        jobTitle: 'Tech Lead Engineer',
        description: '決済システムの設計・開発をリード。高可用性システムの構築経験必須。',
        salaryRange: '1100万円〜1400万円',
        updateDate: '2025/01/17',
        reissueDate: '2025/01/19',
        personInCharge: '678／伊藤健一',
        workLocation: '東京都千代田区',
        yearEstablished: '32歳〜42歳',
        features: ['正社員', 'フィンテック', '高年収', 'ストックオプション'],
        aiRecommendation: {
          reason: '高可用性システムの構築経験が評価。金融系の技術要件にも対応可能。',
          matchScore: 88
        }
      },
      {
        id: '7004',
        jobNo: '7004',
        recruitmentStatus: '募集中',
        managementStatus: 'RA管理中',
        statusColor: 'orange',
        companyName: 'グローバルプラットフォーム株式会社',
        companyScore: '9012',
        companyUrl: 'https://www.global-platform.com',
        industry: 'プラットフォーム',
        jobType: 'アーキテクト',
        jobTitle: 'Solutions Architect',
        description: 'マイクロサービスアーキテクチャの設計と実装。グローバル展開を支える基盤構築。',
        salaryRange: '1000万円〜1300万円',
        updateDate: '2025/01/15',
        reissueDate: '2025/01/18',
        personInCharge: '890／加藤明美',
        workLocation: '東京都港区',
        yearEstablished: '30歳〜40歳',
        features: ['正社員', 'グローバル', 'リモート可', '英語必須'],
        aiRecommendation: {
          reason: 'マイクロサービス経験とグローバル対応力が強み。英語力も十分。',
          matchScore: 85
        }
      },
      {
        id: '7005',
        jobNo: '7005',
        recruitmentStatus: '募集中',
        managementStatus: 'RA管理中',
        statusColor: 'orange',
        companyName: 'ネクストジェネレーション株式会社',
        companyScore: '5678',
        companyUrl: 'https://www.next-gen.co.jp',
        industry: 'スタートアップ',
        jobType: 'VPエンジニアリング',
        jobTitle: 'VP of Engineering',
        description: 'エンジニアリング組織の構築と成長をリード。30名規模のチームマネジメント。',
        salaryRange: '1300万円〜1800万円',
        updateDate: '2025/01/13',
        reissueDate: '2025/01/16',
        personInCharge: '123／斉藤優',
        workLocation: '東京都渋谷区',
        yearEstablished: '33歳〜43歳',
        features: ['正社員', 'VP', 'チームビルディング', 'ストックオプション'],
        aiRecommendation: {
          reason: 'チームマネジメント経験と技術力の両立。組織拡大フェーズに最適。',
          matchScore: 90
        }
      }
    ]
  }
}

export default function CandidateDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const candidate = candidateData[resolvedParams.id as keyof typeof candidateData]
  const [activeTab, setActiveTab] = useState('basic')

  if (!candidate) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">求職者が見つかりません</h1>
          <p className="text-gray-600 mb-6">ID: {resolvedParams.id} の求職者情報は存在しません。</p>
          <Link href="/candidate-search" className="text-purple-600 hover:text-purple-700 font-medium">
            検索画面に戻る
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Back button */}
        <div className="mb-4">
          <Link href="/candidate-search" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            検索画面に戻る
          </Link>
        </div>

        {/* Header with ID and status */}
        <div className="bg-white rounded-lg shadow mb-4 p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">候補者 {candidate.CAREER_ID}</h1>
              <span className={`px-2 py-1 rounded text-xs ${
                candidate.REGSTATUS_ID === 'アクティブ' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
              }`}>
                {candidate.REGSTATUS_ID}
              </span>
              <span className="text-sm text-gray-600">{candidate.WKSTATUS_ID}</span>
            </div>
            <div className="text-sm text-gray-600">
              <div>担当: {candidate.chargeName}</div>
              <div className="text-xs text-gray-500">最終ログイン: {candidate.LAST_LOGIN_DATE}</div>
            </div>
          </div>
        </div>

        {/* Process Status Tabs */}
        <div className="bg-white rounded-lg shadow mb-4">
          <div className="border-b">
            <div className="flex">
              <div className="flex-1 text-center py-3 border-r">
                <div className="text-xs text-gray-500 mb-1">アクティブ進捗</div>
                <div className="text-xl font-bold text-blue-600">{candidate.processStatus.active}</div>
              </div>
              <div className="flex-1 text-center py-3 border-r">
                <div className="text-xs text-gray-500 mb-1">応募打診</div>
                <div className="text-xl font-bold text-gray-600">{candidate.processStatus.proposed}</div>
              </div>
              <div className="flex-1 text-center py-3 border-r">
                <div className="text-xs text-gray-500 mb-1">応募OK</div>
                <div className="text-xl font-bold text-gray-600">{candidate.processStatus.applied}</div>
              </div>
              <div className="flex-1 text-center py-3 border-r">
                <div className="text-xs text-gray-500 mb-1">書類提出</div>
                <div className="text-xl font-bold text-gray-600">{candidate.processStatus.documents}</div>
              </div>
              <div className="flex-1 text-center py-3 border-r">
                <div className="text-xs text-gray-500 mb-1">1次面接</div>
                <div className="text-xl font-bold text-gray-600">{candidate.processStatus.firstInterview}</div>
              </div>
              <div className="flex-1 text-center py-3 border-r">
                <div className="text-xs text-gray-500 mb-1">2次以降</div>
                <div className="text-xl font-bold text-gray-600">{candidate.processStatus.secondInterview}</div>
              </div>
              <div className="flex-1 text-center py-3">
                <div className="text-xs text-gray-500 mb-1">内定</div>
                <div className="text-xl font-bold text-red-600">{candidate.processStatus.offer}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tab Navigation */}
        <div className="bg-white rounded-t-lg shadow">
          <div className="flex border-b overflow-x-auto">
            <button
              onClick={() => setActiveTab('basic')}
              className={`px-6 py-3 font-medium border-b-2 transition whitespace-nowrap ${
                activeTab === 'basic' ? 'border-purple-600 text-purple-600' : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              基本情報
            </button>
            <button
              onClick={() => setActiveTab('counseling')}
              className={`px-6 py-3 font-medium border-b-2 transition whitespace-nowrap ${
                activeTab === 'counseling' ? 'border-purple-600 text-purple-600' : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              カウンセリング情報
            </button>
            <button
              onClick={() => setActiveTab('considering')}
              className={`px-6 py-3 font-medium border-b-2 transition whitespace-nowrap ${
                activeTab === 'considering' ? 'border-purple-600 text-purple-600' : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              検討中リスト
            </button>
            <button
              onClick={() => setActiveTab('proposed')}
              className={`px-6 py-3 font-medium border-b-2 transition whitespace-nowrap ${
                activeTab === 'proposed' ? 'border-purple-600 text-purple-600' : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              提案中リスト
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-6 py-3 font-medium border-b-2 transition whitespace-nowrap ${
                activeTab === 'history' ? 'border-purple-600 text-purple-600' : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              進捗履歴
            </button>
            <button
              onClick={() => setActiveTab('matching')}
              className={`px-6 py-3 font-medium border-b-2 transition whitespace-nowrap ${
                activeTab === 'matching' ? 'border-purple-600 text-purple-600' : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              マッチング求人
              <span className="ml-1 text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">AI</span>
              {candidate.matchingJobs.length > 0 && (
                <span className="ml-1 bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs">
                  {candidate.matchingJobs.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-b-lg shadow p-6">
          {activeTab === 'basic' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-600 mb-3 border-b pb-2">候補者ID</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex">
                      <span className="text-gray-500 w-24">ID:</span>
                      <span className="font-bold text-lg">{candidate.CAREER_ID}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-sm font-bold text-gray-600 mb-3 border-b pb-2 mt-8">現在の状況</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex">
                      <span className="text-gray-500 w-24">年齢層:</span>
                      <span>{candidate.age}歳代</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-24">性別:</span>
                      <span>{candidate.SEX_FLG}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-24">ステータス:</span>
                      <span>{candidate.WKSTATUS_ID}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-24">経験年数:</span>
                      <span>{candidate.yearsExperience}年</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-600 mb-3 border-b pb-2">職歴・学歴</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex">
                      <span className="text-gray-500 w-24">現職:</span>
                      <span>{candidate.currentCompany}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-24">役職:</span>
                      <span>{candidate.currentPosition}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-24">経験年数:</span>
                      <span>{candidate.yearsExperience}年</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-24">現年収:</span>
                      <span>{(candidate.CURRENT_ANNUALINCOME_NUM / 10000).toFixed(0)}万円</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-24">学歴:</span>
                      <span>{candidate.education}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-24">卒業年:</span>
                      <span>{candidate.graduationYear}</span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-gray-600 mb-3 border-b pb-2 mt-6">資格・語学</h3>
                  <div className="space-y-2 text-sm">
                    {candidate.TOEIC && (
                      <div className="flex">
                        <span className="text-gray-500 w-24">TOEIC:</span>
                        <span>{candidate.TOEIC}点 {'TOEIC_DATE' in candidate && candidate.TOEIC_DATE ? `(${candidate.TOEIC_DATE})` : ''}</span>
                      </div>
                    )}
                    <div className="flex">
                      <span className="text-gray-500 w-24">資格:</span>
                      <span>{candidate.certifications.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'counseling' && (
            <div className="space-y-4">
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 w-48">経験社数</td>
                    <td className="px-4 py-2 text-sm">{candidate.counselingInfo.companiesCount}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">本人活動状況</td>
                    <td className="px-4 py-2 text-sm">{candidate.counselingInfo.activityStatus}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">希望条件</td>
                    <td className="px-4 py-2 text-sm">{candidate.counselingInfo.desiredConditions}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 align-top">経歴</td>
                    <td className="px-4 py-2 text-sm whitespace-pre-line">{candidate.counselingInfo.careerHistory}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 align-top">印象・コメント</td>
                    <td className="px-4 py-2 text-sm">
                      <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                        {candidate.counselingInfo.impressionComment}
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">希望年収</td>
                    <td className="px-4 py-2 text-sm">{candidate.counselingInfo.desiredSalary}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">最終希望年収</td>
                    <td className="px-4 py-2 text-sm font-bold text-green-600">{candidate.counselingInfo.finalDesiredSalary}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">転職希望時期</td>
                    <td className="px-4 py-2 text-sm">{candidate.counselingInfo.jobChangePreference}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">入社可能時期</td>
                    <td className="px-4 py-2 text-sm">{candidate.counselingInfo.availableToStart}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">転職対象</td>
                    <td className="px-4 py-2 text-sm">{candidate.counselingInfo.jobChangeTarget}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">希望勤務地1</td>
                    <td className="px-4 py-2 text-sm">{candidate.counselingInfo.desiredLocation1}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">希望勤務地2</td>
                    <td className="px-4 py-2 text-sm">{candidate.counselingInfo.desiredLocation2}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">希望業種1</td>
                    <td className="px-4 py-2 text-sm">{candidate.counselingInfo.desiredIndustry1}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">希望業種2</td>
                    <td className="px-4 py-2 text-sm">{candidate.counselingInfo.desiredIndustry2}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">希望職種1</td>
                    <td className="px-4 py-2 text-sm">{candidate.counselingInfo.desiredJobType1}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">希望職種2</td>
                    <td className="px-4 py-2 text-sm">{candidate.counselingInfo.desiredJobType2}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">希望勤務形態</td>
                    <td className="px-4 py-2 text-sm">{candidate.counselingInfo.desiredWorkStyle}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 align-top">ご希望条件の詳細</td>
                    <td className="px-4 py-2 text-sm whitespace-pre-line">{candidate.counselingInfo.detailedConditions}</td>
                  </tr>
                  {candidate.counselingInfo.interestedJobs && (
                    <tr className="border-b">
                      <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                        気になる求人がありましたら、<br/>求人IDをご入力ください
                      </td>
                      <td className="px-4 py-2 text-sm">{candidate.counselingInfo.interestedJobs}</td>
                    </tr>
                  )}
                  {candidate.counselingInfo.requestsToMassMedian && (
                    <tr className="border-b">
                      <td className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                        マスメディアンへのご要望が<br/>ありましたら、ご入力ください
                      </td>
                      <td className="px-4 py-2 text-sm">{candidate.counselingInfo.requestsToMassMedian}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'considering' && (
            <div>
              <h3 className="font-bold text-gray-700 mb-4">現在検討中の求人</h3>
              {candidate.consideringJobs && candidate.consideringJobs.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full border">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border px-4 py-2 text-left text-sm">求人ID</th>
                        <th className="border px-4 py-2 text-left text-sm">企業名</th>
                        <th className="border px-4 py-2 text-left text-sm">ポジション名</th>
                        <th className="border px-4 py-2 text-left text-sm">年収</th>
                        <th className="border px-4 py-2 text-left text-sm">ステータス</th>
                        <th className="border px-4 py-2 text-left text-sm">追加日</th>
                      </tr>
                    </thead>
                    <tbody>
                      {candidate.consideringJobs.map((job: any) => (
                        <tr key={job.jobId} className="hover:bg-gray-50">
                          <td className="border px-4 py-2 text-sm">{job.jobId}</td>
                          <td className="border px-4 py-2 text-sm font-medium">{job.companyName}</td>
                          <td className="border px-4 py-2 text-sm">{job.positionName}</td>
                          <td className="border px-4 py-2 text-sm">{job.salary}</td>
                          <td className="border px-4 py-2 text-sm">
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                              {job.status}
                            </span>
                          </td>
                          <td className="border px-4 py-2 text-sm">{job.addedDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500">検討中の求人はありません</p>
              )}
            </div>
          )}

          {activeTab === 'proposed' && (
            <div>
              <h3 className="font-bold text-gray-700 mb-4">企業に提案中の求人</h3>
              {candidate.proposedJobs && candidate.proposedJobs.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full border">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border px-4 py-2 text-left text-sm">求人ID</th>
                        <th className="border px-4 py-2 text-left text-sm">企業名</th>
                        <th className="border px-4 py-2 text-left text-sm">ポジション名</th>
                        <th className="border px-4 py-2 text-left text-sm">提案日</th>
                        <th className="border px-4 py-2 text-left text-sm">ステータス</th>
                      </tr>
                    </thead>
                    <tbody>
                      {candidate.proposedJobs.map((job: any) => (
                        <tr key={job.jobId} className="hover:bg-gray-50">
                          <td className="border px-4 py-2 text-sm">{job.jobId}</td>
                          <td className="border px-4 py-2 text-sm font-medium">{job.companyName}</td>
                          <td className="border px-4 py-2 text-sm">{job.positionName}</td>
                          <td className="border px-4 py-2 text-sm">{job.proposedDate}</td>
                          <td className="border px-4 py-2 text-sm">
                            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                              {job.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500">提案中の求人はありません</p>
              )}
            </div>
          )}

          {activeTab === 'history' && (
            <div>
              <h3 className="font-bold text-gray-700 mb-4">進捗履歴</h3>
              {candidate.progressHistory && candidate.progressHistory.length > 0 ? (
                <div className="space-y-2">
                  {candidate.progressHistory.map((history: any, idx: any) => (
                    <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded">
                      <span className="text-sm text-gray-500">{history.date}</span>
                      <span className="font-medium text-sm">{history.action}</span>
                      <span className="text-sm">{history.company}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        history.result === '通過' ? 'bg-green-100 text-green-700' :
                        history.result === '進行中' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {history.result}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">進捗履歴はありません</p>
              )}
            </div>
          )}

          {activeTab === 'matching' && (
            <div>
              {candidate.matchingJobs && candidate.matchingJobs.length > 0 ? (
                <div className="space-y-4">
                  {candidate.matchingJobs.map((job: any) => (
                    <JobCard 
                      key={job.id} 
                      job={job} 
                      showRecommendReason={true}
                      showDetailButton={true}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>現在、マッチング求人はありません</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}