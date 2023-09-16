import profile from '../../assets/images/profile.png'

const Header = () => {
   return (
      <header className='flex justify-between items-center py-4 my-8 border-b-2'>
         <h1 className='text-4xl text-center p-3'>Knowledge Cafe</h1>
         <img src={profile} alt="" />
      </header>
   );
};

export default Header;