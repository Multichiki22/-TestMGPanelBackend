const suscriber = require("../../Models/suscribers");

const handleDeleteSuscriber = async (req, res) => {
  const { email } = req.body;
  //validation for email existence
  if (!email) return res.status(400).json({ message: "Email is required" });
  try {
    await suscriber.findOneAndRemove({email})
    return res.status(200).json({message: `suscriber ${email} successfully deleted`})
  } catch (error) {
    return res.status(400).json({message: error.message})
  }
};

module.exports = handleDeleteSuscriber 
