# track-daily-money

[English](#english) · [ภาษาไทย](#ภาษาไทย) · [Version History · ประวัติเวอร์ชัน](#version-history)

**Current version · เวอร์ชันปัจจุบัน:** 0.2

## Version History · ประวัติเวอร์ชัน

### v0.3 (planned · วางแผน)

**English**

**Authentication**

- User **authentication** with user ID and password (register, login, logout)
- Session / token handling between frontend and Go backend
- Protected routes — require login before accessing app pages
- Auth architecture designed to support **OAuth** providers in the future (e.g. Google, LINE)

**Transactions & entries**

- **Currency switching** — user can change display/recording currency in settings
- **Date selection** — log entries for today, a past date, or a chosen date; **future dates are not allowed**
- **Tags** — assign tags to each entry for grouping and filtering
- **Calendar table view** — record and browse entries in a calendar-style table layout
- **CRUD** — create, read, update, and delete entries
- **View modes** — switch between **table (calendar)** view and **record (list)** view
- **Daily summary** — show per-day totals (income, expense, saving) in both table and record views

**ไทย**

**Authentication**

- ระบบ **authentication** ด้วย user ID และ password (สมัครสมาชิก, เข้าสู่ระบบ, ออกจากระบบ)
- จัดการ session / token ระหว่าง frontend และ Go backend
- Protected routes — ต้อง login ก่อนเข้าหน้าใช้งานหลัก
- ออกแบบ auth ให้รองรับ **OAuth** ในอนาคต (เช่น Google, LINE)

**รายการและการบันทึก**

- **เปลี่ยนสกุลเงิน** — ผู้ใช้เลือกสกุลเงินสำหรับแสดงผลและบันทึกได้ในหน้าตั้งค่า
- **เลือกวันที่** — ลงบันทึกวันนี้ ย้อนหลัง หรือตามวันที่เลือกได้ **ห้ามลงบันทึกวันในอนาคต**
- **Tag** — กำหนด tag ให้แต่ละรายการเพื่อจัดกลุ่มและกรอง
- **มุมมองตาราง calendar** — บันทึกและดูรายการในรูปแบบตารางแบบปฏิทิน
- **CRUD** — เพิ่ม ดู แก้ไข และลบรายการได้
- **สลับมุมมอง** — เลือกแสดงเป็น **ตาราง (calendar)** หรือ **record (รายการ)** ได้
- **สรุปรายวัน** — แสดงยอดรวมรายรับ รายจ่าย ออม ของแต่ละวัน ทั้งในมุมมองตารางและ record

### v0.2 (current · ปัจจุบัน)

**English**

- Built basic UI with **Tailwind CSS** (responsive layout: sidebar on desktop, bottom nav on mobile)
- Organized frontend into modules: `pages/`, `components/`, `services/`, `assets/`, `routes/`, `types/`
- Added 4 page modules: Dashboard, Transactions, Slip Scan, Settings
- Set up **React Router** for client-side navigation
- Added shared UI components: `Button`, `Card`, `Badge`, `AppLayout`, `Header`, `Sidebar`
- Added mock `transaction.service` and base `api` client for UI development
- Integrated **i18next** with central locale files (`src/locales/en`, `src/locales/th`)
- Supported **English** and **Thai** with language switcher (header + Settings)
- Updated README to document structure, pages, i18n, and setup

**ไทย**

- สร้าง UI พื้นฐานด้วย **Tailwind CSS** (รองรับมือถือ: sidebar บน desktop, bottom nav บนมือถือ)
- จัดโครงสร้าง frontend แบบ module: `pages/`, `components/`, `services/`, `assets/`, `routes/`, `types/`
- เพิ่ม 4 หน้า: ภาพรวม, รายการ, สแกนสลิป, ตั้งค่า
- ตั้งค่า **React Router** สำหรับเปลี่ยนหน้า
- เพิ่ม UI ส่วนกลาง: `Button`, `Card`, `Badge`, `AppLayout`, `Header`, `Sidebar`
- เพิ่ม `transaction.service` (mock) และ `api` client สำหรับพัฒนา UI
- ติดตั้ง **i18next** พร้อมไฟล์แปลภาษากลาง (`src/locales/en`, `src/locales/th`)
- รองรับ **อังกฤษ** และ **ไทย** พร้อมปุ่มสลับภาษา (header และหน้าตั้งค่า)
- อัปเดต README ให้สอดคล้องกับโครงสร้างและฟีเจอร์ปัจจุบัน

### v0.1

**English**

- Initialized the **track-daily-money** repository and bilingual README (EN / TH)
- Defined product scope: daily income, expense, and saving tracker
- Planned core features: manual entries, slip scan (auto-record), LINE notifications
- Chose tech stack: **Vite + React + TypeScript** (frontend), **Go** (backend)
- Scaffolded frontend with Vite + React + TypeScript default template
- Created `Frontend/` and `Backend/` folder structure (backend placeholder)

**ไทย**

- เริ่มโปรเจค **track-daily-money** และเขียน README สองภาษา (EN / TH)
- กำหนดขอบเขตระบบ: บันทึกรายรับ รายจ่าย และการออมรายวัน
- วางแผนฟีเจอร์หลัก: บันทึกด้วยตนเอง, สแกนสลิป (บันทึกอัตโนมัติ), แจ้งเตือน LINE
- เลือกเทคโนโลยี: **Vite + React + TypeScript** (frontend), **Go** (backend)
- สร้าง frontend scaffold ด้วย Vite + React + TypeScript
- จัดโฟลเดอร์ `Frontend/` และ `Backend/` (backend ยังเป็น placeholder)

---

## English

A web application for recording and tracking daily spending. It helps you see an overview of income, expenses, savings, and spending habits each day.

### Overview

The system is designed to make daily financial logging easy — whether you enter transactions manually or pull data automatically from transfer slips. LINE notifications help you stay on top of spending and usage alerts.

### Key Features

| Feature | Status |
|---------|--------|
| Daily entries (income / expense / saving) | UI ready (mock data) — v0.2 |
| Slip scanning | UI placeholder — v0.2 |
| LINE notifications | UI placeholder — v0.2 |
| Bilingual UI (EN / TH) | Ready — v0.2 |
| User auth (ID / password) | Planned — v0.3 |
| Currency switching | Planned — v0.3 |
| Backdated / date-picked entries (no future dates) | Planned — v0.3 |
| Entry tags | Planned — v0.3 |
| Calendar table view | Planned — v0.3 |
| Entry CRUD (create / edit / delete) | Planned — v0.3 |
| Table vs record view toggle | Planned — v0.3 |
| Daily summary per view | Planned — v0.3 |
| OAuth (Google, LINE, …) | Planned — future |
| Backend API | Planned |

### Tech Stack

| Layer    | Technology |
|----------|------------|
| Frontend | [Vite](https://vite.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Tailwind CSS](https://tailwindcss.com/) |
| Routing  | [React Router](https://reactrouter.com/) |
| i18n     | [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/) |
| Backend  | [Go](https://go.dev/) (Golang) — in development |

### Project Structure

```
track-daily-money/
├── Frontend/
│   └── tracking-dayily-money-fe/
│       ├── public/                 # Static assets (favicon, icons)
│       └── src/
│           ├── assets/             # Images and bundled assets
│           ├── components/         # Shared UI (layout, Button, Card, …)
│           ├── locales/            # Central i18n files (en, th)
│           ├── pages/              # Page modules (each page = own folder)
│           │   ├── home/
│           │   ├── transactions/
│           │   ├── slip-scan/
│           │   └── settings/
│           ├── routes/             # App routing
│           ├── services/           # API client and data services
│           └── types/              # Shared TypeScript types
├── Backend/                        # Go API (in development)
└── README.md
```

### Frontend Pages (v0.2)

| Route | Page | Description |
|-------|------|-------------|
| `/` | Dashboard | Summary cards, recent transactions, quick actions |
| `/transactions` | Transactions | Manual entry form and transaction list |
| `/slip-scan` | Slip Scan | Upload zone and preview placeholder |
| `/settings` | Settings | LINE notification settings and language switcher |

### v0.3 Roadmap

| Area | Scope |
|------|--------|
| **Auth** | Email/username + password, registration, JWT/session, protected routes; OAuth-ready architecture |
| **Settings** | Currency switching |
| **Entries** | Date picker (today / past / chosen date — no future), tags, full CRUD |
| **Views** | Calendar table view and record (list) view with toggle |
| **Summary** | Per-day totals shown in both table and record views |
| **Future** | OAuth 2.0 social login (extensible provider model) |

```
Login flow (v0.3)
  User → Login page → Backend auth API → Token stored → Access app routes

Entry flow (v0.3)
  User → Pick date (≤ today) → Add/edit entry + tags → Save
  User → Switch table / record view → See daily summary

Future OAuth flow
  User → OAuth provider → Callback → Link or create account → Access app routes
```

### Internationalization

Translation files live in a central folder:

```
src/locales/
├── en/    # English
├── th/    # Thai
├── index.ts
├── hooks.ts
└── utils.ts
```

Supported languages: **English** (`en`) and **Thai** (`th`). Language is detected from browser/localStorage and can be switched in the header or Settings page.

### Getting Started

#### Requirements

- Node.js **20.19+** or **22.12+** (required by Vite 8)

#### Frontend

```bash
cd Frontend/tracking-dayily-money-fe
npm install
npm run dev
```

| Command           | Description              |
|-------------------|--------------------------|
| `npm run dev`     | Start dev server         |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

Optional environment variable:

| Variable | Description |
|----------|-------------|
| `VITE_API_BASE_URL` | Backend API base URL (default: `http://localhost:8080/api`) |

#### Backend

The backend uses Golang. Setup and run instructions will be added here when the API is ready.

### License

Not specified yet — to be updated later.

---

## ภาษาไทย

เว็บแอปพลิเคชันสำหรับบันทึกและติดตามการใช้เงินรายวัน ช่วยให้เห็นภาพรวมรายรับ–รายจ่าย การออม และพฤติกรรมการใช้จ่ายในแต่ละวัน

### ภาพรวมระบบ

ระบบออกแบบมาเพื่อให้ผู้ใช้ลงบันทึกการเงินประจำวันได้สะดวก ทั้งการบันทึกด้วยตนเองและการดึงข้อมูลจากสลิปโอนเงินโดยอัตโนมัติ พร้อมการแจ้งเตือนผ่าน LINE เพื่อช่วยควบคุมและติดตามการใช้จ่าย

### ฟีเจอร์หลัก

| ฟีเจอร์ | สถานะ |
|---------|--------|
| บันทึกรายการรายวัน (รายรับ / รายจ่าย / ออม) | UI พร้อม (ข้อมูล mock) — v0.2 |
| สแกนสลิป | UI placeholder — v0.2 |
| แจ้งเตือนผ่าน LINE | UI placeholder — v0.2 |
| รองรับสองภาษา (EN / TH) | พร้อมใช้งาน — v0.2 |
| Auth ผู้ใช้ (ID / password) | วางแผน — v0.3 |
| เปลี่ยนสกุลเงิน | วางแผน — v0.3 |
| ลงบันทึกย้อนหลัง / เลือกวันที่ (ห้ามวันอนาคต) | วางแผน — v0.3 |
| Tag รายการ | วางแผน — v0.3 |
| มุมมองตาราง calendar | วางแผน — v0.3 |
| CRUD รายการ (เพิ่ม / แก้ไข / ลบ) | วางแผน — v0.3 |
| สลับมุมมองตาราง / record | วางแผน — v0.3 |
| สรุปรายวันตามมุมมอง | วางแผน — v0.3 |
| OAuth (Google, LINE, …) | วางแผน — อนาคต |
| Backend API | วางแผนอยู่ |

### เทคโนโลยีที่ใช้

| ส่วน     | เทคโนโลยี |
|----------|-----------|
| Frontend | [Vite](https://vite.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Tailwind CSS](https://tailwindcss.com/) |
| Routing  | [React Router](https://reactrouter.com/) |
| i18n     | [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/) |
| Backend  | [Go](https://go.dev/) (Golang) — กำลังพัฒนา |

### โครงสร้างโปรเจค

```
track-daily-money/
├── Frontend/
│   └── tracking-dayily-money-fe/
│       ├── public/                 # ไฟล์ static (favicon, icons)
│       └── src/
│           ├── assets/             # รูปภาพและ asset ที่ bundle
│           ├── components/         # UI ส่วนกลาง (layout, Button, Card, …)
│           ├── locales/            # ไฟล์แปลภาษากลาง (en, th)
│           ├── pages/              # แต่ละ page เป็น module แยกโฟลเดอร์
│           │   ├── home/
│           │   ├── transactions/
│           │   ├── slip-scan/
│           │   └── settings/
│           ├── routes/             # การกำหนด route
│           ├── services/           # API client และ data services
│           └── types/              # TypeScript types ส่วนกลาง
├── Backend/                        # Go API (กำลังพัฒนา)
└── README.md
```

### หน้า Frontend (v0.2)

| Route | หน้า | คำอธิบาย |
|-------|------|----------|
| `/` | ภาพรวม | การ์ดสรุป รายการล่าสุด และทางลัด |
| `/transactions` | รายการ | ฟอร์มบันทึกด้วยตนเองและรายการทั้งหมด |
| `/slip-scan` | สแกนสลิป | โซนอัปโหลดและตัวอย่างผลลัพธ์ |
| `/settings` | ตั้งค่า | การแจ้งเตือน LINE และสลับภาษา |

### แผน v0.3

| ส่วน | ขอบเขต |
|------|--------|
| **Auth** | Login ด้วย email/username + password, สมัครสมาชิก, JWT/session, protected routes; ออกแบบรองรับ OAuth |
| **ตั้งค่า** | เปลี่ยนสกุลเงิน |
| **รายการ** | เลือกวันที่ (วันนี้ / ย้อนหลัง / วันที่เลือก — ห้ามอนาคต), tag, CRUD ครบ |
| **มุมมอง** | ตาราง calendar และ record (รายการ) สลับได้ |
| **สรุป** | ยอดรวมรายวันแสดงทั้งสองมุมมอง |
| **อนาคต** | OAuth 2.0 social login (ออกแบบให้เพิ่ม provider ได้) |

```
Login flow (v0.3)
  ผู้ใช้ → หน้า Login → Backend auth API → เก็บ token → เข้าหน้าใช้งาน

Entry flow (v0.3)
  ผู้ใช้ → เลือกวันที่ (≤ วันนี้) → เพิ่ม/แก้ไขรายการ + tag → บันทึก
  ผู้ใช้ → สลับมุมมองตาราง / record → ดูสรุปรายวัน

OAuth flow (อนาคต)
  ผู้ใช้ → OAuth provider → Callback → เชื่อมหรือสร้างบัญชี → เข้าหน้าใช้งาน
```

### การรองรับหลายภาษา (i18n)

ไฟล์แปลภาษาอยู่ที่โฟลเดอร์กลาง:

```
src/locales/
├── en/    # อังกฤษ
├── th/    # ไทย
├── index.ts
├── hooks.ts
└── utils.ts
```

รองรับ **อังกฤษ** (`en`) และ **ไทย** (`th`) ระบบตรวจจับภาษาจาก browser/localStorage และสลับได้จาก header หรือหน้าตั้งค่า

### การเริ่มต้นใช้งาน

#### ความต้องการของระบบ

- Node.js **20.19+** หรือ **22.12+** (จำเป็นสำหรับ Vite 8)

#### Frontend

```bash
cd Frontend/tracking-dayily-money-fe
npm install
npm run dev
```

| คำสั่ง             | คำอธิบาย                    |
|--------------------|-----------------------------|
| `npm run dev`      | รัน dev server              |
| `npm run build`    | build สำหรับ production     |
| `npm run preview`  | preview build ที่สร้างแล้ว  |
| `npm run lint`     | ตรวจสอบ code ด้วย ESLint    |

ตัวแปร environment (ไม่บังคับ):

| ตัวแปร | คำอธิบาย |
|--------|----------|
| `VITE_API_BASE_URL` | URL ฐานของ Backend API (ค่าเริ่มต้น: `http://localhost:8080/api`) |

#### Backend

Backend ใช้ Golang — รายละเอียดการติดตั้งและรันเซิร์ฟเวอร์จะเพิ่มในเอกสารนี้เมื่อพร้อมใช้งาน

### License

ยังไม่ได้กำหนด — จะอัปเดตในภายหลัง
