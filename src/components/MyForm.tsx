import React, { useState, useCallback } from "react";

export interface IForm {
  name: string;
  description: string;
}

interface IMyFormProps {
  onSubmit: (form: IForm) => void;
}

const initialState: IForm = { name: "", description: "" };

function MyForm({ onSubmit }: IMyFormProps) {
  const [form, setForm] = useState<IForm>(initialState);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((state) => ({ ...state, [name]: value }));
  }, []);
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(form);
      setForm(initialState);
    },
    [onSubmit, form]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} />
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
}

export default MyForm;
