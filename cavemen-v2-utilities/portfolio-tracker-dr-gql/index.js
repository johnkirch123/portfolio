const { ApolloServer, gql } = require('apollo-server');
const { default: axios } = require('axios');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Query {
    listListings(
      filters: { marketplaceApproved: true }
      pagination: { limit: 500 }
      sort: HIGHEST_DAILY_VOLUME
    ) {
      results {
        name
        rank
        imageUrl
        totalVolume
        dailyChange
        dailyVolume
        weeklyChange
        weeklyVolume
        floorPrice
        websiteLink
        collectionTicker
        description
        discordLink
        twitterLink
        stats {
          allTimeStats {
            averagePrice
            totalPrice
            highestPrice
            totalSales
          }
          weekStats {
            averagePrice
            totalPrice
            highestPrice
            totalSales
          }
          previousWeekStats {
            averagePrice
            totalPrice
            highestPrice
            totalSales
          }
          dayStats {
            averagePrice
            totalPrice
            highestPrice
            totalSales
          }
          previousDayStats {
            averagePrice
            totalPrice
            highestPrice
            totalSales
          }
        }
      }
      count: count
    }
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    collections: (parent, args) => {
      return axios.get('https://gateway.deadrare.io').then((res) => {
        console.log(res.data);
        return res.data;
      });
    }
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
