import React from 'react'
import ArticlesHeading from '../Shared/ArticlesHeading'
import FeaturedMain from './FeaturedMain'
import FeaturedPrimary from './FeaturedPrimary'
import FeatureSecondary from './FeatureSecondary'
import { getPrimaryArticles } from '@/app/utils/getPrimaryFeatureArticles'
import { getSecondaryArticles } from '@/app/utils/getSecondaryArticles'

export const FeaturedOnArticles = async () => {
  const featurePrimaryPromise = getPrimaryArticles();
  const featureSecondaryPromise  = getSecondaryArticles();

  const [featurePrimary, featureSecondary] = await Promise.all([featurePrimaryPromise, featureSecondaryPromise])
  return (
    <div className='py-6 px-4'>
      <ArticlesHeading title="Featured on  Articles" />
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-8'>
          <div>
            <FeaturedMain />
          </div>
          <div className=''>
            {
              featurePrimary?.data.map((item) =>  <FeaturedPrimary key={item.id} article={item} />)
            }
          </div>
          <div>
            {
              featureSecondary?.data.map((item) =>  <FeatureSecondary key={item.id} article={item} />)
            }
          </div>
      </div>
    </div>
  )
}
