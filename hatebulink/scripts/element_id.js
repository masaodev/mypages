var date = new Date();

var links='';
for(var i=0; i<10; i++) {
    date.setDate(date.getDate()-1);
    var y = date.getFullYear();
    var m = ("0"+(date.getMonth() + 1)).slice(-2);
    var d =  ("0"+date.getDate()).slice(-2)
    var ymd = y + m + d; 
    links += '<a href="http://b.hatena.ne.jp/hotentry/it/' + ymd +'">' + ymd + 'のホットエントリー</a><br>';
}

var result = document.getElementById('result');
result.innerHTML = links;

