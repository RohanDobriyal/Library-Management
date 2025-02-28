<div align="left">
  <br />
      <img src="https://github.com/user-attachments/assets/7cff0964-6c02-4af5-aa0c-964b349cc9aa" alt="Project Banner">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logoColor=white&logo=postgresql&color=4169E1" alt="postgresql" />
    <img src="https://img.shields.io/badge/-Upstash-black?style=for-the-badge&logoColor=white&logo=upstash&color=00E9A3" alt="upstash" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">A University Library Management System with Admin Panel</h3>

  

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)
6. 🔗 [Assets](#links)
7. 🚀 [More](#more)

## 🚨 Tutorial

## <a name="introduction">🤖 Introduction</a>

Built with Next.js, TypeScript, and Postgres, the University Library Management System is a production-grade platform featuring a public-facing app and an admin interface. It offers advanced functionalities like seamless book borrowing with reminders and receipts, robust user management, automated workflows, and a modern, optimized tech stack for real-world scalability.




## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- PostgreSQL
- Upstash
- ImageKit
- TypeScript
- Resend
- Tailwind CSS

## <a name="features">🔋 Features</a>

### Features of the University Library Management System Project

👉 **Open-source Authentication**: Personalized onboarding flow with email notifications.  

👉 **Home Page**: Highlighted books and newly added books with 3D effects.  

👉 **Library Page**: Advanced filtering, search, and pagination for book discovery.  

👉 **Book Detail Pages**: Availability tracking, book summaries, videos, and suggestions for similar books.  

👉 **Profile Page**: Manage accounts, track borrowed books, and download receipts.  

👉 **Onboarding Workflows**: Automated welcome emails when users sign up, with follow-ups based on inactivity or activity dates.  

👉 **Borrow Book Reminder**: Customized email notifications sent before, on, and after the due date, reminding users to return books or avoid charges. 

👉 **Borrow Book Receipt**: Automatically generates a customized PDF receipt when a book is successfully borrowed.  

👉 **Analytics Dashboard**: Statistics, new users, books, borrow requests, and more.  

👉 **All Users Page**: View and manage users, including approving or revoking access.  

👉 **Account Requests Page**: Admin approval for account requests, with email notifications for user verification.  

👉 **All Books Page**: List and manage all library books with advanced search, pagination, and filters. 

👉 **Book Management Forms**: Add new books and edit existing entries.  

👉 **Book Details Page**: Detailed book information for administrators.  

👉 **Borrow Records Page**: Complete borrow history with pagination and search.  

👉 **Role Management**: Change user roles to invite more admins, with email notifications sent upon role updates. 

👉 **Advanced Functionalities**: Caching, rate-limiting, DDoS protection, and custom notifications.  

👉 **Database Management**: Postgres with Neon for scalable and collaborative database handling.  

👉 **Real-time Media Processing**: ImageKit for image and video optimization and transformations. 

👉 **Efficient Caching**: Upstash Redis for caching, workflows, and triggers.  

👉 **Database ORM**: Drizzle ORM for simplified and efficient database interactions.  

👉 **Modern UI/UX**: Built with TailwindCSS, ShadCN, and other cutting-edge tools.  

👉 **Technology Stack**: Next.js with TypeScript for scalable development, and NextAuth for robust authentication.  

👉 **Seamless Email Handling**: Resend for automated email communications, including notifications and updates.  

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone (https://github.com/RohanDobriyal/Library-Management)
cd Library-Management
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=

NEXT_PUBLIC_API_ENDPOINT=
NEXT_PUBLIC_PROD_API_ENDPOINT=

DATABASE_URL=

UPSTASH_REDIS_URL=
UPSTASH_REDIS_TOKEN=

AUTH_SECRET=

# Required for workflow
![Screenshot 2025-02-27 213923](https://github.com/user-attachments/assets/f2d41022-1679-4664-a581-895efe9187d9)

QSTASH_URL=
QSTASH_TOKEN=

# RESEND_TOKEN=
RESEND_TOKEN=
![Screenshot 2025-02-28 131231](https://github.com/user-attachments/assets/5df340f6-b842-4fed-b782-fc40d15aaf60)

```
Sign-Up Page – This is the registration page where new users can sign up for the library system. It likely includes fields such as name, email, password, and possibly role selection.

![image](https://github.com/user-attachments/assets/2536ad72-cac4-4318-8d89-fd1bb56a9d06)


Book Booking Section – This section allows users to browse and reserve books. Users can search for books, view their details, and book them for borrowing.

![Screenshot 2025-02-27 213923](https://github.com/user-attachments/assets/0031a557-2f45-480f-9fd3-d4f5dec7601e)



Admin Panel – The admin dashboard provides functionality to manage books and users. Admins can add new books, delete existing ones, and manage user permissions.

![Screenshot 2025-02-27 213923](https://github.com/user-attachments/assets/f2d41022-1679-4664-a581-895efe9187d9)


Drizzle Studio Panel – This panel displays database tables such as:

Books: A list of available books in the system.
Users: A record of registered users.
Borrow Records: Details of books borrowed by users, including timestamps.

![image](https://github.com/user-attachments/assets/41cf6089-9489-4765-a01a-547e41a55ce0)


User Admin Permissions – A section where an admin can grant administrative permissions to other users, allowing them to manage books and users.

![image](https://github.com/user-attachments/assets/09670666-cb25-4580-8b8c-8f9d30360e18)


Replace the placeholder values with your actual ImageKit, NeonDB, Upstash, and Resend credentials. You can obtain these credentials by signing up on the [ImageKit](https://bit.ly/49zmXkt), [NeonDB](https://fyi.neon.tech/1jsm), [Upstash](https://upstash.com/?utm_source=jsmastery1), and [Resend](https://resend.com/). 

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
Deployment on Vercel

The project is hosted on Vercel, allowing for continuous integration and smooth deployment. Key benefits of using Vercel:(https://library-management-ocz3.vercel.app/sign-in)

Fast and reliable hosting.

Automatic deployments from GitHub.

Scalable infrastructure to handle user traffic.
