import Image from "next/image";

export default function Home() {
    return (
        <section className="flex flex-col">
            <div className="pt-[100px] border-b-4 border-slate-400">
                <h1 className="text-7xl font-bold py-2">
                    안녕하세요 클라임맥스입니다!
                </h1>
            </div>
            <div className="pt-12 flex flex-col gap-3 justify-between items-center">
                <p className="text-xl font-bold">
                    클라임맥스를 선택해야 하는이유 3가지
                </p>
                <p className="text-lg">
                    1. 충남 최고의 강사진(스포츠클라이밍 전 국가대표, 현역선수
                    4인)
                </p>
                <p className="text-lg">
                    2. 다양한 강습 프로그램 및 체계적인 강습
                </p>
                <p className="text-lg">3. 천안 최고의 클라이밍 시설</p>
            </div>
            <div className="pt-12 flex flex-col gap-3 justify-between items-center">
                <p className="text-xl font-bold">
                    클라이밍을 지금까지 해왔고 해보고싶고 앞으로도 하겠다면,
                </p>
                <p className="text-xl font-bold">클라임맥스를 방문해주세요!</p>
            </div>
            <div className="relative w-full aspect-video">
                <Image
                    className="object-cover"
                    src="/images/main.jpeg"
                    alt="climbmax"
                    priority
                    fill
                    sizes="750px"
                />
            </div>
        </section>
    );
}
