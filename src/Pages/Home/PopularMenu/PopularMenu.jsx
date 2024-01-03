import { useEffect, useState } from "react";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu]= useMenu();
    const popular = menu.filter(item=>item.category === 'popular');
    // const [menu, setMenu] = useState([]);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data=>{
    //         console.log('data length menu ',data.length);
    //         const popularItems = data.filter(item => item.category ==='popular');
    //         setMenu(popularItems)
    //     })
    // },[])
    return (
        <section className="mb-12">
            <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item =><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;