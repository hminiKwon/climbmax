import Image from "next/image";

type Props = {
    teacher: {
        name: string;
        image: string;
        career: string[];
    };
};

export default function ProfileCard({
    teacher: { name, image, career },
}: Props) {
    return (
        <article className="mt-10 border-2 border-slate-300 p-2 bg-white">
            <div className="flex gap-4 justify-center basis-1/5">
                <div>
                    <div className="relative w-full aspect-[12/16]">
                        <Image
                            className="object-cover"
                            src={image}
                            alt={`photo by ${name}`}
                            sizes="600px"
                            fill
                            priority
                        />
                    </div>
                    <div className="relative items-center justify-center mt-3">
                        <h1 className="text-4xl font-bold">{name}</h1>
                    </div>
                </div>
                <div className="basis-4/5">
                    {career.map((i, index) => (
                        <p key={index} className="font-bold text-slate-500">
                            {i}
                        </p>
                    ))}
                </div>
            </div>
        </article>
    );
}
