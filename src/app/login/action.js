"use server";

export async function loginUser(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  console.log("LOGIN DATA ✅");
  console.log({ email, password });

  // Here you can:
  // - validate inputs
  // - check user in DB
  // - compare hashed password
  // - create session / JWT
  // - redirect to dashboard
}
