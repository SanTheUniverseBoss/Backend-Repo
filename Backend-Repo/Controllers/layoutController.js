const Layout = require('../models/Layout');

exports.saveLayout = async (req, res) => {
    const { userId, layout } = req.body;
    try {
        await Layout.findOneAndUpdate(
            { userId },
            { layout },
            { upsert: true, new: true }
        );
        res.json({ message: 'Layout saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving layout' });
    }
};

exports.loadLayout = async (req, res) => {
    try {
        const layout = await Layout.findOne({ userId: req.params.userId });
        res.json({ layout });
    } catch (error) {
        res.status(500).json({ error: 'Error loading layout' });
    }
};
