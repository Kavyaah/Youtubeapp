import '../Styles/Categories.css'

const Categories = () => {
    let categories= [
    
            { link: "All" },
            { link: "Sports" },
            { link: "Comdey" },
            { link: "Fashion" },
            { link: "Vlogs" },
            { link: "Movies" },
            { link: "Travels " },
            { link: "Movies " },
            { link: "Bollywood " },
            { link: "Recenty Uploded  " },
    
    
    ]

   return ( 
        <div className="categories">
<ul>
 {
    categories.map((x)=>(
<li> <a href="categories">{x.link}</a></li>
 
 
))}
</ul>

        </div>
     );
}
 
export default Categories;