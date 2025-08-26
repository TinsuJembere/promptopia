import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, context) => {
  try {
    const { params } = await context;
    await connectToDB();

    const prompts = await Prompt.find({ creator: params.id }).populate("creator");

    return new Response(JSON.stringify(prompts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Error fetching prompts:", error);
    return new Response(`Failed to fetch prompts: ${error.message}`, {
      status: 500,
    });
  }
};
