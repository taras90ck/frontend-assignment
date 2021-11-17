# Timescale Frontend Interview Assignment


## Notes on implementation
- Spacing is implemented as it is according to design. It's defined mosly in pixels as I couldn't recognise the pattern used for relative spacing definitions (e.g. like [the one in Bootstrap](https://getbootstrap.com/docs/5.1/utilities/spacing/#notation)). Relative units are used only for font-sizes.
- Breakpoint values are hardcoded in media queries because I can't use install other libraries (e.g. SASS) to extract breakpoint definition logic into a variable and CSS variables are not likely to be helpful in such a case.  

## Note on design intentional deviation

Movie card size differs from one one the design. Suggested card size crops the movie poster and I couldn't find a combination of CSS rules which guarantee that essential parts of movies posters (characters heads, titles etc) are not cropped. Images we get from the API are of 2/3 aspect ratio and of cource when this ratio is preserved card content looks fine. 
But if to follow cards dimensions from design is a strict requirement changing current cards dimensions is as simple as replacing aspect ratio rules with `background-size: cover;` along with setting its height.


## Note on used Movie DB API enpoint

Initial page is expected to show the list of most recent movies. I couldn't find the exact match in the API docs so I used the most similar endpoint in my opinion - [Get Now Playing](https://developers.themoviedb.org/3/movies/get-now-playing). There's also [Get Latest](https://developers.themoviedb.org/3/movies/get-latest-movie) endpoint, but it returns a single movie without a link to previous one (but even if it had such a reference, fetching movies one by one is not efficient).
This assumption was made because it is a test assignment. In real-world scenario what exactly *'most recent'* mean should be clarified with stakeholders. After that which endpoint to use to get these most recent should be clarified with the team maintaining that API (of course if it's not obvious from the docs - I may be miossing something).


## Possible improvements

- Images from API have quite hight resolution (something like 2000x3000). Most of the devices might not need such images of such a high resolution. We need to check image API fot possibility to fetch images of specified dimensions and/or quality.
- Users might benefit from infinite scroll on movies page: we fetch next result page when user scrolls to the bottom of the current results list.
- Implement user friendly UI for loading and error states. Now we have only basic texts there.
