
import { Link } from "react-router-dom"


export const Popap = ({ negacion }) => {




    return (
        <div onClick={negacion} className="absolute flex justify-end items-center right-[1px] w-[200vh] h-[100vh] z-10 bg-black/70">
            <div className="cont1 bg-[#121212] rounded-tl-3xl w-[20vh] h-[100vh] ">
                <div className="flex justify-center gap-[2px]  items-center mx-3 mt-3 cursor-default">
                    <svg viewBox="0 0 256 256" width="30" height="30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128 70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007 7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276 3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289-34.406-21.148-86.853-27.273-127.548-14.92-5.278 1.594-10.852-1.38-12.454-6.649-1.59-5.278 1.386-10.842 6.655-12.446 46.485-14.106 104.275-7.273 143.787 17.007 4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z" fill="#1ED760" /></svg>
                    <p className="text-white text-lg font-semibold">Spotify</p>
                </div>

                <Link to={"/"}>
                    <div className="flex justify-start gap-2 mt-5 mx-3 bg-[#1A1A1A] py-3 rounded-md">                       
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="25" color="#ffffff" fill="none">
                            <path d="M10 18L14 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2.35139 13.2135C1.99837 10.9162 1.82186 9.76763 2.25617 8.74938C2.69047 7.73112 3.65403 7.03443 5.58114 5.64106L7.02099 4.6C9.41829 2.86667 10.6169 2 12 2C13.3831 2 14.5817 2.86667 16.979 4.6L18.4189 5.64106C20.346 7.03443 21.3095 7.73112 21.7438 8.74938C22.1781 9.76763 22.0016 10.9162 21.6486 13.2135L21.3476 15.1724C20.8471 18.4289 20.5969 20.0572 19.429 21.0286C18.2611 22 16.5537 22 13.1388 22H10.8612C7.44633 22 5.73891 22 4.571 21.0286C3.40309 20.0572 3.15287 18.4289 2.65243 15.1724L2.35139 13.2135Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                        </svg>
                        <p className="text-xl font-medium">Inicio</p>
                    </div>
                </Link>
                <Link to={'/allbum'} >
                    <div className="flex justify-start gap-2 mt-5 mx-2 bg-[#1A1A1A] py-3 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="25" color="#ffffff" fill="none">
                            <path d="M17.5 17.5L22 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                        </svg>
                        <p className="text-xl font-medium">Buscar</p>
                    </div>
                </Link>
                <div className="flex mt-10 mx-2 justify-between items-center">
                    <div className="flex items-center gap-3 bg-[#121212] p-1 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27" height="30" color="#ffffff" fill="none">
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                            <path d="M11 7.5H17M8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11 12H17M8 12C8 12.2761 7.77614 12.5 7.5 12.5C7.22386 12.5 7 12.2761 7 12C7 11.7239 7.22386 11.5 7.5 11.5C7.77614 11.5 8 11.7239 8 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11 16.5H17M8 16.5C8 16.7761 7.77614 17 7.5 17C7.22386 17 7 16.7761 7 16.5C7 16.2239 7.22386 16 7.5 16C7.77614 16 8 16.2239 8 16.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#ffffff" fill="none">
                        <path d="M12 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className="carta bg-[#1A1A1A] py-5 px-2 rounded-lg mx-3 mt-3">
                        <p className="text-[14px] font-semibold">Crea tu primera lista</p>
                        <p className="text-[12px] mt-3">Es muy facil, y te charemos una mano.</p>
                        <button className="bg-white mt-2 cans text-black py-[5px] px-6 rounded-full font-semibold duration-200 transition ease-in-out hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/50">Crear lista</button>
                    </div>
                    <Link className="flex justify-center" to={'/login'}>
                    <button className="bg-neutral-900 py-2 px-5 font-bold rounded-full ney  mt-3">Registrate</button>
                </Link>
            </div>
        </div>
    )
}