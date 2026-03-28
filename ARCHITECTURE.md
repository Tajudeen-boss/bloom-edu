# Solution Architecture (Proposed)

## 1) High-level design

A **single Next.js codebase** serves as the unified platform, with host-based rewrites mapping to service-specific subdomain experiences.

### Subdomains

- `www.<domain>`: Corporate hub/landing site
- `training.<domain>`: Training catalog, booking, payment, learner dashboard
- `materials.<domain>`: Montessori materials e-commerce
- `books.<domain>`: Textbook e-commerce
- `admin.<domain>`: Secure operations portal

## 2) Backend architecture

- Next.js API routes expose service-specific operations.
- Prisma handles typed data access.
- Neon PostgreSQL stores transactional + CMS data.
- Notification adapters abstract delivery channels:
  - Postmark for email confirmations
  - WhatsApp webhook provider for real-time alerts

## 3) Data boundaries

The schema separates concerns while enabling shared operations:

- Commerce entities (`Order`, `OrderItem`) reused by materials/books channels via `OrderSource`.
- Training entities (`TrainingProgram`, `Booking`) isolated to learning flows.
- Shared admin users and role-based access in `User`.

## 4) Scalability considerations

- Stateless API routes suitable for horizontal scaling.
- Neon supports branch workflows for staging/prod isolation.
- Caching strategy can be introduced by route type:
  - ISR for marketing pages
  - Dynamic rendering for inventory/order-sensitive views
- Async queue recommended for high-volume notification retries.

## 5) Security baseline

- Route-level auth checks for `/admin/**` and privileged APIs.
- Input validation via Zod.
- Secret management via environment variables.
- Add CSRF/session hardening once auth is integrated.

## 6) Operational workflow

- `admin` manages products/books/programs with full CRUD.
- Public users browse and transact on service subdomains.
- System sends confirmations and internal alerts automatically.

## 7) Deployment notes

- Deploy as one project on Vercel (or similar) with wildcard domain config.
- Add DNS records for each subdomain.
- Configure Postmark sender signatures and webhook endpoints.
- Use Neon production branch + pooled connection URL.
