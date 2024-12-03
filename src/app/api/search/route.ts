import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
      const { query, role, industry, location, skills, page = 1, limit = 10 } = req.nextUrl.searchParams;
  
      const aggregationPipeline = [
        {
          $match: {
            $or: [
              { name: { $regex: query, $options: 'i' } },
              { username: { $regex: query, $options: 'i' } },
              { email: { $regex: query, $options: 'i' } },
              { 'preferences.skills': { $in: query.split(',') } },
              { 'portfolio.title': { $regex: query, $options: 'i' } },
              { 'portfolio.bio': { $regex: query, $options: 'i' } },
              { 'portfolio.skills': { $in: query.split(',') } },
              { 'portfolio.projects.title': { $regex: query, $options: 'i' } },
              { 'portfolio.projects.technologies': { $in: query.split(',') } },
            ],
          },
        },
        {
          $sort: { name: 1 }, // Sort by name or other field if needed
        },
        {
          $skip: (page - 1) * limit,
        },
        {
          $limit: Number(limit),
        },
      ];
  
      const users = await User.aggregate(aggregationPipeline);
      const portfolios = await Portfolio.aggregate(aggregationPipeline);
  
      const combinedResults = {
        users,
        portfolios,
      };
  
      return NextResponse.json({ success: true, data: combinedResults });
    } catch (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
  }
  