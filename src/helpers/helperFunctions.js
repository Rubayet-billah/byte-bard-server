const bcrypt = require("bcrypt");

const generateHashedPassword = async (plainPassword) => {
  const saltRounds = +process.env.BCRYPT_SALT_ROUNDS;

  try {
    const hash = await bcrypt.hash(plainPassword, saltRounds);
    return hash;
  } catch (err) {
    throw err;
  }
};

const comparePassword = async (plainPassword, hashedPassword) => {
  try {
    const passwordMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return passwordMatch;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  generateHashedPassword,
  comparePassword,
};
