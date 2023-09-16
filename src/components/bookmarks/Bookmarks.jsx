import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
   return (
      <div className="md:w-1/3 bg-gray-100 ml-2 mt-2 pt-4">
         <div>
            <h3 className="text-3xl m-3 p-3 text-center">Reading Time: {readingTime}</h3>
         </div>
         <h4 className="text-2xl text-center">Bookmarked Blogs: {bookmarks.length}</h4>
         {
            bookmarks.map((bookmark, i) => <Bookmark key={i} bookmark={bookmark}></Bookmark>)
         }
      </div>
   );
};

export default Bookmarks;