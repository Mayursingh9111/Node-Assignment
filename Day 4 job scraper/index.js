const axios =require("axios")
const fs = require("fs")
const cheerio = require("cheerio")
const xlsx = require("xlsx")


const scrapper = async()=>{
    try{
        
        
        // for(let i=1 ; i<10 ;i++){
        //     const res = await axios.get(`https://www.timesjobs.com/candidate/job-search.html?from=submit&luceneResultSize=25&postWeek=60&searchType=Home_Search&cboPresFuncArea=35&pDate=Y&sequence=2&startPage=${i}`)
            
            
        //     const data =  res.data;
        //     fs.appendFile("data.txt",data.toString(),(err)=>{
        //         if(err){
        //             console.log("Error in fetching",err);
        //             return 
        //         }
        //     })
        //     console.log(data);
        // }
        const htmlData = fs.readFileSync("data.txt")
        const $ = cheerio.load(htmlData.toString());
        const cards = $(".clearfix");
       
        
        const card=[];
        cards.each((index,element)=>{
            const job_title=$(element).find(".heading-trun").text().trim()
            const company_name =$(element).find(".joblist-comp-name").text().trim()
            const location = $(element).find(".location-tru").text().trim()
            const des = $(element).find(".job-description__").text().trim()
           const comp = company_name.split(" ")[0];
           const loc = location.split(" ")[0];
           
           
            
            if(job_title && company_name && location && des){
                card.push({
                    JobTitle:job_title.replaceAll("\n",""),
                    JobDescription:des.replaceAll("\n",""),
                    CompanyName:comp,
                    Location:loc

                })
            }

        })
    //    fs.writeFile("job.json",JSON.stringify(card),(err)=>{
    //     if(err){
    //         console.log(err);
    //         return  
    //     }
    //     console.log("data save successfully");
        
    //    })


    const workbook = xlsx.utils.book_new();
    const sheet = xlsx.utils.json_to_sheet(card);
    xlsx.utils.book_append_sheet(workbook,sheet,"cards");
    xlsx.writeFile(workbook,"Jobs.xlsx")
        

         
    }catch(err){
        console.log(err);
        
    }
}
scrapper()