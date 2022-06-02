import React from "react";
import './About.css';

import Intersect from '../../util/Intersect.svg';
import Save from '../Save';
import IOS from '../../util/IOS.png';
import wind from '../../util/wind.png';
import Android from '../../util/Android.png';
import MacOS from '../../util/MacOS.png';
import Galka from '../../util/Galka.png';
import Line_skobka from '../Sign/Line_skobka.svg';
import Line_skobka_small from '../Sign/Line_skobka_small.svg';
import av from '../Sign/av.svg';
import Dec_2019 from '../Sign/Dec_2019.svg';
import av_test from '../Sign/av_test.svg';
import Nov_19 from '../Sign/Nov_19.svg';
import detect from '../Sign/detect.svg';
import Internet from '../Internet';
import line from '../../util/Line.png';
import gradient from '../../util/gradient.svg';
import Pic from '../../util/kolonka.svg';

export default function About() {
    return (
        <>
            <section className="about">
                <div className="mobile_desktop">
                    <img className="intersect" alt="Intersect" src={Intersect}/>

                    <div className="mobile_desktop_text">
                        <h1 className="text_header">Don’t let malware defeat you</h1>
                        <img className="line" alt="line" src={line}/>
                        <p className="text_header_second ">Protect your devices with anti-malware made for gamers.</p>

                        <ul className="list">
                            <div className="correct_position">
                                <img className="galka" alt="galka" src={Galka}/>
                                <li className="text_1"><span className="bold_title">Gaming mode:</span>
                                    <span className="text_2"> Ensures optimal
                                    PC
                                    performance while you play</span>
                                </li>
                            </div>
                            <div className="correct_position">
                                <img className="galka" alt="galka" src={Galka}/>
                                <li className="text_2"><span className="bold_title">100% detection rate:</span> Never
                                    misses a  threat
                                </li>
                            </div>
                            <div className="correct_position">
                                <img className="galka" alt="galka" src={Galka}/>
                                <li className="text_2"><span
                                    className="bold_title">Cutting-edge cybersecurity:</span> Runs on
                                    AI
                                    overseen by world-leading threat analysts
                                </li>
                            </div>
                            <div className="compatible_with">Compatible with:</div>
                            <img className="window image_compatible" alt="window" src={wind}/>
                            <img className="MacOS image_compatible" alt="MacOS" src={MacOS}/>
                            <img className="Android image_compatible" alt="Android" src={Android}/>
                            <img className="IOS image_compatible" alt="IOS" src={IOS}/>
                        </ul>
                    </div>
                    {/*mobile_desktop_text чтобы не переворачивался*/}
                </div>
                {/*mobile_desktop переворачиваем */}
            </section>

            {/*--------------------------------------*/}
            <div className="save_internet">
                <Save/>
                <Internet/>
            </div>
            {/*--------------------------------------*/}
            <p className="cyber_title">Cybersecurity you can depend on</p>
            <div className="section_rotate">
            {/*----------------------------------------*/}
            <section className="gaming">
                <h2 className="gaming_title">Gaming mode</h2>
                <h3 className="gaming_subtitle">We won’t disrupt you while you are gaming.</h3>
                <ul className="list">
                    <div className="correct_position">
                        <img className="galka" alt="galka" src={Galka}/>
                        <li className="text_1 game">No virus scans</li>
                    </div>
                    <div className="correct_position">
                        <img className="galka" alt="galka" src={Galka}/>
                        <li className="text_2 game">No software updates</li>
                    </div>
                    <div className="correct_position">
                        <img className="galka" alt="galka" src={Galka}/>
                        <li className="text_3 game">No notifications</li>
                    </div>
                    <div className="correct_position">
                        <img className="galka" alt="galka" src={Galka}/>
                        <li className="text_3 game">Minimal CPU impact</li>
                    </div>
                </ul>
            </section>
            {/*<section className="triangle">
                <svg viewBox="0 0 360 52">
                    <path d="  M 360,0
                                L 0,52
                                L 0,52
                                L 360,52
                                L 360,0 Z" className="shape"/>
                </svg>
            </section>*/}
                <section className="Cyber">
                    <section className="kolonka">
                        <div className="kolonka_cower">
                            {/*<img alt="Kolonka" src = {Pic} />*/}
                            {/*________________*/}
                            <div className="parallelogram">
                                <div className="content">
                                    <img alt="Kolonka" src = {Pic} />
                                </div>
                            </div>


                        </div>
                    </section>
                </section>

            <section className="malware">
                <h2 className="malware_title">
                    Malware detection that can’t be beat
                </h2>
                <h3 className="malware_subtitle">Powered by Artifical Intelligence and over 1500 threat analysts.</h3>
                <div className="foto">
                    <img className="malware_detection" src={detect} alt="100% detection in test"/>
                    <div className="connect_skobka">
                        <img className="skobka_fierst" alt="скобка" src={Line_skobka_small}/>
                        <img className="skobka" alt="скобка" src={Line_skobka}/>
                        <img className="skobka_second" alt="скобка" src={Line_skobka_small}/>
                    </div>

                    <div className="position_av">
                        <img className="av" alt="av" src={av}/>
                        <img className="data_dec_2019" alt="12.2019" src={Dec_2019}/>
                        <img className="av_test" alt="av" src={av_test}/>
                        <img className="nov_19" alt="av" src={Nov_19}/>
                    </div>

                </div>
            </section>



            </div>

             <section className="empty_black">
                          {/*   <div className="black"> </div> */}
                        </section>
        </>
    )
}
