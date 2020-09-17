## installaion

Make sure to install Node and node modules

### Run app
Frontend : <br />
Run `npm start` in terminal<br/>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br/>
The page will reload if you make edits.<br />

Backend : <br/>
Run `node api/main.js` in terminal

### Application sequence

####First user open the site to `Login` page, if he doesn't have account he can just Signup.
####Gallery of all friends' guestbooks will open including his guestbook ( if he has one ).
####User can choose any guestbook to see and comment on.
####User can make his own guestbook or if he has one people can message him and he can reply back.
####User can edit or delete messages.

### Security
!After user Login his data will be passed using `JWT` , Token stores at `localstorage` and used to authenticate accounts.
####If token is not valid or unauthorized Gallery and Messages will return `Access denied` page.
token removes after Logout.



