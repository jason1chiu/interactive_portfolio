const { Information } = require("../models");

const getInformation = async () => {
  return Information.findOne();
};

const addInformation = async (infoData, userId) => {
  const info = await Information.create(infoData);
  await User.findOneAndUpdate(
    { _id: userId },
    { information: info._id }
  );
  return info;
};

const updateInformation = async (infoData, userId) => {
  return Information.findOneAndUpdate(
    { _id: userId },
    infoData,
    { new: true }
  );
};

module.exports = { getInformation, addInformation, updateInformation };
