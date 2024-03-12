const bcrypt = require('bcrypt');

const hashingFunction = (myPlaintextPassword) => {
    const hash = bcrypt.hashSync(myPlaintextPassword, 10);
    return hash;
}

module.exports = hashingFunction;
