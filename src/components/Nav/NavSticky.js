import { useEffect } from 'react';

const useNavSticky = () => {
    useEffect(() => {
        const nav = document.querySelector('.contenedorMenu');
        const navOffsetTop = nav.offsetTop; // Obtener la posición superior del nav

        const handleScroll = () => {
            if (window.scrollY >= navOffsetTop) {
                nav.classList.add('sticky');
            } else {
                nav.classList.remove('sticky');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};

export default useNavSticky;
