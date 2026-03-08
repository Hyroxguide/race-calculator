# 하이록스 기록 계산기 - 배포 가이드

## 🚀 빠른 배포 (5분 완료)

### 옵션 1: Netlify Drop (가장 쉬움) ⭐ 추천

1. **준비**: 프로젝트 폴더 전체를 하나의 ZIP 파일로 압축하거나 그대로 준비

2. **Netlify Drop 접속**
   - 브라우저에서 https://app.netlify.com/drop 열기
   - Netlify 계정 없어도 바로 사용 가능 (이메일만 필요)

3. **드래그 & 드롭**
   - 프로젝트 폴더를 화면에 드래그 & 드롭
   - 또는 "browse to upload" 클릭해서 파일 선택

4. **배포 완료**
   - 몇 초 후 자동으로 URL 생성 (예: `https://hyroxguide-12345.netlify.app`)
   - 즉시 접속 가능!

5. **커스텀 도메인 연결** (선택사항)
   - Site settings → Domain management → Add custom domain
   - `hyroxguide.kr` 입력
   - DNS 설정 안내 따르기

---

### 옵션 2: Vercel

1. **Vercel 가입**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 배포**
   - "New Project" 클릭
   - "Import from Git" 또는 "Upload Project Folder"
   - 프로젝트 선택/업로드

3. **자동 빌드**
   - Vercel이 자동으로 감지하고 배포
   - 몇 초 후 URL 생성

4. **커스텀 도메인**
   - Project Settings → Domains → Add
   - `hyroxguide.kr` 입력

---

### 옵션 3: GitHub Pages

1. **GitHub 레포 생성**
   - https://github.com/new 에서 새 레포지토리 생성
   - 이름: `hyrox-calculator` (또는 원하는 이름)
   - Public 선택

2. **파일 업로드**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: HYROX Calculator v1.0"
   git branch -M main
   git remote add origin https://github.com/yourusername/hyrox-calculator.git
   git push -u origin main
   ```

3. **GitHub Pages 활성화**
   - 레포지토리 → Settings → Pages
   - Source: `main` branch 선택
   - Save

4. **접속**
   - 몇 분 후 `https://yourusername.github.io/hyrox-calculator` 접속 가능

5. **커스텀 도메인**
   - Pages 설정에서 Custom domain 입력
   - DNS 설정 (README 참조)

---

## 📋 배포 전 체크리스트

### 필수 항목

- [ ] `index.html` 파일이 루트에 있는지 확인
- [ ] `css/style.css` 파일 존재 확인
- [ ] `js/main.js` 파일 존재 확인
- [ ] 모든 경로가 상대 경로인지 확인 (절대 경로 사용 금지)
- [ ] 브라우저에서 로컬 테스트 완료

### 선택 항목

- [ ] OG 이미지 추가 (`og-image.jpg`, 1200x630px)
- [ ] Favicon 추가 (`favicon.ico`)
- [ ] Apple Touch Icon 추가 (`apple-touch-icon.png`, 180x180px)
- [ ] Google Analytics 코드 추가 (선택)
- [ ] robots.txt 추가 (SEO 최적화)
- [ ] sitemap.xml 추가 (SEO 최적화)

---

## 🔧 배포 후 설정

### 1. SSL 인증서 (HTTPS)
- Netlify/Vercel: 자동 발급 (무료, Let's Encrypt)
- GitHub Pages: 자동 발급

### 2. 커스텀 도메인 DNS 설정

#### hyroxguide.kr 도메인 설정 예시

**Netlify**:
```
Type    Name    Value
A       @       75.2.60.5
CNAME   www     hyroxguide-12345.netlify.app
```

**Vercel**:
```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

**GitHub Pages**:
```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     yourusername.github.io
```

### 3. DNS 전파 확인
- DNS 설정 후 최대 24시간 소요 (보통 1-2시간)
- 확인 도구: https://dnschecker.org

---

## 📊 성능 최적화

### 이미 적용된 최적화

- [x] CSS 압축 (minify)
- [x] JavaScript 최적화
- [x] 이미지 지연 로딩 준비
- [x] 캐시 헤더 설정 (`netlify.toml`, `vercel.json`)

### 추가 가능한 최적화

- [ ] 이미지 WebP 포맷 사용
- [ ] CDN 활용 (자동: Netlify/Vercel)
- [ ] Service Worker (PWA화)

---

## 🐛 문제 해결

### 배포는 됐는데 화면이 안 나와요
- **원인**: 파일 경로 문제
- **해결**: 모든 링크를 상대 경로(`css/style.css`)로 수정, 절대 경로(`/css/style.css`) 피하기

### CSS/JS가 안 불러와져요
- **원인**: 파일 경로 또는 대소문자 문제
- **해결**: 
  - 파일 이름 대소문자 확인 (서버는 대소문자 구분)
  - 경로 확인 (`css/style.css` vs `CSS/Style.css`)

### 도메인이 연결이 안 돼요
- **원인**: DNS 전파 대기 중
- **해결**: 
  - 최대 24시간 대기
  - `dig hyroxguide.kr` 명령어로 DNS 확인
  - https://dnschecker.org 에서 전 세계 전파 상태 확인

### 모바일에서 레이아웃이 깨져요
- **원인**: 반응형 테스트 부족
- **해결**: 
  - 브라우저 개발자 도구 (F12) → Device Toolbar
  - iPhone, Android 다양한 기기에서 테스트

---

## 📱 배포 후 테스트

### 기능 테스트

1. **기본 동작**
   - [ ] 디비전 선택 (남/여)
   - [ ] 모드 전환 (초보/상세)
   - [ ] "평균값으로 채우기" 버튼
   - [ ] "초기화" 버튼
   - [ ] 드롭다운 입력
   - [ ] 실시간 계산
   - [ ] 결과 복사

2. **링크 확인**
   - [ ] Instagram 링크 (`@hyrox.guide.kr`)
   - [ ] 데이터 출처 링크 (Hybrid Athlete Club)
   - [ ] HYROX Korea 링크

3. **반응형 확인**
   - [ ] Desktop (1920x1080)
   - [ ] Laptop (1366x768)
   - [ ] Tablet (768x1024)
   - [ ] Mobile (375x667)

4. **브라우저 확인**
   - [ ] Chrome
   - [ ] Safari
   - [ ] Firefox
   - [ ] Edge
   - [ ] Samsung Internet (Android)

### SEO 테스트

1. **Google Search Console**
   - https://search.google.com/search-console
   - 사이트 등록 및 sitemap.xml 제출

2. **OG 미리보기**
   - 카카오톡: 링크 붙여넣기
   - 페이스북: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator

3. **페이지 속도**
   - https://pagespeed.web.dev
   - 목표: 90점 이상

---

## 📞 도움이 필요하신가요?

- Instagram DM: [@hyrox.guide.kr](https://www.instagram.com/hyrox.guide.kr)
- Email: contact@hyroxguide.kr
- GitHub Issues: 레포지토리에서 이슈 등록

---

**배포 성공을 기원합니다! 🚀**
