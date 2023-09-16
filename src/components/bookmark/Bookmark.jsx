
const Bookmark = ({bookmark}) => {
   return (
      <div>
         <h4 className="text-2xl bg-slate-200 p-4 m-4 rounded-xl">{bookmark.title}</h4>
      </div>
   );
};

export default Bookmark;