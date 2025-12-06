## How to run
npm i and than npm run dev.

deployed version: https://conference-sessions-planner.vercel.app/

## Architecture
 Data is initially loaded in the server, than for the filtering this is on the client side,
 I decided to filter in the client side for few reasons:
 1. its less load on our server (each filter is a new html that sent).
 2. works offline too if needed

 I would consider server side filtering if the filtering is readlly heavy or on a lot of data.
 
 I've utilized RSC in the Home component and when we fetch single session, data is fetched first in the server than sent
 to the client, not fetch from client components (its slower).


## Trade-offs & Shortcuts
Mainly CSS, added basic CSS using CSS modules to make it look ok, figma could help a lot here,
The main trade off is the state, currently I've wrapped only the relevant tree (not in the global layout) in context,
but the problem with context is that it renders the whole tree, if the project will be larger, state management will be 
better.

### Improve with mroe time
1. Everything that releated to empty states, warning states etc.
2. Logs, for better debugging in the future.
3. More time to plan this in scale. 

