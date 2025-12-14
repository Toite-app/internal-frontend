# Toite - Restaurant Management System

> **Purpose of this document:** This file contains complete information about the Toite backend system. Use this to understand the project structure, modules, user roles, and workflows when creating customer-facing documentation.

---

## Project Summary

**Toite** is a modern restaurant management platform that helps restaurant owners and staff manage their daily operations. The system handles everything from taking orders to tracking employee shifts and managing menus.

**Live Demo:** https://demo.toite.ee  
**API Documentation:** https://demo.toite.ee/api/docs  
**Demo Credentials:** Username: `admin` | Password: `123456`

---

## User Roles & Permissions

The system uses role-based access control with the following hierarchy:

| Role             | Access Level    | Description                                               |
| ---------------- | --------------- | --------------------------------------------------------- |
| **System Admin** | Full            | Platform administrator - manages entire system            |
| **Chief Admin**  | High            | Manages multiple restaurants and owners                   |
| **Owner**        | Restaurant-wide | Controls their own restaurant(s) - settings, staff, menus |
| **Admin**        | Restaurant-wide | Day-to-day management of assigned restaurant              |
| **Cashier**      | Limited         | Handles payments and order completion                     |
| **Dispatcher**   | Limited         | Manages incoming orders and assignments                   |
| **Kitchener**    | Limited         | Views and processes kitchen orders                        |
| **Waiter**       | Limited         | Takes orders and serves customers                         |
| **Courier**      | Limited         | Handles delivery orders                                   |

---

## Core Modules

### 1. Restaurant Management

The central hub where owners configure their restaurant settings.

**Features:**

- Restaurant profile (name, address, logo)
- Currency and timezone settings
- Operating hours (per day of week)
- Enable/disable restaurant
- Permanent closure option

**Sub-modules:**

- **Workshops (Kitchen Stations):** Organize kitchen into stations (grill, salads, bar, pastry). Assign specific staff to each station.
- **Dish Modifiers:** Restaurant-specific customization options (e.g., "extra spicy", "no onions")
- **Workshift Payment Categories:** Types of cash movements (tips, supplies, deposits)

---

### 2. Menu System

Comprehensive menu management with flexible structure.

**Hierarchy:**

```
Restaurant
└── Menus (Lunch, Dinner, Weekend)
    └── Categories (Appetizers, Main Courses, Desserts, Drinks)
        └── Dishes (Individual items)
            └── Modifiers (Customization options)
```

**Features:**

- **Menus:** Create multiple menus (lunch, dinner, seasonal specials)
- **Categories:** Organize dishes into logical groups
- **Dishes:**
  - Name, description
  - Base price
  - Images (uploaded to cloud storage)
  - Preparation notes for kitchen
- **Price Lists:** Override prices for specific menus
- **Dish Modifiers:** Add-ons and customizations with additional pricing

---

### 3. Order Management

The core operational module handling the complete order lifecycle.

**Order Types:**

| Type         | Use Case          | Required Information          |
| ------------ | ----------------- | ----------------------------- |
| **Hall**     | Dine-in customers | Table number, restaurant      |
| **Takeaway** | Customer picks up | Guest phone                   |
| **Delivery** | Sent to address   | Guest phone, delivery address |
| **Banquet**  | Large group/event | Table, phone, guest count     |

**Order Statuses:**

```
Pending → Cooking → Ready → Paid → Completed
                              ↓
                          Cancelled
```

| Status      | Meaning                               |
| ----------- | ------------------------------------- |
| `pending`   | Order created, waiting to be prepared |
| `cooking`   | Kitchen is preparing the order        |
| `ready`     | Food is ready for pickup/serving      |
| `paid`      | Customer has paid                     |
| `completed` | Order fully finished                  |
| `cancelled` | Order was cancelled                   |

**Order Features:**

- Add/remove dishes with quantities
- Dish modifiers (customizations)
- Guest information (name, phone)
- Order notes (special instructions)
- Delayed orders (schedule for later)
- Table number assignment
- Payment method selection
- Discount application
- Prechecks (bill previews/splits)
- Full order history (who changed what, when)
- Dish returnments (tracking returned items)

**Specialized Views:**

1. **Dispatcher View:**

   - See all orders in real-time
   - Create and manage orders
   - Track order statuses
   - Assign orders to staff

2. **Kitchen View:**
   - See only dishes to prepare
   - Mark dishes as cooking/ready
   - Filter by workshop (station)
   - Prioritize by time

---

### 4. Guest Management

Customer relationship tracking.

**Features:**

- Guest profiles (name, phone)
- Automatic recognition by phone number
- Order history per guest
- Link orders to guest records

**Benefits:**

- Recognize returning customers
- View customer preferences
- Build loyalty relationships

---

### 5. Staff/Worker Management

Employee lifecycle and access management.

**Features:**

- Create staff accounts with login credentials
- Assign roles (determines permissions)
- Assign to specific restaurants
- Block/unblock access
- Track online status
- Record hire/fire dates

**Staff Assignment:**

- Workers can be assigned to multiple restaurants
- Access limited to assigned restaurants only
- Owners see only their restaurants

---

### 6. Workshift Management

Track daily working sessions and financial flow.

**Workshift Lifecycle:**

```
Open Shift (Morning) → Track Operations → Close Shift (Evening)
```

**Features:**

- Open/close shifts with timestamps
- Track who opened/closed
- Navigation between shifts (previous/next)
- Per-restaurant shifts

**Workshift Payments:**
Track all money movements during a shift:

- Cash received from orders
- Card payments
- Cash deposits (adding change)
- Cash withdrawals (for supplies)
- Tips
- Custom categories

