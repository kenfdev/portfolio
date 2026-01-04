export const translations = {
  en: {
    nav: {
      about: 'README.md',
      projects: 'src/projects/',
      skills: 'skills.json',
      contact: 'contact.sh',
    },
    meta: {
      title: 'Ken Fukuyama - Portfolio',
      description: 'Web developer with 10+ years\' experience in enterprise applications',
    },
    pages: {
      about: {
        title: 'About',
        prompt: '$ cat README.md',
      },
      projects: {
        title: 'Projects',
        prompt: '$ ls -la src/projects/',
      },
      skills: {
        title: 'Skills',
        prompt: '$ cat skills.json',
      },
      contact: {
        title: 'Contact',
        prompt: '$ ./contact.sh',
        header: '#!/bin/bash',
        comment: '# Connect with me',
        message: 'echo "Choose your platform:"',
      },
    },
    common: {
      home: 'Home',
      readMore: 'Read more',
      returnHome: '$ cd ~  [← Return Home]',
    },
    skillLevels: {
      1: 'Beginner',
      2: 'Basics',
      3: 'Intermediate',
      4: 'Advanced',
    },
    skillCategories: {
      language: 'Language',
      frontendFramework: 'Frontend Framework',
      backendFramework: 'Backend Framework',
      database: 'Database',
      test: 'Test',
      infrastructure: 'Infrastructure',
      saas: 'SaaS',
    },
    skillLegend: {
      title: 'Legend',
    },
    error: {
      title: '404 - Page Not Found',
      message: 'Error: ENOENT: no such file or directory',
      stack1: 'at readFile (portfolio/routes.ts:42:15)',
      stack2: 'at processRequest (portfolio/server.ts:128:7)',
      description: 'The requested page could not be found.',
    },
  },
  ja: {
    nav: {
      about: 'README.md',
      projects: 'src/projects/',
      skills: 'skills.json',
      contact: 'contact.sh',
    },
    meta: {
      title: '福山 健 - ポートフォリオ',
      description: 'エンタープライズ向けWebアプリケーション開発10年以上の経験',
    },
    pages: {
      about: {
        title: '自己紹介',
        prompt: '$ cat README.md',
      },
      projects: {
        title: 'プロジェクト',
        prompt: '$ ls -la src/projects/',
      },
      skills: {
        title: 'スキル',
        prompt: '$ cat skills.json',
      },
      contact: {
        title: 'コンタクト',
        prompt: '$ ./contact.sh',
        header: '#!/bin/bash',
        comment: '# 各プラットフォームで繋がりましょう',
        message: 'echo "プラットフォームを選択してください："',
      },
    },
    common: {
      home: 'ホーム',
      readMore: '続きを読む',
      returnHome: '$ cd ~  [← ホームへ戻る]',
    },
    skillLevels: {
      1: 'サポートできる',
      2: '調べながら自走できる',
      3: '自走できる',
      4: '他者に教えることもできる',
    },
    skillCategories: {
      language: '言語',
      frontendFramework: 'フロントエンドフレームワーク',
      backendFramework: 'バックエンドフレームワーク',
      database: 'データベース',
      test: 'テスト',
      infrastructure: 'インフラ',
      saas: 'SaaS',
    },
    skillLegend: {
      title: '凡例',
    },
    error: {
      title: '404 - ページが見つかりません',
      message: 'Error: ENOENT: そのようなファイルやディレクトリはありません',
      stack1: 'at readFile (portfolio/routes.ts:42:15)',
      stack2: 'at processRequest (portfolio/server.ts:128:7)',
      description: 'リクエストされたページが見つかりませんでした。',
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.en;
