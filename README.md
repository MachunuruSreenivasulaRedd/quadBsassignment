IN THIS project i have used html css react js to implement the Tv shows web application .

_********Used Local storage concept

The app must have the following functionalities

- When the app is opened, Home Route should be displayed
- When the Home Route is opened,

  - **_loader_** should be displayed while fetching the data
  - After fetching the data, the list of Movies should be displayed

- When a movie item in Home Route is clicked,
  - Page should be navigated to the Movie Item Details Route with the URL `/shows/:id`
- When the Blog Item Details Route is opened,
  - Make HTTP GET request to the **getMoviesData** with the movie id to get the details of the movie
    - Example: `https://api.tvmaze.com/shows/41281`
`
  - **_loader_** should be displayed while fetching the data
  - After fetching the data, the details of the blog should be displayed

----USED LOCALSTORAGE CONCEPT
```

Use these files to complete the implementation:

- `src/App.js`
- `src/components/Home/index.js`
- `src/components/MovieList/index.js`
- `src/components/MovieList/index.css`
- `src/components/MovieItem/index.js`
- `src/components/MovieItem/index.css`
- `src/components/MovieItemDetails/index.js`
- `src/components/MovieItemDetails/index.css`
</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- `Home` route should consist of `/` in the URL path
- `About` route should consist of `/about` in the URL path
- `Contact` route should consist of `/contact` in the URL path
- `MovieItemDetails` route should consist of `/show/:id` in the URL path
- No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js` file
- Wrap the `Loader` component with an HTML container element and add the `data-testid` attribute value as `loader` to it as shown below

  ```jsx
  <div data-testid="loader">
    <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
  </div>
  ```

</details>

### Resources

<details>
