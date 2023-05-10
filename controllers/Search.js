const Narratives = require('../models/narrative');
const Twisters = require('../models/twister');
const Riddles = require('../models/riddle');
const Proverbs = require('../models/proverbs');

const Search = async (req, res) => {
  const key = req.params.key;
  try {
    const narratives = await Narratives.find({ Subtopic: { $regex: key, $options: 'i' } });
    const twisters = await Twisters.find({ Subtopic: { $regex: key, $options: 'i' } });
    const riddles = await Riddles.find({ Subtopic: { $regex: key, $options: 'i' } });
    const proverbs = await Proverbs.find({ Subtopic: { $regex: key, $options: 'i' } });

    const results = {
      narratives,
      twisters,
      riddles,
      proverbs,
    };
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = Search;
