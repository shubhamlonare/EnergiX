"use server";

export async function registerUser(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  console.log("REGISTER DATA ✅");
  console.log({ name, email,phone, password, confirmPassword });

  // Here you can:
  // - validate
  // - hash password
  // - save to DB
  // - redirect
}
