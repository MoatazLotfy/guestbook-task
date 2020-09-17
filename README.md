### Guestbook allows users to post their guestbook and reply on friends' messages or even see other guestbooks and message their owners. 

## installation

Make sure to install node modules `npm install`

### Run app
Frontend : <br />
Run `npm start` in terminal<br/>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br/>
The page will reload if you make edits.<br />

Backend : <br/>
Run `node api/main.js` in terminal.<br/>

Database : <br/>
MongoDB server must be running.

### Application sequence

-First user open the site to `Login` page, if he doesn't have account he can just Signup.<br/>
-Gallery of all friends' guestbooks will open including his guestbook ( if he has one ).<br/>
-User can choose any guestbook to see and comment on.<br/>
-User can make his own guestbook or if he has one people can message him and he can reply back.<br/>
-User can edit or delete messages.<br/>

### Security
-After user Login his data will be passed using `JWT` , Token stores at `localstorage` and used to authenticate accounts.<br />
-If token is not valid or unauthorized Gallery and Messages will return `Access denied` page.<br />
token removes after Logout.



