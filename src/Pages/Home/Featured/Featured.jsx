import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import FeaturedImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="Check it out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={FeaturedImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis sit eaque quasi corporis ratione aperiam est distinctio tenetur optio. Excepturi fugit nisi dolorum quas aliquid beatae sapiente atque alias ullam, iure sed consequuntur natus quia deleniti eveniet a quisquam temporibus ipsum fuga! Tempore, ad minus architecto maxime et eos! Labore.</p>
                    <button className="btn  btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;