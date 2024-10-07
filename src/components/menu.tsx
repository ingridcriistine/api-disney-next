import { ROUTES } from "@/app/constants/routes";
import Link from "next/link";

interface MenuProps {
    op1: string;
    op2: string;
    op3: string;
}

const styleMenu = {
    link: "text-white text-[25px] hover:text-black transition easy-in-out"
}

export const Menu: React.FC<MenuProps> = ({op1, op2, op3}) => {
    return(
        <nav className="text-preto bg-cyan-700 justify-evenly p-3 fixed w-full z-10 font-robFont text-large flex flex-row justify-center align-center gap-8">
          <Link href={ROUTES.home} className={styleMenu.link}>{op1}</Link>
          <Link href={ROUTES.fetchPage} className={styleMenu.link}>{op2}</Link>
          <Link href={ROUTES.axiosPage} className={styleMenu.link}>{op3}</Link>
        </nav>
    )
}