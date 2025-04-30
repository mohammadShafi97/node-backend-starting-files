import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
  // this function is for registering the user
  const salt = await bcrypt.genSalt(10); //generate salt
  const hashedPassword = await bcrypt.hash(password, salt); // bcrypt.hash - function used to hash the password
  return hashedPassword;
};

export const comparePassword = async (password, hashedPassword) => {
  //this function is use for login
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};
