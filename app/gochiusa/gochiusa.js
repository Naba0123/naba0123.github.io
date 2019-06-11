var next_story;
var next_day;

function gochiusa(year, month, day) {
    now = new Date();
    start = new Date(year, month - 1, day);
    msec = now.getTime() - start.getTime();
    next_story = Math.floor((msec / (1000 * 60 * 60 * 24) - 1) / 7) + 2;
    // まだ放映開始前の場合は、羽数を第１羽にして、放送日は開始日にする
    if (next_story < 1) {
        next_story = 1;
        next_day = start;
    } else {
        next = start.getTime() + (next_story - 1) * 7 * (1000 * 60 * 60 * 24);
        next_day = new Date();
        next_day.setTime(next);
    }
    document.write('第' + next_story + '羽 (' + next_day.getFullYear() + '/' + (next_day.getMonth() + 1) + '/' + next_day.getDate() + ')');
}

function gochiusa_twitter(title, url) {
    str = '次回の' + title + 'は第' + next_story + '羽（' + (next_day.getMonth() + 1) + '月' + next_day.getDate() + '日）です。';
    uri_str = encodeURI(str);
    document.write('<a href="https://twitter.com/intent/tweet?button_hashtag=gochiusa&text=' + uri_str + '" class="twitter-hashtag-button" data-size="large" data-url="http://naba.biz/app/gochiusa/index.html">#gochiusa をつぶやく</a>');
}
