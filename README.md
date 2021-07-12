### Description

Foodie is a tool and a guide for inexperienced cookers. Many people are stuck eating the same meals everyday because of their lack of skills and knowledge in cooking.
Foodie allows people to search for recipes according to their requirements and gives them a step by step guide on how to prepare them

### App Design

1. Main Search --> Search or Browsing Page
2. Search Results --> Recipe Page
3. Broswing Page --> Filter Pages
   -Filter Pages
   --> Cuisine Page --> Recipe Page
   --> Cooking Duration Page --> Recipe Page
   --> Diet Page --> Recipe Page
4. Recipe Page --> Requirements and instructions Pages

### Main Concerns

1. Page Design --> What is the experience of my user
2. Code Structure --> How would my implementaion of different componenets affect user experience on my page
3. API fetching --> How would my API fetches affect my Code structure in terms of my states (Many different variations of the same URL)
4. Routing --> How would my Routes affect the components that im using and also my styling (Recipe)

### Approach

1. Global state for the entire app using -useContext and -useReducer
2. Each page has a state that includes its data, page number, filters etc
   - Initially chose my global state to follow the user's data
   - API fetch upon mounting of each page
3. Using Routes and Nested Routes to achieve the different views of the browse and search page
4. Central function to build fetch

### Page Design

1. Get page data from useContext
2. Render out data
3. useEffect --> dispatch made to fetch data based on filters and dispatch again to set as global state
4. useEffect dependency --> set to page filters

### Main Challenges

1. Routing and Nested Routes
2. Moving data from page to page -useContext and Page States
   - Issues when moving data from parents to children
     - Could have solved simple issues by fetching a larger file and passing props to child
     - instead had to fetch data in the child again because of the structure of the useReducer
       -Possible solution is to implement states for components in the global state? But end up with a gigantic global state -> eg Redux
       -Another Possible solution is to restrict global states to certain types of variables and use a mix of local and global states
       -State carries alot of logic (data, apiEndpoints, components)
   - Dispatching states properly
3. Timing fetches -useEffect and setting appropriate dependencies --> main issue was the limit of API calls
4. Interwining logic between API endpoints and page design

### Improvements

1. Refactor browsing components
2. Segment and Abstract out more components
3. Overall code structure
4. Timing of fetches (Batching fetches maybe)
5. Setting page history to prevent re-fetching when moving back on routes
