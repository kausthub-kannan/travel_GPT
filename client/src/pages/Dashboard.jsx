import React from 'react';
import { dashboardData, recentTransactions } from '../data/dummy';
import "./Dashboard.css";
import avatar from '../data/avatar.jpg';



const Dashboard = () => {


    return (

        <div className="flex  justify-center flex-row" style={{ height: "78vh" }}>
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-full flex justify-between">

                <div className=" m-2.5 p-4 pt-0 shadow-lg rounded-2xl">

                    <div className="flex justify-between">
                        <p className="text-xl font-semibold">Profile</p>
                    </div>

                    <img className=" h-40  md:w-96 border-4 rounded-2xl" src={avatar} alt="" />
                    <div className="">
                        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-2 rounded-2xl">
                            <div className="mt-0 mb-10 ">
                                {/* w-72 */}
                                {recentTransactions.map((item) => (
                                    <div key={item.id} className="flex justify-between mt-4 gap-4">
                                        <p className="text-sm text-gray-400">{item.desc}</p>


                                        <p style={{ background: "#F0F0F0", padding: "5px", display: "inline-block", borderRadius: "20px", border: "3px solid linear-gradient(21deg, #10abff, #1beabd)" }}> hellooooooo</p>

                                    </div>
                                ))}


                            </div>
                            <input type="submit" value="Edit Profile" style={{ textDecoration: "underline", color: "blue" }}></input>
                        </div>
                    </div>


                </div>

                <div className=" m-2.5 p-4 pt-0 shadow-lg rounded-2xl">

                    <div className="flex justify-between">
                        <p className="text-xl font-semibold mb-6">Month Recommendation</p>
                    </div>


                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p- rounded-2xl">
                        <div className="mt-0 mb-10 ">


                            <div className="boxxscroll">
                                {dashboardData.map((item) => (

                                    <div key={item.key} className="boxx">
                                        <p className="font-semibold text-lg">{item.title}</p>

                                    </div>
                                ))}
                            </div>


                            <div className="flex justify-between mt-4 gap-4">

                                <form action="/Recommendation" method='POST'>
                                    <input type="text" style={{ background: "#F0F0F0", padding: "5px", display: "inline-block", borderRadius: "20px", border: "3px solid linear-gradient(21deg, #10abff, #1beabd)" }}></input>
                                </form>
                                <form action="/Recommendation" method='POST'>
                                    <input type="submit" value="ADD" style={{ background: "#0FFF50", padding: "5px", display: "inline-block", borderRadius: "10px" }} />
                                </form>
                            </div>



                        </div>
                    </div>



                </div>



                <div className=" m-2.5 p-4 pt-0 shadow-lg rounded-2xl">

                    <div className="flex justify-between">
                        <p className="text-xl font-semibold mb-6">Weather Recommendation</p>
                    </div>


                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p- rounded-2xl">
                        <div className="mt-0 mb-10 ">


                            <div className="boxxscroll">
                                {dashboardData.map((item) => (

                                    <div key={item.key} className="boxx">
                                        <p className="font-semibold text-lg">{item.title}</p>

                                    </div>
                                ))}
                            </div>


                            <div className="flex justify-between mt-4 gap-4">

                                <form action="/Recommendation" method='POST'>
                                    <input type="text" style={{ background: "#F0F0F0", padding: "5px", display: "inline-block", borderRadius: "20px", border: "3px solid linear-gradient(21deg, #10abff, #1beabd)" }}></input>
                                </form>
                                <form action="/Recommendation" method='POST'>
                                    <input type="submit" value="ADD" style={{ background: "#0FFF50", padding: "5px", display: "inline-block", borderRadius: "10px" }} />
                                </form>
                            </div>



                        </div>
                    </div>



                </div>


                <div className=" m-2.5 p-4 pt-0 shadow-lg rounded-2xl">

                    <div className="flex justify-between">
                        <p className="text-xl font-semibold mb-6">Food Recommendation</p>
                    </div>


                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p- rounded-2xl">
                        <div className="mt-0 mb-10 ">


                            <div className="boxxscroll">
                                {dashboardData.map((item) => (

                                    <div key={item.key} className="boxx">
                                        <p className="font-semibold text-lg">{item.title}</p>

                                    </div>
                                ))}
                            </div>


                            <div className="flex justify-between mt-4 gap-4">

                                <form action="/Recommendation" method='POST'>
                                    <input type="text" style={{ background: "#F0F0F0", padding: "5px", display: "inline-block", borderRadius: "20px", border: "3px solid linear-gradient(21deg, #10abff, #1beabd)" }}></input>
                                </form>
                                <form action="/Recommendation" method='POST'>
                                    <input type="submit" value="ADD" style={{ background: "#0FFF50", padding: "5px", display: "inline-block", borderRadius: "10px" }} />
                                </form>
                            </div>



                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Dashboard;







