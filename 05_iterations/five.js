const coding = ["js" ,"ruby", "java", "c++" ,"python"]

coding.forEach(function ( val ){
    // console.log(val)
})//call back function he to name likhne ke jarurat nahi 

coding.forEach((item) =>{
    // console.log(item);
})

function printMe(item)
{
    console.log(item)
}
// coding.forEach(printMe)


coding.forEach((item , index ,arr)=>{/* 3 paramter le skte he sirf item he nahi hota paramter me*/
    // console.log(item , index, arr)
})

const myCoding = [
    {
        languageName :"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"C++",
        languageFileName:"cpp"
    },
    {
        languageName:"rb",
        languageFileName:"ruby"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName)
    console.log(item.languageName)
})