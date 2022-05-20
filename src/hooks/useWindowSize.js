import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    // dispara sempre que carrega a pagina ([] vazio)
    useEffect(() => {

        // retorna o tamanho da tela
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        handleResize();

        // veririfca se houve mudança no evento resize para atualizar a função
        window.addEventListener("resize", handleResize);

        // remove a escuta do evento e previne memory leak
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return windowSize;
}

export default useWindowSize;
