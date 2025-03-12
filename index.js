// ReactDOM.render(<h1>Hello Everyone</h1>, document.getElementById("root"))
function Navbar() {
    return (
        <div className="nav">
            <div className="logo">
                Intect
            </div>
            <ul id="tabs">
                <li onClick={home}>Home</li>
                <li>Notification</li>
                <li onClick={about}>About us</li>
            </ul>
        </div>
    )
}
function Body() {
    return (
        <div className="container">
            <Navbar />
            <div id="home_text">
                <span>Get in Touch ____</span>
                <ul>
                    <li className="c_text">Your personal social website where you can interect with other and increase your connectivity!</li>
                    <li id="start" onClick={login}>Let's get Start</li>
                    <button onClick={login}>Let's get Start</button>
                </ul>
            </div>
            <div id="showcase">
                <span>
                    <img src='Chat2.jpg' />
                </span>
                <span>
                    <img src='Chat0.jpg' />
                </span>
                <span>
                    <img src='Chat3.jpg' />
                </span>
            </div>
            <div id="about">
                <span>
                    Intect its not an project its basically an idea of two person who are non interective and non-socialise but they belive that being socialise and get interect with others is really neccessary for our growth and they also think that they not the only one who faceing this issue or we can say hesitate to get interect with other it might also others problem too so, they decides to build an website and In campuse websit4e where people can interect with  each other
                </span>
                <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium dolorum quo facilis, architecto iusto deleniti,
                    dolorem hic labore suscipit quasi eaque totam ipsam mollitia nostrum nihil laboriosam delectus quae. Nihil quam
                    optio repudiandae rerum! Aut laboriosam sint laudantium tenetur tempora aspernatur possimus, sed repudiandae ullam
                    officiis qui eum sunt expedita minus, hic, odit veritatis incidunt neque? Quas ipsa a possimus excepturi fuga!
                </span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolorem delectus sit animi quis fugiat dolor
                    fuga adipisci mollitia cumque. Eveniet voluptatum quod animi alias! Ea labore incidunt quo nihil
                </span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias soluta fugit eaque at, rerum aut
                    autem corrupti pariatur, labore optio excepturi eum. Dignissimos accusantium totam natus, sapiente, ex laborum
                    architecto beatae fuga eveniet culpa, quo dicta quidem sequi error veritatis eos repellat facere!
                </span>
            </div>
            <div id="login">
                <form className="input_system">
                    <label id="username" for="name">Username : </label>
                    <input type="text" id="name" name="name" placeholder="Enter username"></input>
                </form>
                <span onClick={join}>
                    <button onClick={getText}>Join</button>
                </span>
            </div>
            <div id="chatpage">
                <h2>CosmoSphere</h2>
                <div id="chat">
                </div>
                <div id="message">
                    <input type="text" id="messageInput" name="name" placeholder="Type your message....."></input>
                    <button onClick={sendMessage}>Send</button>
                </div>
                <div id='exit'>
                    <a href="/index.html"><i>Exit &gt; </i></a>
                </div>
            </div>
        </div>
    )
}
ReactDOM.render(<Body />, document.getElementById('body'));
ReactDOM.render(<Navbar />,

    document.getElementById('Nav'));