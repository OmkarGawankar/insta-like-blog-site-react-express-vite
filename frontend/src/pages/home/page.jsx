import { useEffect, useState } from "react";

import { BlogList } from "../../components/BlogList/BlogList"
import { NavBar } from "../../components/NavBar/NavBar"
import { CreateBlogModal } from "../../components/CreateBlogModal/CreateBlogModal";
import { Box, Stack } from "@mui/material";
import { Button } from "@mui/joy";
import { getAllBlogs } from "../../routes/blogs.routes";

// Routes
import { createBlog } from '../../routes/blogs.routes';

const blogss = [
  {
    id: 1,
    title: 'Blog 1',
    caption: 'This is the first blog',
    mediaContent: ['https://img.freepik.com/premium-photo/human-sitting-yoga-poses-with-glowing-chakras_582637-1080.jpg'],
    createdAt: '2023-08-23T10:00:00Z',
    user: {
      id: 1,
      name: 'Omkar',
      email: 'omkar@gmail.com',
      role: 'admin'
    }
  },
  {
    id: 2,
    title: 'Travel Adventures',
    caption: 'Exploring new places and cultures.',
    mediaContent: ['https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg'],
    createdAt: '2023-08-27T10:00:00Z',
    user: {
      id: 2,
      name: 'Alice',
      email: 'alice@example.com',
      role: 'author'
    }
  },
  {
    id: 3,
    title: 'Cooking Chronicles',
    caption: 'Delicious recipes and cooking tips.',
    mediaContent: ['https://img.freepik.com/premium-photo/chocolate-cake-close-up-background-celebration-chocolate-dessert-generative-ai_47243-2084.jpg'],
    createdAt: '2023-08-26T10:00:00Z',
    user: {
      id: 3,
      name: 'Ethan',
      email: 'ethan@example.com',
      role: 'author'
    }
  },
  {
    id: 4,
    title: 'Tech Talk',
    caption: 'Latest trends in technology and gadgets.',
    mediaContent: ['https://img.freepik.com/premium-photo/technology-background-female-face-robot-artificial-intelligence-data-flow-concept-generative-ai_454018-334.jpg'],
    createdAt: '2023-08-25T10:00:00Z',
    user: {
      id: 4,
      name: 'Sophia',
      email: 'sophia@example.com',
      role: 'author'
    }
  },
  {
    id: 5,
    title: 'Health & Wellness',
    caption: 'Tips for a healthier lifestyle.',
    mediaContent: ['https://img.freepik.com/premium-photo/group-doctors-standing-front-hospital-room_889227-23144.jpg'],
    createdAt: '2023-08-24T10:00:00Z',
    user: {
      id: 5,
      name: 'Liam',
      email: 'liam@example.com',
      role: 'author'
    }
  }
];


const Home = () => {

  const [createBlogModalIsOpen, setCreateBlogModalIsOpen] = useState(false);
  const [blogsData, setBlogsData] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {

        // Get user from local storage
        setUser(JSON.parse(localStorage.getItem('user')));

        // Fetch Blogs
        const blogs = await getAllBlogs();

        if (!blogs) {
          throw new Error('Error fetching blogs');
        }

        setBlogsData(blogs);

      } catch (error) {
        console.log(error);
        alert('Error fetching blogs');
      }
    }

    fetchBlogs();

  }, []);

  const onCreateBlog = () => {
    if (!user) {
      alert('Please login to create a blog');
      return;
    }
    setCreateBlogModalIsOpen(true);
  }

  const onCloseCreateBlogModal = () => {
    setCreateBlogModalIsOpen(false);
  }

  const onSubmitCreateBlogModal = async (blog) => {
    try {
      // Create blog
      const user = JSON.parse(localStorage.getItem('user'));

      if (!user) {
        throw new Error('User not logged in');
      }

      const newBlog = await createBlog(user.userId, blog);

      if (!newBlog) {
        throw new Error('Error creating blog');
      }

      alert('Blog created successfully');

      // Reload the page
      window.location.reload();

    } catch (error) {
      console.log(error);
      alert('Error creating blog')
    } finally {
      setCreateBlogModalIsOpen(false);
    }
  }

  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: '#F4E3FF'
    }}>
      <NavBar />

      <Stack direction='row' justifyContent='end' alignItems='center' sx={{ margin: '2rem', marginBottom: 0 }}>
        <Button
          variant='solid'
          color="neutral"
          onClick={onCreateBlog}
          sx={{
            backgroundColor: '#0f172a',
          }}
        >
          Create Blog
        </Button>
      </Stack>

      <Box sx={{
        marginX: '2rem',
        marginY: '1rem'
      }}>
        <BlogList blogs={blogsData} user={user} />
      </Box>

      <br />

      <CreateBlogModal open={createBlogModalIsOpen} onClose={onCloseCreateBlogModal} onSubmit={onSubmitCreateBlogModal} />

    </Box>
  )
}

export default Home