**End of Shift:**

- View total sales
- Compare expected vs actual cash
- Identify discrepancies

---

### 7. Discount System

Promotional and loyalty discount management.

**Features:**

- Create percentage discounts (e.g., 10% off)
- Create fixed amount discounts (e.g., €5 off)
- Activate/deactivate discounts
- Apply discounts to orders

**Use Cases:**

- Happy hour specials
- Loyalty rewards
- Promotional campaigns
- Employee discounts

---

### 8. Payment Methods

Configure accepted payment options per restaurant.

**Examples:**

- Cash
- Credit Card
- Debit Card
- Mobile Payment (Apple Pay, Google Pay)
- Gift Cards
- Restaurant credit

**Features:**

- Enable/disable payment methods
- Restaurant-specific configuration
- Link to orders

---

### 9. Address Management

Handle delivery addresses with external integrations.

**Features:**

- Address lookup via Google Maps
- Address validation via DaData
- Store delivery addresses
- Link addresses to orders

---

### 10. Timezone Management

Support for restaurants in different timezones.

**Features:**

- List available timezones
- Set restaurant timezone
- Proper time display based on location

---

## Real-Time Features

The system provides live updates across all connected users:

- **New orders** appear instantly in kitchen and dispatcher views
- **Status changes** (cooking, ready) notify relevant staff
- **Multiple users** can work on the same order without conflicts
- **Online presence** tracking shows who's currently active

---

## Module Connections

### How Modules Interact:

```
┌─────────────────────────────────────────────────────────────────┐
│                         RESTAURANT                               │
│                    (Central Configuration)                       │
└───────────────────────────┬─────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│     MENU      │   │    STAFF      │   │  WORKSHIFTS   │
│               │   │               │   │               │
│ • Dishes      │   │ • Roles       │   │ • Open/Close  │
│ • Categories  │   │ • Assignment  │   │ • Payments    │
│ • Prices      │   │ • Access      │   │ • Tracking    │
│ • Modifiers   │   │               │   │               │
└───────┬───────┘   └───────┬───────┘   └───────┬───────┘
        │                   │                   │
        └─────────┬─────────┴─────────┬─────────┘
                  │                   │
                  ▼                   ▼
          ┌───────────────┐   ┌───────────────┐
          │    ORDERS     │◄──│    GUESTS     │
          │               │   │               │
          │ • Items       │   │ • Profile     │
          │ • Status      │   │ • Phone       │
          │ • History     │   │ • History     │
          └───────┬───────┘   └───────────────┘
                  │
        ┌─────────┴─────────┐
        │                   │
        ▼                   ▼
┌───────────────┐   ┌───────────────┐
│   DISCOUNTS   │   │   PAYMENTS    │
│               │   │               │
│ • Percentage  │   │ • Cash        │
│ • Fixed       │   │ • Card        │
│ • Active      │   │ • Other       │
└───────────────┘   └───────────────┘
```

### Data Flow Example - Customer Order:

```
1. Customer calls → Staff recognizes GUEST by phone
                                    ↓
2. Staff creates ORDER → Selects DISHES from MENU
                                    ↓
3. Order sent to kitchen → WORKSHOP stations see their items
                                    ↓
4. Kitchen marks ready → DISPATCHER notified
                                    ↓
5. Customer pays → PAYMENT METHOD recorded
                                    ↓
6. WORKSHIFT tracks → Sales and payments logged
                                    ↓
7. Order completed → HISTORY preserved
```

---

## Key Workflows

### Opening a Restaurant Day:

1. Manager opens new **Workshift**
2. Records starting cash amount
3. Verifies **Menu** is correct
4. Checks **Staff** assignments
5. Ready for orders

### Processing an Order:

1. **Dispatcher/Waiter** creates order
2. Selects order type (hall/delivery/takeaway)
3. Adds dishes from menu
4. Applies any discounts
5. Order appears in **Kitchen**
6. Kitchen marks items as cooking → ready
7. **Cashier** processes payment
8. Order marked complete

### Closing a Restaurant Day:

1. Manager reviews all orders in **Workshift**
2. Counts actual cash
3. Compares to expected amount
4. Records any discrepancies
5. Closes **Workshift**
6. System preserves complete record

---

## Technical Highlights

### For Customer Dashboard Context:

- **Real-time updates:** All changes appear instantly
- **Multi-device:** Works on desktop and tablet
- **Offline-resilient:** Handles connection drops gracefully
- **Multi-language:** Interface available in multiple languages
- **Secure:** Role-based access, session management
- **Audit trail:** Complete history of all actions

### API Structure:

Main endpoint groups:

- `/auth` - Login, logout, session management
- `/restaurants` - Restaurant configuration
- `/workers` - Staff management
- `/orders` - Order operations
- `/dishes` - Menu items
- `/dishes-menus` - Menu management
- `/dish-categories` - Category management
- `/guests` - Customer management
- `/workshifts` - Shift operations
- `/discounts` - Discount management
- `/payment-methods` - Payment configuration

---

## Summary for Frontend

When building customer-facing documentation, focus on:

1. **What Toite does:** Complete restaurant management - orders, menus, staff, payments
2. **Who uses it:** Restaurant owners, managers, kitchen staff, waiters, cashiers
3. **Key benefits:**
   - Real-time order tracking
   - Easy menu management
   - Staff coordination
   - Financial tracking per shift
   - Customer relationship building
4. **Core workflow:** Restaurant setup → Menu creation → Order processing → Shift tracking

**Target audience for dashboard:**

- Restaurant owners evaluating the platform
- New users learning the system
- Existing users exploring features

**Tone:** Professional but approachable, focus on business benefits rather than technical details.
