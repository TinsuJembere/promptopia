// /app/api/prompt/route.js
import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
import User from "@models/user";

export const GET = async (req) => {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    let prompts;

    if (query) {
      const regex = new RegExp(query, "i"); // case-insensitive

      prompts = await Prompt.find({
        $or: [
          { prompt: { $regex: regex } }, // search by prompt text
          { tag: { $regex: regex } },    // search by tag
        ],
      }).populate("creator");

      if (!prompts.length) {
        const users = await User.find({ username: { $regex: regex } });
        const userIds = users.map((u) => u._id);

        prompts = await Prompt.find({ creator: { $in: userIds } })
          .populate("creator");
      }
    } else {
      prompts = await Prompt.find({}).populate("creator");
    }

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 500 });
  }
};
