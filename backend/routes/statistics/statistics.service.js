const service = module.exports;
const { User } = require("../users/users.model");
const Blog = require("../blogs/blogs.model");

service.all = async (query, params, body) => {
    try {

        const total_blogs = await Blog.countDocuments();
        const total_users = await User.countDocuments();
        
        // Aggregate the total likes of all blogs
        // Here likes is array of user ids
        const total_likes = await Blog.aggregate([
            {
                $project: {
                    likes: 1,
                    _id: 0
                }
            },
            {
                $unwind: "$likes"
            },
            {
                $group: {
                    _id: null,
                    total_likes: {
                        $sum: 1
                    }
                }
            }
        ]);

        const most_liked_blogs = await Blog.aggregate([
            {
                $project: {
                    title: 1,
                    likes: { $size: { $ifNull: ["$likes", []] } },
                    _id: 0
                }
            },
            { $sort: { likes: -1 } },
            { $limit: 5 }
        ]);

        const statistics = {
            total_blogs,
            total_users,
            total_likes: total_likes[0].total_likes,
            most_liked_blogs
        }
       
        return statistics;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};
