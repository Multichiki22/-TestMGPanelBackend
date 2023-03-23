const suscriber = require("../../Models/suscribers");

const handleUpdateSuscriber = async(req, res)=>{
const {email, updateInfo} = req.body
if (!updateInfo || !email) return res.status(400).json({ message: "Email and updateInfo are required" });
try {
    const updatedSuscriber = await suscriber.findOneAndUpdate({email},updateInfo)
    if (updatedSuscriber == null) return res.status(404).json({message:"Suscriber not found"})
    return res.status(200).json({message:"User successfully updated"})
} catch (error) {
    return res.status(400).json({message: error.message})
}
}
module.exports = handleUpdateSuscriber