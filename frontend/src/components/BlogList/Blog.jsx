import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { Stack } from '@mui/material';
import Button from '@mui/joy/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Blog = ({ blog, onLike, onEdit, onDelete, currentUserId }) => {

    // Validations
    if (!blog) return null;

    const handleDelete = async (blogId) => {
        try {
            if (window.confirm('Are you sure you want to delete this blog?')) {
                await onDelete(blogId);
            }
        } catch (error) {
            console.log(error);
            alert('Error deleting blog');
        } finally {
            window.location.reload();
        }
    }

    const defaultBlogImage = `https://img.freepik.com/premium-photo/closeup-keyboard-ultraviolet-light_53876-33763.jpg?size=626&ext=jpg`;

    const getDateString = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    }

    return (
        <Card sx={{ minWidth: 320 }}>

            {/* Card Top */}
            <div>
                <AspectRatio ratio={16 / 9}>
                    <img
                        src={blog.image || defaultBlogImage} alt={blog.title}
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                </AspectRatio>

            </div>

            {/* Card Content */}
            <CardContent>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography level='body-md'>{blog.user.name}</Typography>
                    <Typography level='body-md'>{getDateString(blog.createdAt)}</Typography>
                </Stack>

                <Typography level='title-lg'>{blog.title}</Typography>
                <Typography level='title-md'>{blog.caption}</Typography>

                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <IconButton onClick={onLike}>
                        <FavoriteIcon style={{ color: '#E0115F' }} />
                    </IconButton>

                    {
                        blog.user.userId === currentUserId && (
                            <Stack direction='row' justifyContent='space-between' gap={2}>
                                <Button variant='soft' color='warning' onClick={onEdit}>Edit</Button>
                                <Button variant='solid' color='danger' onClick={() => handleDelete(blog.blogId)}>Delete</Button>
                            </Stack>
                        )
                    }
                </Stack>
            </CardContent>
        </Card>
    )
}