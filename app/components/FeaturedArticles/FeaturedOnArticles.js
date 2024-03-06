import React from 'react'
import ArticlesHeading from '../Shared/ArticlesHeading'
import FeaturedMain from './FeaturedMain'
import FeaturedPrimary from './FeaturedPrimary'
import thumbnail1 from '@/app/assets/thumbnail/1.png'
import thumbnail2 from '@/app/assets/thumbnail/2.png'
import thumbnail3 from '@/app/assets/thumbnail/3.png'
import thumbnail4 from '@/app/assets/thumbnail/4.png'
import FeatureSecondary from './FeatureSecondary'
import { getPrimaryArticles } from '@/app/utils/getPrimaryFeatureArticles'
import { getSecondaryArticles } from '@/app/utils/getSecondaryArticles'

export const FeaturedOnArticles = async () => {
  const featurePrimaryPromise = getPrimaryArticles();
  const featureSecondaryPromise  = await getSecondaryArticles([featurePrimaryPromise, featureSecondaryPromise]);

  const [featurePrimary, featureSecondary] = await Promise.all()
 
  return (
    <div className='py-6 px-4'>
      <ArticlesHeading title="Featured on  Articles" />
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-8'>
          <div>
            <FeaturedMain />
          </div>
          <div className=''>
            {
              featurePrimary.map((item) =>  <FeaturedPrimary key={item.id} article={item} />)
            }
          </div>
          <div>
            {
              featureSecondary.map((item) =>  <FeatureSecondary key={item.id} article={item} />)
            }
          </div>
      </div>
    </div>
  )
}
