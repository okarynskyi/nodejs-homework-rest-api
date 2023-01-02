const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  // owner: {
  //     type: SchemaTypes.ObjectId,
  //     ref: 'user',
  //   },
}, { versionKey: false, timestamps: true });

contactSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const updateSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
    addSchema,
    updateSchema
};

const Contact = model("contact", contactSchema);

module.exports = {
    Contact,
    schemas
};