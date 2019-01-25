var template = "<article>\n\
    <img src='data/img/SLUG.jpg' alt='NAME'>\n\
    <h3>#POS. NAME</h3>\n\
    <ul>\n\
    <li><span>Author:</span> <strong>AUTHOR</strong></li>\n\
    <li><span>Twitter:</span> <a href='https://twitter.com/TWITTER'>@TWITTER</a></li>\n\
    <li><span>Website:</span> <a href='http://WEBSITE/'>WEBSITE</a></li>\n\
    <li><span>GitHub:</span> <a href='https://GITHUB'>GITHUB</a></li>\n\
    <li><span>More:</span> <a href='http://js13kgames.com/entries/SLUG'>js13kgames.com/entries/SLUG</a></li>\n\
    </ul>\n\
</article>";
var content = '';
for(var i=0; i<games.length; i++) {
    var entry = template.replace(/POS/g,(i+1))
        .replace(/SLUG/g,games[i].slug)
        .replace(/NAME/g,games[i].name)
        .replace(/AUTHOR/g,games[i].author)
        .replace(/TWITTER/g,games[i].twitter)
        .replace(/WEBSITE/g,games[i].website)
        .replace(/GITHUB/g,games[i].github);
    entry = entry.replace('<a href=\'http:///\'></a>','-');
    content += entry;
};
document.getElementById('content').innerHTML = content;
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/pwa-examples/js13kpwa/sw.js');
};