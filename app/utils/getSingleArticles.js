export const getSingleArticles = async (slug) => {
   const bearerToken = process.env.API_KEY;
   const baseUrl = process.env.BASE_URL;
   const res = await fetch(
     `${baseUrl}/news/${slug}`,
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