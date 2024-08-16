export const Footer = () => {
    return(
        <footer class=" text-white py-8 mx-3 flex flex-col items-start mt-28 mb-20">
                <div class="w-full  mx-auto flex justify-around">
                    <div class="text-left contenedorx">
                        <h2 class="text-lg font-bold mb-2 opacity-85">Empresa</h2>
                        <ul class="list-none space-y-2">
                            <li><a href="https://www.spotify.com/co-es/about-us/contact/" class="hover:underline opacity-50">Acerca de</a></li>
                            <li><a href="https://www.lifeatspotify.com/" class="hover:underline opacity-50">Empleo</a></li>
                            <li><a href="https://newsroom.spotify.com/" class="hover:underline opacity-50">For the Record</a></li>
                        </ul>
                    </div>

                    <div class="text-left mt-0 contenedorx">
                        <h2 class="text-lg font-bold mb-2 opacity-85">Comunidades</h2>
                        <ul class="list-none space-y-2">
                            <li><a href="https://artists.spotify.com/home" class="hover:underline opacity-50">Para artistas</a></li>
                            <li><a href="https://developer.spotify.com/" class="hover:underline opacity-50">Desarrolladores</a></li>
                            <li><a href="https://ads.spotify.com/en-US/" class="hover:underline opacity-50">Publicidad</a></li>
                            <li><a href="https://investors.spotify.com/home/default.aspx" class="hover:underline opacity-50">Inversores</a></li>
                            <li><a href="https://spotifyforvendors.com/" class="hover:underline opacity-50">Proveedores</a></li>
                        </ul>
                    </div>

                    <div class="text-left mt-0 contenedorx">
                        <h2 class="text-lg font-bold mb-2 opacity-85">Enlaces útiles</h2>
                        <ul class="list-none space-y-2">
                            <li><a href="https://support.spotify.com/co-es/" class="hover:underline opacity-50">Asistencia</a></li>
                            <li><a href="https://www.spotify.com/co-es/download/windows/" class="hover:underline opacity-50">App gratis para móvil</a></li>
                        </ul>
                    </div>

                    <div class="text-left mt-0 contenedorx">
                        <h2 class="text-lg font-bold mb-2 opacity-85">Planes de Spotify</h2>
                        <ul class="list-none space-y-2">
                            <li><a href="https://www.spotify.com/co-es/premium/?ref=spotifycom_footer_premium_individual" class="hover:underline opacity-50">Premium Individual</a></li>
                            <li><a href="https://www.spotify.com/co-es/duo/?ref=spotifycom_footer_premium_duo" class="hover:underline opacity-50">Premium Duo</a></li>
                            <li><a href="https://www.spotify.com/co-es/family/?ref=spotifycom_footer_premium_family" class="hover:underline opacity-50">Premium Familiar</a></li>
                            <li><a href="https://www.spotify.com/co-es/student/?ref=spotifycom_footer_premium_student" class="hover:underline opacity-50">Premium para Estudiantes</a></li>
                            <li><a href="https://www.spotify.com/co-es/free/?ref=spotifycom_footer_free" class="hover:underline opacity-50">Spotify Free</a></li>
                        </ul>
                    </div>

                    
                </div>
                <hr className="bg-white w-full mt-5 opacity-30" />
                <div class="flex justify-between w-full mt-10 f-col">
                        <p>&copy; 2024 Spotify AB</p>
                        <div className="flex gap-2">
                         <svg className="bg-[#1A1A1A] p-3 rounded-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="66" stroke-dashoffset="66" d="M12 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;132"/></path><path stroke-dasharray="26" stroke-dashoffset="26" d="M12 8C14.20914 8 16 9.79086 16 12C16 14.20914 14.20914 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="26;0"/></path></g><circle cx="17" cy="7" r="1.5" fill="#ffffff" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" values="0;1"/></circle></svg>
                         <svg className="bg-[#1A1A1A] p-3 rounded-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256"><g fill="#ffffff"><path d="M208 216h-48L48 40h48Z" opacity=".2"/><path d="m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z"/></g></svg>
                         <svg className="bg-[#1A1A1A] p-3 rounded-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"/></svg>
                        </div>
                    </div>
            </footer>
    )
}