import product from "@/models/product"

import connectDb from "@/middleware/moongose"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const  handler=async(req,res)=>{
    let products=await product.find()
    let tshirts={}
    for(let item of products)
    {
        if(item.title in tshirts)
        {}
        else
        {
            tshirts[item.title]=JSON.parse(JSON.stringify(item))
            if(item.availableQty>0)
            {
                tshirts[item.title].color=[item.color]
                tshirts[item.title].size=[item.size]
            }
        }
    }
    res.status(200).json({ products })
}

export default  connectDb(handler)

   
  
  