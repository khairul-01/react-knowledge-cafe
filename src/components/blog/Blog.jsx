import PropTypes from 'prop-types'
import { FaBookmark } from 'react-icons/fa'

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
   const {title,cover, author, author_img, reading_time, posted_date, hashtags, id} = blog
   return (
      <div className='mb-24 space-y-4'>
         <img className='w-full' src={cover} alt={`Cover pic of title ${title}`} />
         <div className='flex justify-between items-center'>
            <div className='flex items-center gap-6'>
               <img className='w-14' src={author_img} alt="" />
               <div>
                  <h5 className="text-2xl">{author}</h5>
                  <p>{posted_date}</p>
               </div>
            </div>
            <div>
               <span>{reading_time} min read</span>
               <button className='ml-3' onClick={()=>handleAddToBookmark(blog)}><FaBookmark/></button>
            </div>
         </div>
         <h2 className="text-3xl">{title}</h2>
         <p>
            {
               hashtags.map((hash, idx) => <span className='ml-3' key={idx}><a href="">#{hash}</a> </span>)
            }
         </p>
         <button onClick={()=>handleMarkAsRead(reading_time, id)} className='text-purple-400 underline font-bold'>Mark as Read</button>
      </div>
   );
};

Blog.propTypes = {
   blog: PropTypes.object.isRequired
}
export default Blog;