const express = require('express');

const morgan=require('morgan');
const mongoose=require('mongoose');
const app=express();
const methodOverride=require('method-override');
const Blog=require('./models/blog.js');

const dbURI = `mongodb+srv://afham:afham1234@nodetuts.opiyiwf.mongodb.net/blogs-data`;
mongoose.connect(dbURI).then(()=>{
    app.listen(3000,()=>{
        console.log('listening');
    });
}).catch((err)=>{
    console.log(err)
})
app.set('view engine','ejs');

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    
    res.redirect('/blogs');
    

})
app.get('/blogs',(req,res)=>{
    const blogs = [
        // {
        //   title: "Exploring the Wonders of Nature",
        //   snippet: "Discover the breathtaking beauty of nature's wonders and embark on an adventure through lush forests, majestic mountains, and serene lakes."
        // },
        // {
        //   title: "The Art of Mindfulness: Finding Peace in the Present Moment",
        //   snippet: "Learn how to cultivate mindfulness and embrace the present moment with practices that promote inner peace, clarity, and emotional well-being."
        // },
        // {
        //   title: "Mastering the Basics: A Beginner's Guide to Cooking",
        //   snippet: "Unlock the secrets of the kitchen and learn essential cooking techniques, recipes, and tips to elevate your culinary skills from novice to pro."
        // },
        // {
        //   title: "Navigating the Digital Landscape: Tips for Online Safety and Security",
        //   snippet: "Arm yourself with knowledge and strategies to protect your online identity, privacy, and data in an increasingly interconnected digital world."
        // },
        // {
        //   title: "The Power of Positive Thinking: Cultivating a Mindset for Success",
        //   snippet: "Explore the transformative effects of positive thinking and learn how to harness its power to overcome obstacles, achieve goals, and live a fulfilling life."
        // }
      ];
    Blog.find().sort({createdAt:-1}).then((result=>{
        res.render('index',{title:'All Blogs',blogs:result});
    }))
})
app.post('/blogs',(req,res)=>{
    const blog=new Blog(req.body);
    blog.save()
.then(()=>{
    res.redirect('/blogs');
}).catch((err)=>{
    console.log(err);
})})


app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create your Blog'});
})


app.get('/blogs/:id',(req,res)=>{
    const id=req.params.id;
    Blog.findById(id).then((result)=>{
        res.render('details',{title:"Details",blogs:result})
    }).catch((err=>{
        res.render('404',{title:404});
    }))
})

app.get('/blogs/:id/edit',(req,res)=>{
    const id=req.params.id;
    
    Blog.findById(id).then((result)=>{
        res.render('edit',{title:'Edit',blogs:result});
        
    }).catch((err)=>{
        console.log(err);
    })
})
app.put('/blogs/:id',(req,res)=>{
    const id=req.params.id;
    const newData=req.body;
    Blog.findByIdAndUpdate(id,newData,{new:true})
    .then((updatedData)=>{
        res.redirect(`/blogs/${updatedData._id}`)
    }).catch((err)=>{
        console.log(err)
    })
})






app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            
                res.json({ redirect: '/blogs' }); // Send JSON response with redirect property
            
            })
        
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'An error occurred during deletion' }); // Handle errors
        });
});




app.get('/about',(req,res)=>{
    res.render('about',{title:'About Us'});
})cd..

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
}
)


