const Dev = require('../models/Dev');

module.exports = {
  async store(req, res) {
    const { devID } = req.params;
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devID);

    if (!targetDev) {
      return res.status(400).json({error: 'Dev not found'});
    };

    if (targetDev.likes.includes(loggedDev._id)){
      console.log(`Deu Match \o/`);
    }

    loggedDev.likes.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev)
  }
}