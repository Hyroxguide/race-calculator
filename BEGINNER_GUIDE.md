# 📘 완전 초보자를 위한 가이드

이 문서는 프로그래밍이나 웹 개발 경험이 전혀 없는 분들을 위한 **완전 초보자 가이드**입니다.

---

## 🎯 목표

이 가이드를 따라하면:
1. ✅ 로컬 컴퓨터에서 프로젝트를 실행할 수 있습니다
2. ✅ 인터넷에 배포하여 누구나 접속할 수 있게 만들 수 있습니다
3. ✅ 기본적인 수정 방법을 이해할 수 있습니다

---

## 📋 Step 1: 필수 프로그램 설치

### 1-1. Node.js 설치

**Node.js란?** JavaScript를 컴퓨터에서 실행할 수 있게 해주는 프로그램입니다.

1. [nodejs.org](https://nodejs.org/) 접속
2. **LTS** 버전 다운로드 (초록색 버튼)
3. 다운로드된 파일 실행
4. "다음" 버튼 계속 클릭하여 설치

**설치 확인:**
- Windows: `Win + R` → `cmd` 입력 → Enter
- Mac: `Command + Space` → "터미널" 검색

터미널에 다음 명령어 입력:
```bash
node --version
```

`v18.0.0` 같은 숫자가 나오면 성공!

### 1-2. 코드 에디터 설치 (선택사항)

**VS Code란?** 코드를 편집하는 프로그램입니다.

1. [code.visualstudio.com](https://code.visualstudio.com/) 접속
2. 다운로드 및 설치
3. 설치 시 "PATH에 추가" 옵션 체크

---

## 📦 Step 2: 프로젝트 다운로드

### 방법 1: ZIP 파일로 다운로드

1. GitHub 페이지에서 **Code** 버튼 클릭
2. **Download ZIP** 선택
3. 다운로드된 파일 압축 해제
4. 원하는 폴더에 저장 (예: `C:\Projects\hyrox-calculator`)

### 방법 2: Git으로 클론 (고급)

```bash
git clone https://github.com/yourusername/hyrox-calculator.git
cd hyrox-calculator
```

---

## 🚀 Step 3: 프로젝트 실행

### 3-1. 터미널에서 프로젝트 폴더로 이동

**Windows:**
```bash
cd C:\Projects\hyrox-calculator
```

**Mac:**
```bash
cd ~/Projects/hyrox-calculator
```

### 3-2. 패키지 설치

터미널에 다음 명령어 입력:
```bash
npm install
```

**무슨 일이 일어나나요?**
- `package.json` 파일에 적힌 모든 라이브러리를 자동으로 다운로드합니다
- `node_modules`라는 폴더가 생성됩니다 (약 200MB)
- 1~3분 정도 걸립니다

### 3-3. 개발 서버 실행

```bash
npm run dev
```

**성공 메시지:**
```
▲ Next.js 14.1.0
- Local:        http://localhost:3000
- Ready in 2.3s
```

### 3-4. 브라우저에서 확인

1. 브라우저 열기 (Chrome, Safari, Edge 등)
2. 주소창에 `http://localhost:3000` 입력
3. 하이록스 계산기가 보이면 성공! 🎉

---

## 🌐 Step 4: 인터넷에 배포하기

### 방법 1: Vercel 배포 (가장 쉬움, 무료)

**Vercel이란?** Next.js를 만든 회사에서 제공하는 무료 호스팅 서비스입니다.

#### 4-1. GitHub에 코드 올리기

1. [github.com](https://github.com) 회원가입/로그인
2. 오른쪽 위 **+** → **New repository** 클릭
3. Repository name: `hyrox-calculator`
4. **Create repository** 클릭

5. 터미널에서 다음 명령어 실행:
```bash
git init
git add .
git commit -m "첫 번째 커밋"
git remote add origin https://github.com/yourusername/hyrox-calculator.git
git push -u origin main
```

**Git이 없다면?**
- Windows: [git-scm.com](https://git-scm.com/) 에서 다운로드
- Mac: 터미널에서 `git` 입력하면 자동 설치 안내

#### 4-2. Vercel에 배포

1. [vercel.com](https://vercel.com) 접속
2. **Sign Up** → GitHub 계정으로 로그인
3. **New Project** 클릭
4. `hyrox-calculator` 레포지토리 선택
5. **Deploy** 클릭
6. 2~3분 기다리면 배포 완료!

#### 4-3. 도메인 확인

배포 완료 후 다음과 같은 URL이 생성됩니다:
```
https://hyrox-calculator.vercel.app
```

이 링크를 누구에게나 공유할 수 있습니다!

#### 4-4. 커스텀 도메인 연결 (선택사항)

`hyroxguide.kr` 같은 자신만의 도메인을 사용하려면:

1. 도메인 구매 (가비아, 호스팅케이알 등)
2. Vercel 프로젝트 → **Settings** → **Domains**
3. 도메인 입력 후 DNS 설정 안내 따르기

---

## ✏️ Step 5: 내용 수정하기

### 5-1. 텍스트 수정

**헤더 제목 바꾸기:**

`components/Header.tsx` 파일 열기:
```tsx
<h1 className="text-3xl font-bold text-primary">
  하이록스 기록 계산기  ← 이 부분 수정
</h1>
```

### 5-2. 색상 변경

**노란색을 다른 색으로 바꾸기:**

`tailwind.config.js` 파일 열기:
```js
colors: {
  primary: '#FFFF00',    // 노란색 → 다른 색상 코드로 변경
  secondary: '#FF5722',  // 주황색
}
```

**색상 코드 찾기:** [colorhunt.co](https://colorhunt.co/)

### 5-3. 평균 데이터 수정

`lib/data.ts` 파일 열기:
```ts
men: {
  overall: { min: 87, sec: 59 },  // 87분 59초
  run: { min: 44, sec: 21 },
  // 숫자만 바꾸면 됩니다
}
```

### 5-4. 수정 후 배포

**로컬에서 확인:**
1. 파일 저장 (Ctrl + S 또는 Cmd + S)
2. 브라우저에서 자동 새로고침됨

**인터넷에 반영:**
```bash
git add .
git commit -m "내용 수정"
git push
```

Vercel이 자동으로 새 버전을 배포합니다! (1~2분)

---

## 🐛 자주 발생하는 문제

### Q1: `npm install` 실패

**증상:**
```
npm ERR! code EACCES
```

**해결:**
```bash
# Windows (관리자 권한으로 실행)
# Mac/Linux
sudo npm install
```

### Q2: 포트 3000이 이미 사용 중

**증상:**
```
Port 3000 is already in use
```

**해결:**
```bash
# 다른 포트로 실행
npm run dev -- -p 3001

# 또는 포트 3000 사용 중인 프로그램 종료
```

### Q3: 브라우저에서 하얀 화면만 보임

**해결:**
1. 터미널에서 오류 메시지 확인
2. 브라우저 캐시 삭제 (Ctrl + Shift + R)
3. 다시 `npm run dev` 실행

### Q4: Vercel 배포 실패

**해결:**
1. `next.config.js`에 `output: 'export'` 있는지 확인
2. 빌드 에러 확인: `npm run build`
3. 에러 메시지를 구글에 검색

---

## 📚 용어 설명

### 기본 개념

**Node.js**
- JavaScript 실행 환경
- 웹 개발 필수 도구

**npm (Node Package Manager)**
- 라이브러리 설치 관리 도구
- `npm install` = 필요한 라이브러리 설치

**Next.js**
- React 기반 웹 프레임워크
- 페이지 만들기를 쉽게 해줌

**Tailwind CSS**
- CSS 프레임워크
- 미리 만들어진 스타일 클래스 제공

**TypeScript**
- JavaScript + 타입 체크
- 오류를 미리 발견할 수 있음

### 명령어 설명

```bash
npm install       # 라이브러리 설치
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm start        # 빌드된 앱 실행
```

### 파일/폴더 설명

```
app/              # 페이지 파일들
components/       # UI 조각들
lib/              # 데이터와 함수들
public/           # 이미지 등 정적 파일
package.json      # 프로젝트 정보
node_modules/     # 설치된 라이브러리들
```

---

## 💡 다음 단계

### 기본 완료 후:
1. ✅ Next.js 튜토리얼 따라하기
2. ✅ Tailwind CSS 문서 읽기
3. ✅ TypeScript 기초 학습
4. ✅ React 공식 문서 학습

### 추천 학습 순서:
1. HTML/CSS 기초 (w3schools.com)
2. JavaScript 기초 (javascript.info)
3. React 입문 (react.dev/learn)
4. Next.js 문서 (nextjs.org/learn)

---

## 🆘 도움 받기

### 질문하기 전에:
1. 오류 메시지 전체 복사
2. 어떤 명령어 실행했는지 기록
3. 스크린샷 준비

### 도움 받을 곳:
- [Stack Overflow](https://stackoverflow.com/) - 영어 Q&A
- [Okky](https://okky.kr/) - 한국 개발자 커뮤니티
- [Next.js Discord](https://nextjs.org/discord) - 공식 디스코드

### Instagram DM:
[@hyrox.guide.kr](https://instagram.com/hyrox.guide.kr) 

---

**화이팅! 포기하지 마세요! 💪**
