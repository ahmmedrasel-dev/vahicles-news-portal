export const getSecondaryArticles = async () => {
   const bearerToken = process.env.API_KEY;
   const baseUrl = process.env.BASE_URL;
   const res = await fetch(
     `${baseUrl}/secondary-feature-news`,
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