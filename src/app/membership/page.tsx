import Image from "next/image";

export default function membershipPage() {
    return (
        <section>
            <div className="flex gap-5 pt-12">
                <div className="flex flex-col items-center">
                    <div className="pt-[20px] border-b-4 border-slate-400">
                        <h1 className="text-5xl font-bold py-2">
                            클라임맥스 이용요금 입니다!
                        </h1>
                    </div>
                    <div className="relative w-[40vw] aspect-[11/16] mb-8">
                        <Image
                            className="object-cover p-8"
                            src="/images/common.jpeg"
                            alt="Membership"
                            priority
                            fill
                            sizes="750px"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
