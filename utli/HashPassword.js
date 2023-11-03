const bcrypt = require('bcrypt');
async function hashPasswordUtlis(password) {
    const saltRounds = 10; // Number of salt rounds
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }


module.exports={hashPasswordUtlis}