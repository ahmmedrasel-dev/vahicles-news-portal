export const getRelatedCateogoryArticles = async (category, news_id = null) => {
   const bearerToken = process.env.API_KEY;
   const baseUrl = process.env.BASE_URL;
   const res = await fetch(
     `${baseUrl}/news?category=${category}&newsId=${news_id}`,
     {
       headers: {
         'Authorization': `Bearer ${bearerToken}`,
         'Content-Type': 'application/json',
       },
       cache: "no-store",
     }
   );
 
   return res.json();
 };