import { useCallback, useContext, useEffect, useState } from 'react';

import PostList from '../../PostList';
import CategoryButtonGroup from '../../CategoryButtonGroup';
import CreatePostButton from '../../CreatePostButton';
import { Category, Post } from '../../../types';
import { PostContext } from '../../../context';
import Loading from '../../Loading';
import Form from '../../Form';

const categories: Category[] = [
  { id: '663fef70d513515319551d1f', name: 'Travel' },
  { id: '663fef70d513515319546d1f', name: 'Food' }
];

function HomePage() {
  const [openForm, setOpenForm] = useState(false);
  const { posts, getPostList } = useContext(PostContext);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleOpenForm = (defaultValues?: Post) => {
    setOpenForm(true);
    if (defaultValues) setSelectedPost(defaultValues);
  };

  const handleSelectCategory = useCallback(
    (category: Category) => {
      const isCategoryAlreadySelected = category.id === selectedCategory?.id;
      getPostList(isCategoryAlreadySelected ? undefined : category.id);
      setSelectedCategory(isCategoryAlreadySelected ? null : category);
    },
    [selectedCategory, getPostList]
  );

  useEffect(getPostList, [getPostList]);

  if (!posts) return <Loading />;

  return (
    <>
      <CreatePostButton handleOpenForm={handleOpenForm} />
      <CategoryButtonGroup categories={categories} selectedCategory={selectedCategory} handleSelectCategory={handleSelectCategory} />
      <PostList posts={posts} selectedCategory={null} handleOpenForm={handleOpenForm} />
      <Form
        open={openForm}
        post={selectedPost}
        setOpen={setOpenForm}
        setSelectedPost={setSelectedPost}
        categories={null}
        selectedCategory={null}
      />
    </>
  );
}

export default HomePage;