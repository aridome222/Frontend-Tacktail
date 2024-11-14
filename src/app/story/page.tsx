import { auth } from '@/auth/auth';
import { redirect } from 'next/navigation';
import React from 'react';
import { StoryCard } from './_components/StoryCard';
import { StoryTop } from './_components/StoryTop';
import { fetchRecipe } from '@/utils/api/fetchRecipe';
import type { RecipeData, User } from '@/utils/types';
import { fetchUser } from '@/utils/api/fetchUser';

export const MOCK_COCKTAIL_ID_LIST = ['10', '0', '1', '4', '11', '2', '9', '3'];

const Story: React.FC = async () => {
  const DEFALT_IMAGE = '/images/hatena.png';

  const recipeDatas: RecipeData[] = [];

  for (let index = 0; index < MOCK_COCKTAIL_ID_LIST.length; index++) {
    const recipeData = await fetchRecipe(MOCK_COCKTAIL_ID_LIST[index]);
    recipeDatas.push(recipeData);
  }

  const session = await auth();
  if (!session?.user) redirect('/login');

  const userData: User = await fetchUser(session?.user?.sessionToken);

  return (
    <>
      <StoryTop />
      {recipeDatas.map((item, index) => {
        return (
          <React.Fragment key={item.id}>
            {index < userData.story && (
              <StoryCard
                cocktail={item.name}
                image={item.image === '' ? DEFALT_IMAGE : item.image}
                materials={item.materials.map((material) => {
                  return material.name;
                })}
                day={index + 1}
                isActive
                isClear
              />
            )}
            {index === userData.story && (
              <StoryCard
                cocktail={item.name}
                image={DEFALT_IMAGE}
                materials={item.materials.map((material) => {
                  return material.name;
                })}
                day={index + 1}
                isActive
                isClear={false}
              />
            )}
            {index > userData.story && (
              <StoryCard
                cocktail={item.name}
                image={DEFALT_IMAGE}
                materials={item.materials.map((material) => {
                  return material.name;
                })}
                day={index + 1}
                isActive={false}
                isClear={false}
              />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Story;
