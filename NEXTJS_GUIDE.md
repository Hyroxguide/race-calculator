# 하이록스 기록 계산기 - Next.js 버전

이것은 **Next.js + Tailwind CSS**로 만든 완전한 하이록스 기록 계산기입니다.

## 📦 프로젝트 구조

```
hyrox-calculator/
├── app/
│   ├── layout.tsx          # 메인 레이아웃
│   ├── page.tsx            # 홈 페이지
│   └── globals.css         # 글로벌 스타일 (Tailwind)
├── components/
│   ├── Header.tsx          # 헤더 컴포넌트
│   ├── Controls.tsx        # 디비전/모드 선택
│   ├── SimpleMode.tsx      # 초보 모드 입력
│   ├── AdvancedMode.tsx    # 상세 모드 입력
│   ├── Results.tsx         # 결과 표시
│   └── Footer.tsx          # 푸터
├── lib/
│   ├── data.ts             # 평균 데이터
│   └── utils.ts            # 유틸리티 함수
├── public/                 # 정적 파일 (이미지 등)
├── package.json            # 의존성 패키지
├── tailwind.config.js      # Tailwind 설정
├── postcss.config.js       # PostCSS 설정
├── tsconfig.json           # TypeScript 설정
└── next.config.js          # Next.js 설정
```

## 🚀 로컬에서 실행하기

### 1단계: Node.js 설치 확인

터미널(또는 명령 프롬프트)을 열고 다음 명령어를 입력:

```bash
node --version
```

버전이 표시되면 설치됨. 표시되지 않으면:
- [Node.js 공식 사이트](https://nodejs.org/)에서 LTS 버전 다운로드 및 설치

### 2단계: 프로젝트 폴더로 이동

```bash
cd hyrox-calculator
```

### 3단계: 패키지 설치

```bash
npm install
```

이 명령어는 `package.json`에 있는 모든 필요한 라이브러리를 자동으로 설치합니다.
- Next.js
- React
- Tailwind CSS
- TypeScript
등이 설치됩니다.

### 4단계: 개발 서버 실행

```bash
npm run dev
```

성공하면 다음과 같은 메시지가 나타납니다:
```
▲ Next.js 14.1.0
- Local:        http://localhost:3000
- Ready in 2.3s
```

### 5단계: 브라우저에서 확인

브라우저를 열고 `http://localhost:3000` 접속

## 🌐 배포하기

### Vercel 배포 (가장 쉬움, 추천!)

1. **GitHub에 코드 올리기**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin [your-github-repo-url]
   git push -u origin main
   ```

2. **Vercel 연결**
   - [vercel.com](https://vercel.com) 접속
   - "Import Project" 클릭
   - GitHub 계정 연결
   - 레포지토리 선택
   - "Deploy" 클릭
   - 자동으로 배포 완료!

3. **커스텀 도메인 연결**
   - Vercel 대시보드에서 Project Settings → Domains
   - 도메인 입력 (예: hyroxguide.kr)
   - DNS 설정 안내에 따라 도메인 등록업체에서 설정

### Netlify 배포

1. **빌드 파일 생성**
   ```bash
   npm run build
   ```
   
2. **Netlify 배포**
   - [netlify.com](https://netlify.com) 접속
   - "Add new site" → "Deploy manually"
   - `out` 폴더를 드래그 & 드롭
   - 배포 완료!

### GitHub Pages 배포

1. **next.config.js 확인**
   - 이미 `output: 'export'` 설정되어 있음

2. **빌드**
   ```bash
   npm run build
   ```

3. **GitHub Pages 설정**
   - GitHub 레포지토리 Settings → Pages
   - Source: GitHub Actions
   - `out` 폴더 배포

## 🛠️ 개발 가이드

### 코드 수정하기

1. **컴포넌트 수정**: `components/` 폴더의 파일 수정
2. **스타일 수정**: `app/globals.css` 또는 Tailwind 클래스 수정
3. **데이터 수정**: `lib/data.ts`에서 평균 데이터 수정
4. **로직 수정**: `app/page.tsx` 또는 각 컴포넌트 수정

### Tailwind CSS 사용법

Tailwind는 **유틸리티 클래스** 방식입니다:

```tsx
// 예시
<div className="bg-black text-white p-4 rounded-lg">
  // bg-black: 검정 배경
  // text-white: 흰색 텍스트
  // p-4: padding 16px
  // rounded-lg: 둥근 모서리
</div>
```

커스텀 색상은 `tailwind.config.js`에 정의되어 있습니다:
- `bg-primary`: 노란색 (#FFFF00)
- `bg-secondary`: 주황색 (#FF5722)
- `bg-background`: 검정 (#000000)

## 🔧 트러블슈팅

### Q1: `npm install` 실패
**해결**: Node.js 버전 확인. 최소 v18 이상 필요.
```bash
node --version  # v18.0.0 이상인지 확인
```

### Q2: 포트 3000이 이미 사용 중
**해결**: 다른 포트로 실행
```bash
npm run dev -- -p 3001
```

### Q3: 스타일이 안 보임
**해결**: 브라우저 캐시 삭제 (Ctrl + Shift + R 또는 Cmd + Shift + R)

### Q4: 빌드 오류
**해결**: 
```bash
# node_modules 삭제 후 재설치
rm -rf node_modules
npm install
npm run build
```

## 📚 추가 학습 자료

### Next.js 배우기
- [Next.js 공식 문서](https://nextjs.org/docs)
- [Next.js 튜토리얼](https://nextjs.org/learn)

### Tailwind CSS 배우기
- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
- [Tailwind CSS 치트시트](https://nerdcave.com/tailwind-cheat-sheet)

### TypeScript 배우기
- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)

## 💡 개념 설명

### Next.js란?
React 기반의 **프레임워크**입니다. 
- 페이지 라우팅 자동화
- 최적화된 빌드
- SEO 친화적
- 서버 사이드 렌더링 지원

### Tailwind CSS란?
**유틸리티 우선 CSS 프레임워크**입니다.
- 미리 정의된 클래스로 빠른 스타일링
- CSS 파일을 직접 작성할 필요 없음
- 반응형 디자인 쉽게 구현
- 프로덕션 빌드 시 사용하지 않는 CSS 자동 제거

### TypeScript란?
JavaScript에 **타입 시스템**을 추가한 언어입니다.
- 코드 작성 중 오류 사전 발견
- 자동완성 및 코드 인텔리센스 향상
- 대규모 프로젝트에 적합

## 📞 도움말

문제가 있으면:
1. [GitHub Issues](https://github.com/yourusername/hyrox-calculator/issues) 에서 검색
2. [Next.js Discord](https://nextjs.org/discord) 커뮤니티 질문
3. Instagram [@hyrox.guide.kr](https://instagram.com/hyrox.guide.kr) DM

---

**Made with 💛 for the HYROX Korea Community**
