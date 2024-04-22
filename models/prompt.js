import { Schema, model, models } from "mongoose";
import User from "./user";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: User,
  },
  tag: {
    type: String,
    required: [true, "Tag is required!"],
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required!"],
  },
  creatorImage: {
    type: String,
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
