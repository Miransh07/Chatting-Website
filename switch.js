function about() {
        document.getElementById('about').style.display='flex';
        document.getElementById('home_text').style.display='none';
        document.getElementById('showcase').style.display='none';
        document.getElementById('login').style.display='none';
    }
    function home(){
        document.getElementById('about').style.display='none';
        document.getElementById('home_text').style.display='flex';
        document.getElementById('showcase').style.display='flex';
        document.getElementById('login').style.display='none';
        document.getElementById('chatpage').style.display='none';
}
function login(){
    document.getElementById('login').style.display='flex';
    document.getElementById('about').style.display='none';
    document.getElementById('home_text').style.display='none';
    document.getElementById('showcase').style.display='none';
    document.getElementById('chatpage').style.display='none';
}
function join(){
    document.getElementById('chatpage').style.display='flex';
    document.getElementById('login').style.display='none';
}