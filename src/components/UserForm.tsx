import type { FieldSchema } from "../schema/userSchema";
import "./UserForm.css";

interface Props {
  schema: FieldSchema[];
  values: any;
  errors: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export default function UserForm({
  schema,
  values,
  errors,
  onChange,
  onSubmit
}: Props) {
  return (
    <div className="form-wrapper">
    <div className="form-container">
      <div className="form-title">New User Details</div>

      {schema.map((field) => (
        <div key={field.name} className="form-group">
          <label>{field.label}</label>
          <input
            name={field.name}
            type={field.type}
            value={values[field.name] || ""}
            onChange={onChange}
          />
          {errors[field.name] && (
            <div className="error-text">{errors[field.name]}</div>
          )}
        </div>
      ))}

      <div className="form-actions">
        <button type="button" className="save-btn" onClick={onSubmit}>
          Save
        </button>
      </div>
    </div>
    </div>
  );
}
