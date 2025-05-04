# ⚡ Rentechify - On-Demand Gadget Rentals

[![Live Demo](https://img.shields.io/badge/LIVE-DEMO-brightgreen?style=for-the-badge)](https://rentechify.web.app)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-LIVE-success?style=for-the-badge)

![Rentechify Dashboard](/public/rentechify-showcase.png)

A premium platform for renting high-end electronics by the hour with AI-powered support.

## ✨ Live Demo

➡️ **[https://rentechify.web.app](https://rentechify.web.app)** ⬅️

## 🌟 Key Features

### 🎯 Core Functionality
- **Smart Booking System** - Reserve gadgets in 15-minute increments
- **Multi-User Ecosystem** - Separate interfaces for Admins, Agents, and Renters
- **Live Damage Detection** - AI-assisted equipment condition verification

### 🛠️ Rental Management
| Feature          | Details                          |
|------------------|----------------------------------|
| Dynamic Pricing  | Automatic surge pricing          |
| Fleet Tracking   | Real-time gadget GPS tracking    |
| Auto Maintenance | Predictive servicing alerts      |
| Insurance Plans  | Custom protection packages       |

### 🤖 AI Assistant
- **Instant Rent Calculations**
- **Equipment Tutorials** (voice/video)
- **Multilingual Support** (8 languages)
- **24/7 Issue Resolution**

## 🛠️ Technical Details

### Tech Stack
```mermaid
pie
    title Tech Stack
    "React.js" : 40
    "Node.js" : 25
    "Firebase" : 20
    "MongoDB" : 10
    "TensorFlow.js" : 5 


sequenceDiagram
    User->>Frontend: Browse Gadgets
    Frontend->>Backend: API Request
    Backend->>MongoDB: Check Availability
    Backend->>Firebase: Verify User
    Backend->>Stripe: Process Payment
    Frontend->>User: Booking Confirmation
```