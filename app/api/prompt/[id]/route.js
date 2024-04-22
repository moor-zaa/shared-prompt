//GET
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const prompt = await Prompt.findById(params.id).populate("creator");

    if (!prompt) return new Response("Prompt not found!", { status: 404 });

    return new Response(JSON.stringify(prompt), {
      status: 200,
    });
  } catch (error) {
    console.error(error);

    return new Response("Failed to fetch prompts!", {
      status: 500,
    });
  }
};

//PATCH
export const PATCH = async (req, { params }) => {
  const { propmt, tag } = await req.json();

  try {
    await connectToDB();

    const existPrompt = await Prompt.findById(params.id);

    if (!existPrompt) return new Response("Prompt not found", { status: 404 });

    existPrompt.prompt = propmt;
    existPrompt.tag = tag;
    await existPrompt.save();

    return new Response(JSON.stringify(existPrompt), { status: 200 });
  } catch (error) {
    return new Response("Faild to update Prompt", {
      status: 500,
    });
  }
};

//DELETE
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndDelete(params.id);

    return new Response("Prompt successfully deleted", {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to delete prompt", {
      status: 500,
    });
  }
};
