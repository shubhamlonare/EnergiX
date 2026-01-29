# Electricity Management System (EMS)

## 1. Project Overview

\*\*Project Name:\*\*EnergiX – Electricity Management System\
**Domain:** Energy / Utility Management\
**Application Type:** Web Application (SaaS-style)

The Electricity Management System (EMS) is a web-based application designed to manage electricity consumers, meter readings, billing, and payments efficiently. The system provides separate dashboards for administrators (Electricity Board) and consumers, enabling transparent monitoring of electricity usage, automated bill generation, and online payment handling.

The project is built using **Next.js** for both frontend and backend (API routes), making it scalable, performant, and production-ready.

---

## 2. Goals & Objectives

- Digitize electricity billing and monitoring
- Reduce manual errors in bill calculation
- Provide real-time consumption insights
- Enable online bill payments
- Offer admin-level analytics and reporting

---

## 3. User Roles

### 3.1 Admin (Electricity Board)

- Manage consumers
- Assign meters
- Upload meter readings
- Generate monthly bills
- Track payments and revenue
- View analytics reports

### 3.2 Consumer (User)

- View electricity consumption
- Download monthly bills
- Pay bills online
- View payment history
- Manage profile

---

## 4. Functional Requirements

### 4.1 Authentication & Authorization

- User registration & login
- Role-based access control (Admin / Consumer)
- Secure authentication using Auth.js (NextAuth)

---

### 4.2 Admin Module

#### Consumer Management

- Add, update, delete consumers
- Assign unique consumer ID

#### Meter Management

- Register electricity meters
- Assign meter to consumer

#### Meter Reading Management

- Upload monthly readings
- Validate readings
- Prevent duplicate entries

#### Billing Management

- Auto-calculate bill based on units consumed
- Apply tariff rules
- Generate monthly bills
- Export bills as PDF

#### Payment Tracking

- View paid / unpaid bills
- Track transaction history

#### Reports & Analytics

- Monthly revenue reports
- Consumption analytics (charts)
- Outstanding payments list

---

### 4.3 Consumer Module

#### Dashboard

- Monthly consumption overview
- Current bill status

#### Bill Management

- View bill details
- Download PDF bill

#### Payments

- Pay bill using Razorpay / Stripe
- View payment history

#### Profile

- Update personal information
- Change password

---

## 5. Non-Functional Requirements

- Responsive design (mobile, tablet, desktop)
- Secure data handling
- Fast page load (SSR & caching)
- Scalable architecture
- Clean UI/UX

---

## 6. Technology Stack

### Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS / MUI
- Recharts / Chart.js

### Authentication

- Auth.js (NextAuth)

### Payments

- Razorpay 

### Deployment

- Vercel (Frontend)
- AWS 

---

## 7. System Architecture

- Client (Browser)
- Next.js Frontend (SSR/CSR)
- API Routes (Backend)
- Database (Prisma + SQL)
- Payment Gateway

---

