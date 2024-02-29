import Link from "next/link";

const menu = [
    { href: "/about", title: "About" },
    { href: "/membership", title: "회원권" },
    { href: "/teachers", title: "강사진" },
    { href: "/branch", title: "지점소개" },
];

export default function Navbar() {
    return (
        <div className="flex justify-between items-center px-6">
            <Link href="/">
                <h1 className="text-3xl font-bold">Climb Max</h1>
            </Link>
            <nav>
                <ul className="flex gap-4 items-center p-4">
                    {menu.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="text-gray-500 hover:text-gray-800 hover:border-b-2 border-slate-800"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="rounded-md bg-slate-700 p-[0.2rem]">
                <button className="bg-white rounded-sm text-base hover:opacity-90 transition-opacity p-[0.3rem]">
                    문의하기
                </button>
            </div>
        </div>
    );
}
