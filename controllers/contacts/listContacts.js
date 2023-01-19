const { Contact } = require("../../models/contact")

const listContacts = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;
  const query = { owner };
  if (typeof favorite !== "undefined") {
    query.favorite = favorite;
  }
  const result = await Contact.find(query, "-createdAt -updatedAt", { skip, limit })
                          .populate("owner", "name email")
  res.json(result)
}

module.exports = listContacts;