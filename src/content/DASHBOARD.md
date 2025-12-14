# Welcome to Toite

**Toite** is a comprehensive restaurant management platform designed to streamline your daily operations. From order management to financial tracking, Toite provides everything you need to run your restaurant efficiently.

---

## Quick Navigation

| Module          | Description                                            | Access              |
| --------------- | ------------------------------------------------------ | ------------------- |
| **Orders**      | Manage incoming orders, track status, process payments | Dispatcher, Kitchen |
| **Workshifts**  | Track daily operations, revenues, and expenses         | Managers            |
| **Restaurants** | Configure restaurant settings, staff, and menus        | Owners, Admins      |
| **Dishes**      | Manage menu items with categories and modifiers        | Admins              |
| **Discounts**   | Create and manage promotional offers                   | Admins              |
| **Workers**     | Manage staff accounts and permissions                  | Owners, Admins      |
| **Guests**      | Track customer information and order history           | All Staff           |

---

## Core Modules

### Orders Management

The heart of daily operations. Orders flow through a clear lifecycle:

**Order Types:**

- **Hall** - Dine-in customers with table assignments
- **Takeaway** - Customer picks up their order
- **Delivery** - Orders sent to customer addresses
- **Banquet** - Large group events and celebrations

**Dispatcher View:**
Access all incoming orders in a real-time card-based layout. Each order card displays:

- Order number and type
- Restaurant name
- Guest count and order time
- Total amount
- Quick status indicators (items pending, cooking, ready)
- Guest contact information

**Kitchen View:**
See dishes to prepare organized by priority. Mark items as cooking or ready. Filter by kitchen station (workshop) for efficient preparation.

---

### Workshift Management

Track daily financial operations with complete transparency.

**Opening a Shift:**

1. Start a new workshift at the beginning of the day
2. Record opening cash amount
3. System tracks all transactions automatically

**During the Shift:**

- **Revenues**: Table sales, online orders, gift card sales, bank transfers
- **Expenses**: Vendor payments, supplies, utilities, staff meals
- **Cashless**: Delivery platforms, mobile apps, corporate accounts

**Closing a Shift:**

1. Review all orders and transactions
2. Compare expected vs actual cash
3. Record any discrepancies
4. Close the shift with complete audit trail

---

### Restaurant Configuration

Each restaurant has comprehensive settings organized in tabs:

| Tab                 | Purpose                                                 |
| ------------------- | ------------------------------------------------------- |
| **Working Hours**   | Set opening and closing times for each day              |
| **Departments**     | Define kitchen stations (Hot Kitchen, Bar, Grill, etc.) |
| **Handbook**        | Configure revenue and expense categories                |
| **Staff**           | Assign workers to this restaurant                       |
| **Payment Methods** | Configure accepted payment options                      |
| **Meal Modifiers**  | Set up dish customization options                       |
| **Statistics**      | View restaurant performance metrics                     |

---

### Dishes & Menu

Organize your menu with a flexible category system:

**Dish Information:**

- Name and description
- Base price
- Preparation time
- Portion count
- Image (optional)
- Kitchen preparation notes

**Modifiers:**
Customize dishes with options like:

- No Garlic
- Extra Spicy
- Side of Sauce
- Well Done
- Vegan Option
- And more...

---

### Discounts

Create flexible promotional offers with precise targeting:

**Basic Settings:**

- Title and description
- Percentage discount (e.g., 25% off)
- Active date range
- Days of the week

**Targeting Options:**

- Specific order types (Delivery, Hall, Takeaway, Banquet)
- Order sources (App, Website, In-System)
- Specific menus and categories
- Individual guest targeting

**Special Behaviors:**

- Apply to first order only
- Require promo code
- Time-based activation (Happy Hour)

---

## User Roles

| Role           | Access Level | Responsibilities                             |
| -------------- | ------------ | -------------------------------------------- |
| **Owner**      | Full         | Complete restaurant control, settings, staff |
| **Admin**      | High         | Day-to-day management, menus, orders         |
| **Cashier**    | Limited      | Payment processing, order completion         |
| **Dispatcher** | Limited      | Order management, assignments                |
| **Kitchener**  | Limited      | Food preparation, order status               |
| **Waiter**     | Limited      | Taking orders, customer service              |
| **Courier**    | Limited      | Delivery fulfillment                         |

---

## Key Workflows

### Processing an Order

1. **Create Order** - Select type (Hall/Delivery/Takeaway), add guest info
2. **Add Dishes** - Choose from menu, apply modifiers
3. **Send to Kitchen** - Order appears in kitchen view
4. **Kitchen Prepares** - Staff marks items as cooking/ready
5. **Serve/Deliver** - Order goes to customer
6. **Payment** - Process payment, apply discounts if any
7. **Complete** - Order finalized, recorded in history

### Managing a Shift

1. **Open Shift** - Start the day, record opening cash
2. **Process Orders** - Handle all daily transactions
3. **Track Payments** - Cash, cards, tips, expenses
4. **End of Day** - Review totals, count cash
5. **Close Shift** - Finalize with discrepancy notes if needed

---

## Real-Time Features

- **Live Updates** - Orders and status changes appear instantly

---

Need help? Contact contact@yefro.dev.
