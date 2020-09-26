var bodyParser   = require("body-parser"),
methodOverride   = require("method-override"),
expressSanitizer = require("express-sanitizer"),
mongoose         = require("mongoose"),
express          = require("express"),
app= express();

//MONGO setup
mongoose.connect('mongodb://localhost:27017/restful_blog_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify : false
})  

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));

//model config
var blogSchema= new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default:Date.now}
});
var Blog = mongoose.model("Blog", blogSchema)

//restful routes
app.get("/", function(req, res){
    res.redirect("/blogs");
})

//index
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        }else{
            res.render("index", {blogs: blogs});
        }
    }) 
});

//new
app.get("/blogs/new", function(req, res){
    res.render("new");
})

//create
app.post("/blogs", function(req, res){
    req.body.blog.body= req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        }else{
            res.redirect("/blogs");
        }
    })
})

//show
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blog");
        }else{
            res.render("show", {blog: foundBlog})
        }
    })
})

//edit route
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else{
            res.render("edit", {blog: foundBlog});
        }
    })
})

//update route
app.put("/blogs/:id", function(req, res){
    console.log(req);
    req.body.blog.body= req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect("/blogs");
        }else{
            res.redirect("/blogs/"+ req.params.id);
        }
    })
})

//delete route
app.delete("/blogs/:id", function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/blogs");
        } else{
            res.redirect("/blogs");
        }
    })
})

const port = 3000;
app.set("port", process.env.port || port);  // set express to use this port
app.listen(process.env.PORT || port, () => {
    console.log(`Server running on port: ${port}`);
  });