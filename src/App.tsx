import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import { userSchema } from "./schema/userSchema";
import { validateForm } from "./utils/validate";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "./services/api";

export default function App() {
  const [users, setUsers] = useState<any[]>([]);
  const [formData, setFormData] = useState<any>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [editId, setEditId] = useState<number | null>(null);

  const loadUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm(userSchema, formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // ⛔ BLOCK SAVE
    }

    if (editId) {
      await updateUser(editId, formData);
    } else {
      await createUser(formData);
    }

    setFormData({});
    setErrors({});
    setEditId(null);
    loadUsers();
  };

  const handleEdit = (user: any) => {
    setFormData(user);
    setEditId(user.id);
  };

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    loadUsers();
  };

  return (
    <div style={{ padding: 20}}>
      <h2>User Management</h2>
<div  style={{  minHeight: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"}}>
      <UserForm
        schema={userSchema}
        values={formData}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <hr />

     <div className="users-container">
      <h3>Users List</h3>
  {users.map((u) => (
    <div key={u.id} className="user-card">
      <div className="user-text">
        <strong>{u.firstName} {u.lastName}</strong>
        <span>{u.phone}</span>
        <span>{u.email}</span>
      </div>

      <div className="user-buttons">
        <button
          className="btn edit-btn"
          onClick={() => handleEdit(u)}
        >
          Edit
        </button>
        <button
          className="btn delete-btn"
          onClick={() => handleDelete(u.id)}
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>
</div>
    </div>
  );
}
