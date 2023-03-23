const suscriber = require("../../Models/suscribers");

const handleCreateSuscriber = async (req, res) => {
  const { name, email } = req.body;
  //validation for name and email existence
  if (!name || !email)
    return res.status(400).json({ message: "Name and Email are required" });

  try {
    const newSuscriber = new suscriber({
      name,
      email,
    });
    await newSuscriber.save();
    return res.status(200).json({ message: "suscriber successfully created" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
module.exports = handleCreateSuscriber;
