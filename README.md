### 🧪 UI Lab Project

최신 프론트엔드 기술(React, TypeScript, Zustand)을 결합한 UI 컴포넌트 플레이그라운드입니다. 컴포넌트의 가독성, 재사용성, 그리고 효율적인 디자인 시스템 구축을 연구하기 위한 실험실입니다.

## 📂 Folder Structure

```
src/
├── assets/       # 이미지, 아이콘
├── components/   # 공유 컴포넌트 및 레이아웃
│ └── layout/     # 사이드바, 프리뷰, 컨트롤패널 등 서비스 골격 컴포넌트
├── constants/    # 전역 상수
├── library/      # UI 컴포넌트 (Button, Input 등 독립적 설계)
├── store/        # Zustand를 이용한 전역 상태 관리
├── styles/       # 전역 SCSS 관리 (reset, variables, fonts, mixins 등)
├── App.tsx       # 메인 엔트리 및 전체 레이아웃 구성
└── main.scss     # 전역 스타일 엔트리
```

## 🛠 Tech Stack

Framework: React 18+

Language: TypeScript (Type-safe Props 및 Store 관리)

State Management: Zustand (컴포넌트별 동적 옵션 연동)

Styling: SCSS Modules (BEM 구조 지향 및 변수 활용)

## 🚀 Key Features

Dynamic Rendering: 사이드바에서 선택한 컴포넌트를 Preview 영역에 즉시 렌더링합니다.

Live Playground: ControlPanel에서 실시간으로 Props(variant, size, label 등)를 변경하며 컴포넌트 변화를 확인합니다.

Scalable Architecture: 새로운 컴포넌트 추가 시 constants 파일 업데이트만으로 메뉴와 설정이 자동 연동되는 확장성 있는 구조를 지향합니다.
