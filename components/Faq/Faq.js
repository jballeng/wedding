

const Faq =  ({ posts }) => {
   
console.log(posts)
   
    return (
        posts.map((post) => {
            return(
                <div key={post._id}>
                    <div>
                        <span key={post.title}>
                            {post.title}
                        </span>
                    </div>
                    <div>
                        <span key={post.body}>
                            {post.body}
                        </span>
                    </div>
                </div>
                
            )
           
})
       
    )
}
export default Faq

