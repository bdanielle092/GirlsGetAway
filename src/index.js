fetch('https://MoldyCamelPen.stepzen.net/api/blog/__graphql', {
    method: 'POST',

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        query: `
      query getArticles {
       title {
          description {
          
          }
        }
      
    `
    })
})
    .then(res => res.json())
    .then(data => console.log(data.data))