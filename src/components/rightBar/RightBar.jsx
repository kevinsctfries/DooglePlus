import "./rightBar.scss"

const RightBar = () => {
  return (
    <div className="rightBar">
        <div className="container">
            <div className="item">
                <span>Suggestions for you</span>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://static01.nyt.com/newsgraphics/2021/10/25/neopets/0f0c649f19af6ef52cef47e2ff5b5deba53b6093/top-3-species/shoyru_green.png" alt="" />
                        <span>John Doe</span>
                    </div>
                    <div className="buttons">
                        <button>Follow</button>
                        <button>Ignore</button>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://static01.nyt.com/newsgraphics/2021/10/25/neopets/0f0c649f19af6ef52cef47e2ff5b5deba53b6093/top-3-species/shoyru_green.png" alt="" />
                        <span>John Doe</span>
                    </div>
                    <div className="buttons">
                        <button>Follow</button>
                        <button>Ignore</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <span>Latest Activies</span>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://static01.nyt.com/newsgraphics/2021/10/25/neopets/0f0c649f19af6ef52cef47e2ff5b5deba53b6093/top-3-species/shoyru_green.png" alt="" />
                        <p>
                        <span>John Doe</span> liked an image
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://static01.nyt.com/newsgraphics/2021/10/25/neopets/0f0c649f19af6ef52cef47e2ff5b5deba53b6093/top-3-species/shoyru_green.png" alt="" />
                        <p>
                        <span>John Doe</span> liked an image
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://static01.nyt.com/newsgraphics/2021/10/25/neopets/0f0c649f19af6ef52cef47e2ff5b5deba53b6093/top-3-species/shoyru_green.png" alt="" />
                        <p>
                        <span>John Doe</span> liked an image
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="item">
                <span>Currently online</span>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://static01.nyt.com/newsgraphics/2021/10/25/neopets/0f0c649f19af6ef52cef47e2ff5b5deba53b6093/top-3-species/shoyru_green.png" alt="" />
                        <div className="online" />
                        <span>John Doe</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://static01.nyt.com/newsgraphics/2021/10/25/neopets/0f0c649f19af6ef52cef47e2ff5b5deba53b6093/top-3-species/shoyru_green.png" alt="" />
                        <div className="online" />
                        <span>John Doe</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://static01.nyt.com/newsgraphics/2021/10/25/neopets/0f0c649f19af6ef52cef47e2ff5b5deba53b6093/top-3-species/shoyru_green.png" alt="" />
                        <div className="online" />
                        <span>John Doe</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightBar