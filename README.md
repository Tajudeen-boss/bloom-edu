# Bloom Edu Montessori Platform

Unified Next.js + Prisma platform for a Montessori educational consultancy with multi-page and multi-subdomain services.

## Services covered

- Main hub (`www`) for organization overview, Montessori philosophy, testimonials, and navigation.
- Training subdomain (`training`) for programs, schedules, booking/registration, and payments.
- Materials subdomain (`materials`) for Montessori e-commerce catalog and checkout.
- Books subdomain (`books`) for Montessori textbook commerce.
- Admin subdomain (`admin`) for secure platform-wide CRUD and operations.

## Tech stack

- **Frontend + Backend**: Next.js App Router + API routes
- **Database**: Neon PostgreSQL
- **ORM**: Prisma
- **Notifications**: Postmark (email) + WhatsApp webhook integration

## Domain routing strategy

`middleware.ts` rewrites host-based subdomain traffic to internal route groups:

- `training.yourdomain.com` → `/training`
- `materials.yourdomain.com` → `/materials`
- `books.yourdomain.com` → `/books`
- `admin.yourdomain.com` → `/admin`

This keeps deployment as a single app while still supporting independent subdomain experiences.

## Data model highlights

Prisma models currently include:

- `TrainingProgram`, `Booking`
- `Product`, `ProductVariant`
- `Book`
- `Order`, `OrderItem`
- `User`

Enums are included for order/booking/product state transitions.

## API endpoints (starter)

- `GET /api/health`
- `GET /api/training/programs`
- `POST /api/training/bookings`
- `GET /api/store/products`
- `GET /api/books`
- `POST /api/orders`

Booking/order creation sends notification hooks through Postmark/WhatsApp service utilities.

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure environment variables:

   ```bash
   cp .env.example .env
   ```

3. Generate Prisma client:

   ```bash
   npx prisma generate
   ```

4. Run migrations and seed:

   ```bash
   npx prisma migrate dev --name init
   npm run db:seed
   ```

5. Start development server:

   ```bash
   npm run dev
   ```

## Recommended next implementation steps

1. Add authentication/authorization for admin and trainee dashboards (e.g., NextAuth/Auth.js).
2. Add payment gateway integration (Stripe/Paystack/Flutterwave) in checkout and booking flows.
3. Add object storage for product/book assets and invoice PDFs.
4. Add queue/retry system for notifications and webhooks.
5. Add audit logs and role-based permissions for admin actions.
