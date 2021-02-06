const fs=require('fs');
const path=require('path');
const p=path.join(path.dirname(require.main.filename),'data','products.json');

const getProductFromFile = cb =>
{
    fs.readFile(p,(err,filecontent)=>
    {
        if(err)
        {
            return cb([]);
        }
        return cb(JSON.parse(filecontent));
    })
    

};
module.exports=class Product
{
    
    constructor(title,imageUrl,price,description)
    {
        this.title=title;
        this.imageUrl=imageUrl;
        this.price=price;
        this.description=description;
        
    }

    
    save()
    {
        this.id = Math.random().toString();
        getProductFromFile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>
            console.log(err));
         });  
    }
   static fetchAll(cb)
    { 
        getProductFromFile(cb);

    }
    static findById(id,cb){
        getProductFromFile(products=>{
            const Product=products.find(p=>p.id===id);
             cb(Product);
        })

    }
       
}