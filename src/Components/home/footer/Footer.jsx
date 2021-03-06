import React, { useState } from 'react';
import style from './footer.module.css';
import FirstMenu from './FirstFooterMenu'
import FooterMenu from './FooterMenu';
import ContactMenu from './ContactMenu';
import CitiesListComponent from '../../ui/CitiesListComponent';
import pic from '../../../Images/cities/Egypt.jpg';
export default function Footer() {
    const [secMenu, setSecMenu] = useState([
        'التخصص', 'المنطقة', 'التامين', 'المستشفي', 'المركز'
    ])
    const [thirdMenu, setThirdMenu] = useState(['انضم الي اطباء فيزيتا'])
    const [fourthMenu, setFourthMenu] = useState([
        'اتصل بينا', 'شروط الاستحدام', 'اتفاقية الخصوصية', 'اتفاقية الخصوصية للاطباء'
    ]); 
    return <>
    <div className={style.part7} style={{'width': '100%', 'overflow': 'hidden'}}>
        <div className="row justify-content-center">
            <div className="col-11 col-md-12 col-lg-10">
                <div className="row py-5 justify-content-center">
                    {/* firstFooterMenu */}
                    <FirstMenu />
                    {/* hena h7od l 3 menus de l ola l col=col2 w data=secMenu 
                    w title= ab7s 3n tare2*/}
                    <FooterMenu col="col2" data={secMenu} title="ابحث عن طريق"/>
                    {/* hena h7od l 3 menus de l ola l col=col3 w data=thirdMenu 
                    w title= hl nta 6beb*/}
                    <FooterMenu col="col3" data={thirdMenu} title="هل انت طبيب؟"/>

                    {/* hena h7od l 3 menus de l ola l col=col4 w data=fourthMenu 
                    w title= t7tag ll mosa3da*/}
                    <FooterMenu col="col4" data={fourthMenu} title=" تحتاج للمساعدة؟"/>
                    {/* hena l contactMenu */}
                    <ContactMenu />
                    
                    <div className={`col-8 d-flex d-md-none ${style.col6}`}
                    style={{'borderTop': '1px solid rgb(243, 243, 243)'}}>
                        <li className="nav-item dropdown" style={{'border': 'none'}}>
                            <a className="nav-link dropdown-toggle" href="#" 
                            id="navbarDropdownMenuLink" role="button" 
                            data-bs-toggle="dropdown">
                            <img src={pic} 
                            className="img-fluid" alt=""/>
                            <span>مصر</span>    
                            </a>
                            <CitiesListComponent />
                            
                        </li>
                        <li style={{'alignSelf': 'flex-end', 'border': '1px solid rgb(243, 243, 243)'}}>
                            <button type="button" className="btn"
                            style={{'color': 'rgb(243, 243, 243)'}}>
                                English
                            </button>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>;
}
