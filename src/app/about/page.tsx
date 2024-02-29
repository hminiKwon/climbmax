import Image from "next/image";

export default function aboutPage() {
    return (
        <section className="flex flex-col items-center">
            <div className="pb-12">
                <Image
                    className="w-full object-cover aspect-[21/7] brightness-50"
                    src="/images/about.jpeg"
                    alt="About"
                    priority
                    width={800}
                    height={300}
                />
            </div>
            <div className="pt-12 border-b-4 border-slate-400">
                <h1 className="text-8xl font-bold tracking-tighter">
                    CLIMB MAX
                </h1>
            </div>
            <div className="pt-10">
                <span className="flex flex-col items-center text-xl">
                    <p>중요한건 꺾이지 않는 손가락</p>
                    <p>누구나 재밌게 할 수 있는 클라임 맥스입니다.</p>
                </span>
                <span className="flex flex-col items-center text-xl pt-5">
                    <p>
                        천안 최고의 시설 볼더링 짐으로, 쾌적한 환경에서
                        클라이밍을 즐기실 수 있습니다.
                    </p>
                    <p>충남 최고의 강사진들을 만나볼 수 있으며</p>
                    <p>안전하고 다양하며 체계적인 강습을 들으실 수 있습니다.</p>
                </span>
            </div>
        </section>
    );
}
