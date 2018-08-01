var texts = [];
var config = 0;
//imgArr = ['src/pic/1.jpg', 'src/pic/2.jpg', 'src/pic/3.png', 'src/pic/4.jpg', 'src/pic/5.jpg', 'src/pic/6.jpg', 'src/pic/7.jpg', 'src/pic/8.jpg', 'src/pic/9.jpg', 'src/pic/10.jpg', 'src/pic/11.jpg', 'src/pic/12.jpg', 'src/pic/13.jpg', 'src/pic/14.jpg', 'src/pic/15.jpg', 'src/pic/16.jpg', 'src/pic/17.jpg', 'src/pic/18.jpg', 'src/pic/19.jpg', 'src/pic/20.jpg'];
imgArr = ['src/pic/a.jpg', 'src/pic/b.jpg', 'src/pic/c.jpg', 'src/pic/d.jpg', 'src/pic/e.jpg', 'src/pic/f.jpg', 'src/pic/g.jpg', 'src/pic/h.jpg', 'src/pic/i.jpg', 'src/pic/j.jpg'];
$.ajax({
    type: "get",
    url: "config.txt",
    dataType: "text",
    async: true
}).done(function (data) {
    config = parseInt(data);
    console.log(config);
});
$.ajax({
    type: "get",
    url: "1.txt",
    dataType: "text",
    async: true
}).done(function (data) {
    texts = data.split(";");
    var a = parseInt(Math.random() * (texts.length - 1));
    var c = "";
    console.log(a);
    $("#main").text(texts[a]);
    if (a+1 <= config) {
        //$("img").attr("src", imgArr[a]);
        a++;
        c = "src/pic/" + a + ".jpg";
        console.log(c);
        $("img").attr("src", c);
    } else {
        var b = parseInt(Math.random() * (imgArr.length - 1));
        console.log(imgArr[b]);
        $("img").attr("src", imgArr[b]);
    }
});
