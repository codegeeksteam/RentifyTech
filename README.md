# Rentechify - Electrical Gadget Rental Platform

[![Live Demo](https://img.shields.io/badge/Live_Demo-Rentechify-blue?style=for-the-badge&logo=firebase)](https://rentechify.web.app/)  
[![GitHub license](https://img.shields.io/github/license/yourusername/rentechify)](https://github.com/yourusername/rentechify/blob/main/LICENSE)

![Rentechify Banner](docs/banner.png) 

An online platform where users can rent electrical gadgets by the hour or purchase products. Features multi-role authentication (Admin, Agent, Customer), secure payments, and a realtime AI chatbot for customer support.

## Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [API Endpoints](#-api-endpoints)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## 🚀 Features

### User Roles
- **Admin**: Full system control (users, products, orders)
- **Agent**: Manage products and rentals
- **Customer**: Browse, rent, and purchase gadgets

### Core Functionality
- 🔍 Product catalog with filters
- ⏳ Hourly rental system
- 💳 Integrated payment gateway
- 🤖 Realtime AI chatbot
- 📊 Analytics dashboard
- 📱 Fully responsive UI

### Advanced Features
- Real-time inventory updates
- Rental history tracking
- Multi-factor authentication
- Email notifications

## 🛠️ Tech Stack

| Component       | Technology                          |
|-----------------|-------------------------------------|
| Frontend        | React, Tailwind CSS, Redux Toolkit  |
| Backend         | Node.js, Express.js                 |
| Database        | MongoDB (Mongoose ODM)              |
| Authentication  | Firebase Authentication             |
| Realtime        | Firebase Firestore                  |
| Payments        | Stripe API                          |
| Chatbot         | Dialogflow + Firebase Functions     |
| Hosting         | Firebase Hosting (Frontend)         |
| Backend Hosting | Render/Heroku                       |

## 📸 Screenshots

| ![Homepage](docs/screenshots/home.png) | ![Product Page](docs/screenshots/product.png) |
|---------------------------------------|----------------------------------------------|
| ![Dashboard](docs/screenshots/dashboard.png) | ![Chatbot](docs/screenshots/chatbot.png) |

## 🛠️ Installation

### Prerequisites
- Node.js v16+
- MongoDB Atlas account
- Firebase project
- Stripe account

### Setup Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/rentechify.git
   cd rentechify