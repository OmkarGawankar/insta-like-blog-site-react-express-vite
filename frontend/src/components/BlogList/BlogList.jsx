import { Grid } from "@mui/material";
import { Blog } from "./Blog";
import { deleteBlog, likeBlog } from "../../routes/blogs.routes";

export const BlogList = ({ blogs, user }) => {

    const onLike = async (blogId) => {
        const user = JSON.parse(localStorage.getItem('user')); 
        await likeBlog(user.userId, blogId);
    }

    const onEdit = () => { }

    const onDelete = async (blogId) => {
        await deleteBlog(blogId);
    }

    return (
        <section>
            <Grid container spacing={3}>
                {blogs && blogs.length > 0 && blogs.map((blog, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                        <Blog blog={blog} onLike={onLike} onEdit={onEdit} onDelete={onDelete} currentUserId={user ? user.userId : null} />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}  