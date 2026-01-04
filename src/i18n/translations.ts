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
      description: 'Software Engineer passionate about building scalable systems',
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
      description: 'スケーラブルなシステム構築に情熱を持つソフトウェアエンジニア',
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
