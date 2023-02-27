This is a project for A&S FE developer test to retrieve a list of 100 popular movies from The Movie DB using their API

### Production URL

[https://go-movie-night.netlify.app/]

## TO-DO

- [x] Create a new Next.js app in Typescript or Javascript using npm and node@18
- [x] Add Tailwind and Radix UI as the styling UI strategy
- [x] Add @axe-core/react for accessibility
- [x] Retrieve a list of 100 popular movies from The Movie DB using their API
- [x] The list of popular movies should be batched in groups of 20
- [x] On page load return the first 20 results as a 5 column grid (2 columns on mobile) that includes the movie cover art, title, release date and rating
- [x] Add a load more button that onClick returns the next 20 results until the list is exhausted. The button should be hidden when the end of the list has been reached
- [x] Clicking a movie item should open a Radix UI Dialog that includes more information from the api about the movie
- [x] The layout and content can include anything you want
- [x] Make the list sortable using a Radix UI component E.g.
- [x] Make the title of the movie items searchable
- [x] Deploy your app to any service you deem appropriate E.g. AWS

- Use conventional commits
- You must be able to explain why you chose your deployment service
- The site should be accessible E.g. Lighthouse testing
- API error handling should be appropriate
- The readme should be updated to include any important information for setup and configuration
- The app should have no console errors in production and development
- Try to avoid adding third party tooling or libraries unless you can justify their usage
- Tests are a nice to have but are not a requirement

## Setup

#### Environment variables

- Create .env.local and copy values from .env.example
- Log in/Sign up on [www.themoviedb.org]
- Copy your API Key on [https://www.themoviedb.org/settings/api] and save it as NEXT_PUBLIC_MOVIE_API_TOKEN

#### Install all packages that the app depends on

```bash
npm install
```

#### Create an optimized production build:

```bash
npm run build
```

#### Run the development server:

```bash
npm run dev
```

#### Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
