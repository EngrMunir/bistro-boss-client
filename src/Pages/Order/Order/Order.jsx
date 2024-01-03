import { useState } from 'react';
import Cover from '../../../Shared/Cover/Cover';
import orderCoverImg from '../../../assets/shop/order.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import FoodCard from '../../../Componants/FoodCard/FoodCard';

const Order = () => {
    const [tabIndex, setTabIndex]= useState(0);
    const [menu] = useMenu();
    const popular = menu.filter(item=>item.category === 'popular');
    const desserts = menu.filter(item=>item.category === 'desserts');
    const soup = menu.filter(item=>item.category === 'soup');
    const salad = menu.filter(item=>item.category === 'salad');
    const pizza = menu.filter(item=>item.category === 'pizza');
    const offered = menu.filter(item=>item.category === 'offered');
    return (
        <div>
            <Cover img={orderCoverImg} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                    {
                        salad.map(item=><FoodCard
                        key={item._id}
                        item={item}
                        ></FoodCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;