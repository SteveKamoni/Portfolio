// src/utils/api.js
export const submitForm = async (formData) => {
  const response = await fetch(
    "https://portfoliobackend-fiuc.onrender.com/api/form",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Something went wrong");
  }

  return response.json();
};
