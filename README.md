# track-daily-money

**Version:** 0.1

---

## English

A web application for recording and tracking daily spending. It helps you see an overview of income, expenses, savings, and spending habits each day.

### Overview

The system is designed to make daily financial logging easy — whether you enter transactions manually or pull data automatically from transfer slips. LINE notifications help you stay on top of spending and usage alerts.

### Key Features (v0.1)

- **Daily entries** — Record income, expenses, and savings for each day
- **Slip scanning** — Upload or scan transfer slips; the system reads and logs transactions automatically
- **LINE notifications** — Configure alerts for usage and spending behavior

### Tech Stack

| Layer    | Technology |
|----------|------------|
| Frontend | [Vite](https://vite.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Backend  | [Go](https://go.dev/) (Golang) |

### Project Structure

```
track-daily-money/
├── Frontend/
│   └── tracking-dayily-money-fe/   # React + Vite + TypeScript
├── Backend/                        # Go API (in development)
└── README.md
```

### Getting Started

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

#### Backend

The backend uses Golang. Setup and run instructions will be added here when the API is ready.

### Development Status

The project is in early development (v0.1). The frontend scaffold is in place. The backend and core features (slip scanning, LINE notifications) are planned.

### License

Not specified yet — to be updated later.

---

## ภาษาไทย

เว็บแอปพลิเคชันสำหรับบันทึกและติดตามการใช้เงินรายวัน ช่วยให้เห็นภาพรวมรายรับ–รายจ่าย การออม และพฤติกรรมการใช้จ่ายในแต่ละวัน

### ภาพรวมระบบ

ระบบออกแบบมาเพื่อให้ผู้ใช้ลงบันทึกการเงินประจำวันได้สะดวก ทั้งการบันทึกด้วยตนเองและการดึงข้อมูลจากสลิปโอนเงินโดยอัตโนมัติ พร้อมการแจ้งเตือนผ่าน LINE เพื่อช่วยควบคุมและติดตามการใช้จ่าย

### ฟีเจอร์หลัก (v0.1)

- **บันทึกรายการรายวัน** — ลงบันทึกรายรับ รายจ่าย และการออมในแต่ละวัน
- **สแกนสลิป** — อัปโหลดหรือสแกนสลิปโอนเงิน แล้วให้ระบบอ่านและบันทึกรายการให้อัตโนมัติ
- **แจ้งเตือนผ่าน LINE** — ตั้งค่าการแจ้งเตือนเกี่ยวกับการใช้งานหรือพฤติกรรมการใช้จ่ายได้

### เทคโนโลยีที่ใช้

| ส่วน     | เทคโนโลยี |
|----------|-----------|
| Frontend | [Vite](https://vite.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Backend  | [Go](https://go.dev/) (Golang) |

### โครงสร้างโปรเจค

```
track-daily-money/
├── Frontend/
│   └── tracking-dayily-money-fe/   # React + Vite + TypeScript
├── Backend/                        # Go API (กำลังพัฒนา)
└── README.md
```

### การเริ่มต้นใช้งาน

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

#### Backend

Backend ใช้ Golang — รายละเอียดการติดตั้งและรันเซิร์ฟเวอร์จะเพิ่มในเอกสารนี้เมื่อพร้อมใช้งาน

### สถานะการพัฒนา

โปรเจคอยู่ในช่วงเริ่มต้น (v0.1) โครงสร้าง frontend พร้อมแล้ว ส่วน backend และฟีเจอร์หลัก (สแกนสลิป, การแจ้งเตือน LINE) กำลังอยู่ในแผนการพัฒนา

### License

ยังไม่ได้กำหนด — จะอัปเดตในภายหลัง
