export const getAllArticles = async () => {
   const bearerToken = process.env.API_KEY;
   const baseUrl = process.env.BASE_URL;
   const res = await fetch(`${baseUrl}/all-news`,
      {
         headers: {
         'Authorization': `Bearer ${bearerToken}`,
         'Content-Type': 'application/json',
         },
         next: {
            revalidate: 30,
         },
      }
   );

   return res.json();
 };