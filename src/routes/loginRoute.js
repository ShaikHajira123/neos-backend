const jwt = require('jsonwebtoken');
 
module.exports = (req, res) => {
  
    const token = jwt.sign({
      userId: 1,
    }, process.env.SECRET);
    res.json({
      token,
    });
  
}