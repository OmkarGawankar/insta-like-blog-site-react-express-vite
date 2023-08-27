import { Grid } from "@mui/material";
import { Blog } from "./Blog";

export const BlogList = ({ blogs }) => {

    const onLike = () => { }

    const onDelete = () => { }

    const onEdit = () => { }

    return (
        <section>
            <Grid container spacing={3}>
                {blogs && blogs.length > 0 && blogs.map((blog, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                        <Blog blog={blog} onLike={onLike} onEdit={onEdit} onDelete={onDelete} />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}  