## Skygate Events

Recruitment task for Skygate

#### How to
1. Configure credentials:    
    * download `.env` file from mail attachments and move it into project's root directory 
    
      OR
    
    * Create `.env` file in root directory that should look like:
      ```
      REACT_APP_GOOGLE=googleApiKey
      ```
2. `npm install` - install dependencies
3. `npm start` - run development server
4. `npm test` - run tests
5. `npm build` - create build for production

#### Using
* [React](https://reactjs.org/) with [Context API](https://reactjs.org/docs/context.html)  ❤
* [Create React App](https://github.com/facebookincubator/create-react-app) 💎 for project bootstrapping
* [Eslint](https://github.com/eslint/eslint) with [Airbnb config](https://github.com/airbnb/javascript) + [Prettier](https://github.com/prettier/prettier) ✨ to keep code nice and clean
* [Moment](https://github.com/moment/moment) ⏱ for date manipulation
* [Jest](https://github.com/facebook/jest) 📝 for testing
* ~~Firebase~~ [localForage](https://github.com/localForage/localForage) 🔥 for database
* [Ant Design](https://ant.design/) 🐜 for UI
* [react-transition-group](https://github.com/reactjs/react-transition-group) 🚀 for transitions

##### Todo
* localForage integration  
* `MainMenu` responsiveness
* Rework `CreateEventForm` image uploading process, now it doesn't work well for large images (1MB or more)
* Form validation other than HTML5's native
