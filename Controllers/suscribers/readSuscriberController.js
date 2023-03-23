const suscriber = require("../../Models/suscribers");

const handleReadSuscriber = async (req, res) => {
  try {
    const suscribers = await suscriber.find();
    return res.status(200).json(suscribers);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
module.exports = handleReadSuscriber;
