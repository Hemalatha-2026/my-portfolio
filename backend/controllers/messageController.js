const Message = require('../models/Message');

exports.submitMessage = async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        res.status(201).json({ success: true, message: 'Message sent successfully.' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error.' });
    }
};
