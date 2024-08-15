import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { NewPost, NewPost, Post, PostsResponse } from '../types';
import { SnackbarContext } from './SnackbarProvider';
import { createPost, deletePost, getPosts, getPostsByCategory, updatePost } from '../api';

interface PostContextProps {
  posts: Post[] | null;
  loadingPosts: boolean;
  addPost: (newPost: NewPost) => void;
  removePost: ({ postID, selectedCategoryID }: { postID: string; selectedCategoryID?: string }) => void;
  getPostList: (selectedCategoryID?: string) => void;
  updatePostData: ({
    postID,
    updatedPost,
    selectedCategoryID
  }: {
    postID: string;
    updatedPost: NewPost;
    selectedCategoryID?: string;
  }) => void;
}

interface PostProviderProps {
  children: React.JSX.Element;
}

export const PostContext = createContext<PostContextProps>({
  posts: null,
  loadingPosts: false,
  addPost: () => {},
  removePost: () => {},
  getPostList: () => {},
  updatePostData: () => {}
});

const postList: Post[] = [
  {
    id: '664128a212f505651c18d676',
    title: 'A nice place to camp',
    image:
      'https://th.bing.com/th/id/R.e0bad63364a867fea652212c254bf869?rik=avtecz5aXVdevA&riu=http%3a%2f%2fwww.viajejet.com%2fwp-content%2fviajes%2fLago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg&ehk=6qRhWDqqQAEkSFs%2bHP8p2Bl6XfPbjznSoORh%2bsEJ%2bQE%3d&risl=&pid=ImgRaw&r=0',
    description: 'Post 2.0 description',
    category: {
      _id: '663fef70d513515319551d1f',
      name: 'Travel',
      createdAt: '2024-05-11T22:21:36.759Z',
      updatedAt: '2024-05-14T13:47:54.653Z',
      __v: 0
    },
    comments: ['6641f7d912f505651c18d68e', '66424d2c12f505651c18d91c', '66424d3812f505651c18d923']
  },
  {
    id: '664128a212f505651c18d6kf6',
    title: 'Favorite food ;)',
    image:
      'https://th.bing.com/th/id/R.2d66d3ce21d052726c2c527a03da4f4c?rik=3FedcY2H7LDtBw&riu=http%3a%2f%2ftheartofplating.com%2fwp-content%2fuploads%2f2015%2f06%2fEvan_Feature.jpg&ehk=KCxZkONbpjuAYhfpKxoeHgIizR%2fy1U0LM6olKn1d8go%3d&risl=&pid=ImgRaw&r=0',
    description: 'Post 2.0 description',
    category: {
      _id: '663fef70d513515319546d1f',
      name: 'Food',
      createdAt: '2024-05-11T22:21:36.759Z',
      updatedAt: '2024-05-14T13:47:54.653Z',
      __v: 0
    },
    comments: ['6641f7d912f505651c18d68e', '66424d2c12f505651c18d91c', '66424d3812f505651c18d923']
  }
];

export function PostProvider({ children }: PostProviderProps): React.JSX.Element {
  const createAlert = useContext(SnackbarContext);
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loadingPosts, setLoadingPosts] = useState(false);

  const onLoading = (isLoading: boolean) => {
    setLoadingPosts(isLoading);
  };

  const onError = useCallback(() => {
    // createAlert({
    //   message: "Something went wrong.",
    //   severity: "error",
    // });
  }, []);

  const getPostList = useCallback(
    async (selectedCategoryID?: string) => {
      const onSuccess = async (data: PostsResponse[]) => {
        const newList = data.map((post) => ({
          id: post._id,
          title: post.title,
          image: post.image,
          description: post.description,
          category: post.category,
          comments: post.comments
        }));
        setPosts(newList);
      };

      const params = { onSuccess, onError, onLoading };
      selectedCategoryID ? await getPostsByCategory({ selectedCategoryID, ...params }) : await getPosts(params);
    },
    [onError]
  );

  const addPost = useCallback(
    async (newPost: NewPost) => {
      const onSuccess = async () => {
        await getPostList();
        // createAlert({
        //   message: "Post successfully created.",
        //   severity: "success",
        // });
      };

      await createPost({ newPost, onSuccess, onError, onLoading });
    },
    [onError, getPostList]
  );

  const updatePostData = useCallback(
    async ({ postID, updatedPost, selectedCategoryID }: { postID: string; updatedPost: NewPost; selectedCategoryID?: string }) => {
      const onSuccess = async () => {
        await getPostList(selectedCategoryID);
        // createAlert({
        //   message: "Post successfully updated.",
        //   severity: "success",
        // });
      };

      await updatePost({ postID, updatedPost, onSuccess, onError, onLoading });
    },
    [onError, getPostList]
  );

  const removePost = useCallback(
    async ({ postID, selectedCategoryID }: { postID: string; selectedCategoryID?: string }) => {
      const onSuccess = async () => {
        await getPostList(selectedCategoryID);
        // createAlert({
        //   message: "Post successfully deleted.",
        //   severity: "success",
        // });
      };
      setLoadingPosts(true);
      await deletePost({ postID, onSuccess, onError });
    },
    [onError, getPostList]
  );

  return (
    <PostContext.Provider
      value={{
        posts,
        loadingPosts,
        addPost,
        removePost,
        getPostList,
        updatePostData
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
