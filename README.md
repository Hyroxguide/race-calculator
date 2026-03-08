# 🏃 하이록스 기록 계산기 (HYROX Calculator)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14.1-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)](https://tailwindcss.com/)
[![Instagram](https://img.shields.io/badge/Instagram-@hyrox.guide.kr-E4405F?logo=instagram&logoColor=white)](https://www.instagram.com/hyrox.guide.kr)

> HYROX 예상 기록 계산 및 2025 서울(코엑스) 평균 비교 도구

**Live Demo**: [https://hyroxguide.kr](https://hyroxguide.kr)

---

## ✨ 주요 기능

✅ **두 가지 입력 모드**
- 초보 모드: 1km 페이스 + 스테이션 총합 + 록스존 총합 (3개만!)
- 상세 모드: 런 8구간 + 스테이션 8개 + 록스존 개별 입력

✅ **실시간 계산 & 비교**
- 입력 즉시 예상 완주 시간 계산
- 2025 서울 평균 대비 차이 표시 (빠름/느림)

✅ **구간별 분석**
- 런 / 록스존 / 스테이션 비중 및 퍼센트
- 각 구간별 시간 상세 표시

✅ **결과 공유**
- 복사 버튼 클릭으로 인스타그램/카톡 공유

✅ **현대적인 디자인**
- 다크 테마 (검정 + 노랑 + 주황)
- 모바일 최적화
- 반응형 디자인

---

## 🚀 빠른 시작

### 필수 요구사항
- Node.js 18.0 이상
- npm 또는 yarn

### 1. 설치

```bash
# 패키지 설치
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

### 3. 프로덕션 빌드

```bash
# 빌드
npm run build

# 빌드 결과물 실행
npm start
```

---

## 📦 프로젝트 구조

```
hyrox-calculator/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈 페이지
│   └── globals.css        # 글로벌 스타일
├── components/            # React 컴포넌트
│   ├── Header.tsx
│   ├── Controls.tsx
│   ├── SimpleMode.tsx
│   ├── AdvancedMode.tsx
│   ├── Results.tsx
│   └── Footer.tsx
├── lib/                   # 유틸리티 & 데이터
│   ├── data.ts           # 평균 데이터
│   └── utils.ts          # 헬퍼 함수
├── public/               # 정적 파일
│   └── logo.png
├── package.json          # 의존성
├── tailwind.config.js    # Tailwind 설정
├── postcss.config.js     # PostCSS 설정
├── tsconfig.json         # TypeScript 설정
└── next.config.js        # Next.js 설정
```

---

## 🛠️ 기술 스택

### Core
- **Next.js 14.1** - React 프레임워크
- **React 18.2** - UI 라이브러리
- **TypeScript 5.3** - 타입 안정성

### Styling
- **Tailwind CSS 3.4** - 유틸리티 CSS 프레임워크
- **PostCSS** - CSS 변환
- **Autoprefixer** - CSS 호환성

### Features
- **App Router** - Next.js 최신 라우팅
- **Server Components** - 성능 최적화
- **Static Export** - 정적 사이트 생성

---

## 🌐 배포 가이드

### Vercel 배포 (추천!)

1. GitHub에 코드 푸시
2. [vercel.com](https://vercel.com) 접속
3. "Import Project" 클릭
4. GitHub 레포지토리 선택
5. 자동 배포 완료!

### Netlify 배포

```bash
npm run build
# out 폴더를 Netlify에 업로드
```

### GitHub Pages 배포

```bash
npm run build
# out 폴더를 GitHub Pages에 배포
```

자세한 배포 가이드는 [NEXTJS_GUIDE.md](./NEXTJS_GUIDE.md) 참조

---

## 📊 데이터 출처

본 계산기는 **2025 서울(코엑스) HYROX Season 8** 공식 결과를 기반으로 합니다.

**출처**: [Hybrid Athlete Club - Season 8 Average Times](https://hybridathleteclub.com/average-hyrox-times/season_8)

### 평균 기록

**오픈 싱글 남자** (702명)
- Overall: 01:27:59
- Run: 44:21 (50.4%)
- Roxzone: 07:43 (8.8%)
- Stations: 36:01 (40.8%)

**오픈 싱글 여자** (352명)
- Overall: 01:39:31
- Run: 50:31 (50.7%)
- Roxzone: 08:30 (8.5%)
- Stations: 41:07 (40.8%)

---

## 🎯 사용 방법

### 1. 디비전 선택
남자 또는 여자 선택

### 2. 입력 모드 선택
- **초보 모드**: 간단한 3개 값만 입력
- **상세 모드**: 각 구간별 상세 입력

### 3. 평균값 채우기
"평균값으로 채우기" 버튼으로 서울 평균 자동 입력

### 4. 값 수정
숫자 입력 필드에서 자신의 기록 입력

### 5. 결과 확인
- 예상 완주 시간
- 평균 대비 차이
- 구간별 비중

### 6. 결과 공유
"결과 복사하기" 버튼으로 인스타그램/카톡 공유

---

## 🔧 개발 가이드

### 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# TypeScript 타입 체크
npm run type-check

# 린트 실행
npm run lint
```

### 컴포넌트 수정

모든 컴포넌트는 `components/` 폴더에 있습니다:

```tsx
// 예시: SimpleMode.tsx 수정
export default function SimpleMode({ ... }) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
      {/* 내용 */}
    </div>
  )
}
```

### 스타일 수정

Tailwind CSS 유틸리티 클래스 사용:

```tsx
<div className="bg-primary text-black p-4 rounded-lg hover:bg-yellow-300">
  노란색 버튼
</div>
```

커스텀 색상은 `tailwind.config.js`에서 수정:

```js
theme: {
  extend: {
    colors: {
      primary: '#FFFF00',    // 노랑
      secondary: '#FF5722',  // 주황
    },
  },
}
```

---

## 🐛 트러블슈팅

### CSS가 안 보일 때
```bash
# 캐시 삭제 후 재시작
rm -rf .next
npm run dev
```

### 빌드 오류
```bash
# node_modules 재설치
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 포트 변경
```bash
npm run dev -- -p 3001
```

---

## 📚 학습 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/)
- [React 공식 문서](https://react.dev/)

---

## 🤝 기여 방법

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일 참조.

---

## 📞 연락처

**HYROX Guide Korea**

- 📱 Instagram: [@hyrox.guide.kr](https://www.instagram.com/hyrox.guide.kr)
- 🌐 Website: [https://hyroxguide.kr](https://hyroxguide.kr)
- 📧 Email: contact@hyroxguide.kr

---

## 🙏 감사의 말

- **Hybrid Athlete Club** - 정확한 평균 데이터 제공
- **RaceKeep & HYRESULT** - 공식 결과 데이터
- **HYROX South Korea** - 국내 대회 운영
- **HYROX 커뮤니티** - 피드백 및 아이디어

---

<div align="center">

**Made with 💛 for the HYROX Korea Community**

</div>
