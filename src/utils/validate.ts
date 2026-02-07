import type { FieldSchema } from "../schema/userSchema";

export function validateForm(
  schema: FieldSchema[],
  values: Record<string, any>
) {
  const errors: Record<string, string> = {};

  schema.forEach((field) => {
    const value = values[field.name];

    if (field.required && !value) {
      errors[field.name] = `${field.label} is required`;
      return;
    }

    if (field.pattern && !field.pattern.test(value)) {
      errors[field.name] = field.errorMessage || "Invalid value";
    }
  });

  return errors;
}
