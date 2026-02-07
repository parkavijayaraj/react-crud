// src/schema/userSchema.ts

export type FieldType = "text" | "email" | "tel" | "date";

export interface FieldSchema {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
  errorMessage?: string;
}

export const userSchema: FieldSchema[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
    minLength: 2,
    errorMessage: "First name must be at least 2 characters"
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
    minLength: 1,
    errorMessage: "Last name is required"
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    required: true,
    pattern: /^[0-9]{10}$/,
    errorMessage: "Phone number must be exactly 10 digits"
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Please enter a valid email address"
  }
];
