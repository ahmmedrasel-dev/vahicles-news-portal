export const getPopularArticles = async () => {
   const bearerToken = process.env.API_KEY;
   const baseUrl = process.env.BASE_URL;
   const res = await fetch(
     `${baseUrl}/most-popular-news`,
     {
       headers: {
         'Authorization': `Bearer ${bearerToken}`,
         'Content-Type': 'application/json',
       },
       next: {
         revalidate: 10,
      },
     }
   );
   return res.json();
 };