const QRCode = require('qrcode');
const { User } = require('../models/userModel');

const generateQR = async (req, res) => {
    const { mealType } = req.body;
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const qrData = `${user._id}:${mealType}`;
        const qrCode = await QRCode.toDataURL(qrData);
        
        res.json({ qrCode });
    } catch (error) {
        res.status(500).json({ error: 'Error generating QR code' });
    }
}
const validateQr = async (req, res) => {

    const { qrvalue } = req.params;
    try {
        const [id] = qrvalue.split('-');
        const isAdminBoolean = req.user.isAdmin;

        if (!isAdminBoolean) {
            return res.redirect('https://r.mtdv.me/blog/posts/vDklsO-G0Z');
        }

        const findUser = await User.findById({ id });

        if (!findUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        const resultJson = {
            user: findUser,
            message: 'User found',
        }

        res.status(200).json(resultJson);

    } catch (error) {
        console.error('Error validating QR code:', error);
        res.status(500).json({ error: 'Error validating QR code' });
    }
};


module.exports = { generateQR, validateQr };