import { z } from "zod";

export const bookingInputSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  programId: z.string().min(1)
});

export const orderInputSchema = z.object({
  customerName: z.string().min(2),
  customerEmail: z.string().email(),
  lineItems: z
    .array(
      z.object({
        productId: z.string().min(1),
        quantity: z.number().int().positive(),
        unitPrice: z.number().positive()
      })
    )
    .min(1),
  source: z.enum(["MATERIALS", "BOOKS"])
});

export const contactInputSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  organization: z.string().min(2),
  interest: z.enum(["CONSULTANCY", "TRAINING", "MATERIALS", "BOOKS", "PARTNERSHIP"]),
  message: z.string().min(20)
});
