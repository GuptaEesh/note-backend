import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      required: true,
    },
    isEdit: {
      type: Boolean,
      required: true,
    },
    isPinned: {
      type: Boolean,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    priority: {
      type: Number,
      required: true,
    },
    isArchived: {
      type: Boolean,
      required: true,
    },
    isTemporarilyDeleted: {
      type: Boolean,
      required: true,
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
    },
  },

  { timestamps: true }
);

export const Note = mongoose.model("note", noteSchema);
