import './Sidebar.css'
import { RssFeed ,Chat,Group,PlayCircle,QuestionAnswer,Work,EmojiEvents,School} from '@mui/icons-material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon'/>
            <span className="spansidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className='sidebarIcon'/>
            <span className="spansidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircle className='sidebarIcon'/>
            <span className="spansidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className='sidebarIcon'/>
            <span className="spansidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className='sidebarIcon'/>
            <span className="spansidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <QuestionAnswer className='sidebarIcon'/>
            <span className="spansidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <Work className='sidebarIcon'/>
            <span className="spansidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EmojiEvents className='sidebarIcon'/>
            <span className="spansidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className='sidebarIcon'/>
            <span className="spansidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar