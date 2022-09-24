//khai báo module express framework
const express = require('express');
const app = express();


//khai báo module path
//=> để set đường dẫn thư mục chứa view
const path = require('path');


//khai báo server port
const port = process.env.PORT || 3000;
//set đường dẫn thư mục chứa view
app.set('views', path.join(__dirname, 'views'));

// set viewengine (template engine)
//=> giúp gõ code của backend trong frontend dễ dàng hơn
// hbs: handlebars => nếu thay đổi view engine khác thì thay đổi giá trị này
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index")
}); 

app.get("/mobile", (req, res) => {
    res.render("mobile")
});

app.get("/laptop", (req, res) => {
    res.render("laptop");
  });

//chạy server bằng listen port
app.listen(port);
