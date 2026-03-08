# 🚀 빠른 시작 (5분 배포 가이드)

## Jin을 위한 초간단 배포 매뉴얼

---

## 📦 지금 당장 배포하기

### Step 1: 파일 확인 (10초)

모든 파일이 준비되어 있는지 확인:
```
✅ index.html
✅ css/style.css
✅ js/main.js
✅ README.md
```

---

### Step 2: Netlify Drop 배포 (5분)

#### 2-1. 웹사이트 열기
https://app.netlify.com/drop

#### 2-2. 로그인 (선택사항)
- 이메일만 입력하면 OK
- 또는 로그인 없이 바로 업로드 가능

#### 2-3. 폴더 드래그 & 드롭
- 프로젝트 폴더 **전체**를 화면에 끌어다 놓기
- 또는 "browse to upload" 클릭

#### 2-4. 배포 완료!
- 몇 초 후 URL 생성 (예: `https://hyroxguide-12345.netlify.app`)
- **이 URL을 바로 사용 가능!**

---

### Step 3: 테스트 (2분)

생성된 URL로 접속해서 확인:

1. **디비전 선택** (남/여) → 작동 OK?
2. **"평균값으로 채우기"** 클릭 → 자동 입력 OK?
3. **드롭다운**에서 시간 변경 → 실시간 계산 OK?
4. **"결과 복사하기"** 클릭 → 클립보드 복사 OK?
5. **Instagram 링크** 클릭 → @hyrox.guide.kr 이동 OK?

**모두 OK면 완료! 🎉**

---

### Step 4: 공유하기 (즉시)

#### Instagram 스토리에 올리기
1. 배포된 URL 복사
2. Instagram 스토리 열기
3. 링크 스티커 추가
4. 캡션 작성:
   ```
   🏃 하이록스 기록 계산기 만들었어요!
   
   ✨ 런+스테이션+록스존 입력하면
   예상 완주 시간 + 평균 비교 바로 확인!
   
   🔗 링크 클릭 (바이오에도 추가!)
   
   #하이록스 #HYROX #운동기록 #피트니스
   ```

#### Instagram 피드 포스팅
- 스크린샷 3장:
  1. 메인 화면 (헤더 + 입력 폼)
  2. 결과 화면 (예상 기록 + 비교)
  3. 구간별 분석 (바차트)
- 캡션:
  ```
  🏃 하이록스 기록 계산기 출시! 
  
  ✨ 주요 기능:
  • 예상 완주 시간 자동 계산
  • 2025 서울 평균과 비교
  • 개선 포인트 자동 분석
  • 초보자도 쉬운 입력 (클릭만!)
  
  🔗 링크는 바이오에!
  
  #하이록스 #HYROX #기록계산기 #운동앱
  ```

---

## 🎯 다음 단계 (배포 후)

### 즉시 (Day 1)
- [ ] 배포 URL 테스트 완료
- [ ] Instagram 스토리 공유
- [ ] 친구 3명에게 테스트 요청

### 이번 주 (Day 2-7)
- [ ] `hyroxguide.kr` 도메인 구매 (선택)
- [ ] Instagram 피드 포스팅
- [ ] 하이록스 커뮤니티에 공유

### 다음 주 (Week 2)
- [ ] 사용자 피드백 수집
- [ ] 버그 수정
- [ ] v1.1 기능 기획 (상위% 분석)

---

## 💡 도메인 연결 (선택사항, 나중에 해도 됨)

### 언제 해야 하나?
- 반응이 좋고 계속 운영할 생각이면 → DO
- 테스트만 하고 싶으면 → SKIP

### 방법
1. `hyroxguide.kr` 구매 (가비아/후이즈, 연 1-2만원)
2. Netlify 사이트 설정 → Domain → Add custom domain
3. DNS 설정 (Netlify가 자동 안내해줌)
4. 24시간 대기 (DNS 전파)
5. 완료!

---

## 🐛 문제 발생 시

### 화면이 안 나와요
→ 파일 경로 확인 (`css/style.css`, `js/main.js`)

### CSS가 안 불러와져요
→ 파일 이름 대소문자 확인 (`style.css` vs `Style.css`)

### 드롭다운이 이상해요
→ 다른 브라우저에서 테스트 (Chrome, Safari)

### 그래도 안 돼요
→ Instagram DM: @hyrox.guide.kr

---

## 📁 백업 (중요!)

배포 후 원본 파일을 반드시 백업하세요:

### 방법 1: USB/외장하드
- 프로젝트 폴더 전체를 복사

### 방법 2: 클라우드 (추천)
- Google Drive / Dropbox에 업로드
- 폴더 이름: `hyrox-calculator-v1.0-backup-2025-03-03`

### 방법 3: GitHub (Best)
```bash
cd 프로젝트폴더
git init
git add .
git commit -m "v1.0 Initial release"
# GitHub에서 레포 만들고
git remote add origin https://github.com/yourusername/hyrox-calculator.git
git push -u origin main
```

---

## 🎊 완료!

Jin, 이제 **진짜 끝**이야!

### 현재 상태:
- ✅ 웹사이트 완성
- ✅ 배포 준비 완료
- ✅ 문서 완비
- ✅ 백업 방법 안내

### 지금 해야 할 것:
1. **https://app.netlify.com/drop 열기**
2. **프로젝트 폴더 드래그 & 드롭**
3. **생성된 URL 테스트**
4. **Instagram 스토리에 공유**

**그게 다야! 🚀**

---

**시간이 없다면:**
- 배포만 하고 (5분)
- Instagram 스토리만 올리고 (2분)
- 나머지는 나중에!

**시간이 있다면:**
- 도메인까지 연결하고
- 피드 포스팅까지 하고
- 커뮤니티 공유까지!

---

## 📞 도움 필요?

Instagram DM 보내 → @hyrox.guide.kr

나머지는 README.md와 DEPLOYMENT.md 참고!

---

**배포 성공을 기원해! 💛**

*Let's HYROX! 🏃*
