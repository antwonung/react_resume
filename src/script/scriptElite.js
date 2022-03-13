let elite = "";

window.addEventListener('keydown', function (e) {
    if(elite.length == 0)
    {
        elite = e.key.toString();
    }
    else{
        elite = elite + e.key.toString();
    }
    
    if(elite.length == 4)
    {
        if(elite == "1337")
        {
            document.getElementById('eliteModal').click();
        }
        elite = "";
    }
    
});