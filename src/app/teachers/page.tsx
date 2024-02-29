import ProfileCard from "@/components/ProfileCard";

const teachers = [
    {
        name: "조완재",
        image: "/images/jo1.png",
        career: [
            "2015 서울시장기 스포츠 클라이밍 전국대회 리드 대학부 2위",
            "2017 스포츠 클라이밍 충남대표(리드)",
            "2017 인천 송도 스포츠 클라이밍 전국대회 리드 일반부 3위",
            "2017 스포츠 클라이밍 전국체전 충남 코치",
            "2017 청소년 스포츠 클라이밍 국가대표 선발전 충남 코치",
            "2017 스포츠 클라이밍 선수권대회 코치",
            "2018 스포츠 클라이밍 충남대표(리드)",
            "2018 청소년 스포츠 클라이밍 국가대표 선발전 충남 코치",
            "2018 IFSC Climbing World Cup Wujiang(리드) 25위",
            "2018 IFSC Climbing World Cup Xiamen(리드) 29위",
            "2018 스포츠 클라이밍 국가대표(리드)",
            "2022 대구시장배 전국 스포츠 클라이밍대회 2위",
            "순청향대 사회체육학과 졸업",
            "2015~2023 비제이원클라이밍센터 센터장",
            "현 클라임맥스 대표",
        ],
    },
    {
        name: "박민수",
        image: "/images/park.png",
        career: [
            "2015 대구시장배 남자 고등부 리드 3위",
            "2015 목포시장배 남자 고등부 3위",
            "2015 남원시장배 5.13부 리드 1위",
            "2016 울주군수배 남자 학생부 스피드 2위 / 볼더링 3위",
            "2016 23회 THE NORTH FACE CUP 남자 학생부 볼더링 3위",
            "2017 한강 스파이더 4위",
            "2017 서울시장기 남자 대학부 리드 1위",
            "2018 adidas rockstars stuttgart bouldering 랭킹 10위",
            "2018 25회 THE NORTH FACE CUP 남자 일반부 볼더링 1위",
            "2018 SOPEX 볼더링 남자 준우승",
            "2018 Yes 구미전국대회 남자 일반부 스피드 2위",
            "2019 SPOEX 볼더링 남자 우승",
            "2022 salt lake city speed world cup 25위",
            "2022 Seoul speed world cup 33위",
            "2022 스피드클라이밍 국가대표 상비군",
            "2022 울주군수배 남자 일반부 스피드 2위",
        ],
    },
    {
        name: "조성재",
        image: "/images/jo2.png",
        career: [
            "2016 구미시 전국 스포츠클라이밍대회 고등부 3위",
            "2017 청소년 국가대표 선발대회 9위",
            "2017 구미시 전국 스포츠 클라이밍대회 고등부 3위",
            "2017 남원 전국 스포츠 클라이밍대회 3위",
            "2018 청소년 국가대표 선발전 4위",
            "2018 천안시 전국 스포츠 클라이밍대회 일반부 1위",
            "2018 목포시 전국 스포츠 클라이밍대회 일반부 1위",
            "2019 포항시 전국 스포츠 클라이밍대회 2위",
            "2022 충청권 산악연맹 회장배 클라이밍대회 1위",
        ],
    },
    {
        name: "이헌재",
        image: "/images/lee.png",
        career: [
            "2022 경기도 산악연맹 회장배 스포츠 클라이밍 대회 리드 7위",
            "2022 경기도 산악연맹 회장배 스포츠 클라이밍 대회 볼더링 8위",
            "2022 대구 시장배 전국 클라이밍 대회 7위",
            "2022 충남권 산악연맹 회장배 클라이밍 대회 4위",
            "2023 충남대표 (리드, 볼더링)",
            "2020 ~ 2023 비제이원클라이밍 볼더링 강사",
        ],
    },
];

export default function teachersPage() {
    return (
        <section className="w-full flex flex-col items-center">
            <div className="pt-[20px] border-b-4 border-slate-400">
                <h1 className="text-5xl font-bold py-2 text-center">
                    클라임맥스 강사진!
                </h1>
            </div>
            <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-2">
                {teachers.map((teacher, index) => (
                    <ProfileCard key={index} teacher={teacher} />
                ))}
            </div>
        </section>
    );
}
