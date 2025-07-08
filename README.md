# 🛒 E-commerce Platform

A feature-rich e-commerce web application built with **Angular** and **ASP.NET Core (ABP Framework)**. This project supports both **admin** and **customer** roles with secure login, product and order management, image upload, cart operations, and detailed order tracking.

---

## 📸 Project Preview

### 🔐 Login / Signup
![Login Page](https://github.com/shadr862/Ecommerce/blob/main/images/login.png)
![Signup Page](https://github.com/shadr862/Ecommerce/blob/main/images/signup.png)

### 🏠 Dashboard & Navigation
![Dashboard](https://github.com/shadr862/Ecommerce/blob/main/images/dashboard.png)
![Sidebar](https://github.com/shadr862/Ecommerce/blob/main/images/sidebar.png)

### 🛍️ Product Management
- Add Product (with Image Upload)
- Edit / Delete Product
![Product List](https://github.com/shadr862/Ecommerce/blob/main/images/product-list.png)
![Add Product](https://github.com/shadr862/Ecommerce/blob/main/images/add-product.png)
![Edit Product](https://github.com/shadr862/Ecommerce/blob/main/images/edit-product.png)

### 📦 Order Management
- Customer Order View
- Admin Confirmed Orders
- Order Detail View
![Order Placement](https://github.com/shadr862/Ecommerce/blob/main/images/order-placement.png)
![Order Detail](https://github.com/shadr862/Ecommerce/blob/main/images/order-detail.png)
![Confirmed Orders](https://github.com/shadr862/Ecommerce/blob/main/images/confirmed-orders.png)

### 👤 User Profile & List
- Customer Profile
- Admin User List
![User Profile](https://github.com/shadr862/Ecommerce/blob/main/images/user-profile.png)
![User List](https://github.com/shadr862/Ecommerce/blob/main/images/user-list.png)

---

## 🚀 Features

### 👤 Customer Panel

- Browse products by categories (e.g., beauty, groceries, furniture, clothing)
- Add products to cart
- Place orders with real-time status
- View past orders and order details
- View product reviews and ratings

### 🛠️ Admin Panel

- Add, update, and delete products (with image upload)
- Manage user list and permissions
- Confirm or update orders (edit, view detail)
- View product inventory and sales status

### 📦 Order Management

- View all confirmed orders
- Admin can update order status and shipping address
- View individual order details
- Filter orders by status (Confirmed, Pending, etc.)

### 🔐 Authentication

- Role-based login (Admin & Customer)
- JWT token-based secured endpoints
- Guards for protected Angular routes

---

## 📂 Project Structure

```bash
Ecommerce/
├── api/               # ASP.NET Core backend (ABP Framework)
│   ├── Controllers/
│   ├── Products/
│   └── Orders/
├── angular/           # Angular frontend
│   ├── products/
│   ├── orders/
│   └── auth/
