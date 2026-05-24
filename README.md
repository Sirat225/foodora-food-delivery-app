# Foodora Backend API

A complete Node.js/Express backend for a food delivery application with MongoDB.

## Features

- **User Authentication**: JWT-based auth with role-based access control
- **Restaurant Management**: CRUD operations for restaurants and menus
- **Order Management**: Complete order lifecycle from creation to delivery
- **User Roles**: Customer, Restaurant Owner, Delivery Driver, Admin
- **Security**: Helmet, CORS, rate limiting, input validation
- **Database**: MongoDB with Mongoose ODM

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   - Copy `.env` and update MongoDB URI and JWT secret
   - Make sure MongoDB is running

3. **Start the server**:
   ```bash
   npm run dev  # Development with nodemon
   npm start    # Production
   ```

## API Endpoints

### Authentication (`/api/auth`)
- `POST /register` - Register new user
- `POST /login` - User login
- `GET /profile` - Get user profile
- `PUT /profile` - Update profile
- `PUT /change-password` - Change password

### Restaurants (`/api/restaurants`)
- `GET /` - Get all restaurants (with filters)
- `GET /:id` - Get restaurant by ID
- `POST /` - Create restaurant (owner only)
- `PUT /:id` - Update restaurant (owner only)
- `DELETE /:id` - Delete restaurant (owner only)
- `GET /:id/menu` - Get restaurant menu

### Menu Items (`/api/menu`)
- `GET /restaurant/:restaurantId` - Get menu for restaurant
- `GET /:id` - Get menu item by ID
- `POST /` - Create menu item (owner only)
- `PUT /:id` - Update menu item (owner only)
- `DELETE /:id` - Delete menu item (owner only)
- `PATCH /:id/availability` - Toggle availability

### Orders (`/api/orders`)
- `POST /` - Create new order
- `GET /my-orders` - Get user's orders
- `GET /:id` - Get order by ID
- `PATCH /:id/status` - Update order status
- `GET /restaurant/:restaurantId` - Get restaurant orders
- `PATCH /:id/cancel` - Cancel order

### Users (`/api/users`) - Admin only
- `GET /` - Get all users
- `GET /:id` - Get user by ID
- `PATCH /:id/role` - Update user role
- `PATCH /:id/status` - Activate/deactivate user

## Database Models

- **User**: Authentication and profile data
- **Restaurant**: Restaurant information and settings
- **MenuItem**: Menu items with pricing and availability
- **Order**: Complete order data with status tracking

## Security Features

- JWT authentication with role-based access
- Password hashing with bcrypt
- Input validation and sanitization
- Rate limiting
- CORS protection
- Helmet security headers

Server runs on port 5000 by default. Health check available at `/api/health`.